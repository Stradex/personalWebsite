import fs from 'fs'; //Node.JS FileSystem
import path from 'path'; //Node.JS PathSystem
import matter from 'gray-matter'; //Library to parse metadata from each markdown file.
import { remark } from 'remark'; //Library to parsing markdown
import html from 'remark-html'; //Libreary to convert pared Markdown into HTML

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostsFileNames() {
    return fs.readdirSync(postsDirectory);
}
function getIdByPostFileName(fileName) {
    return fileName.replace(/\.md$/, '');
}

export function getSortedPostsData() {
    //Get files names under /posts

    const fileNames = getPostsFileNames();

    const allPostsData = fileNames.map((fileName) => {
        //Remove ".md" from file name to get the id.
        const id = getIdByPostFileName(fileName);

        //Read markdown file as string

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        //Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        //Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });

    //Sort posts by date
    return allPostsData.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
    })
}

export function getAllPostsIds() {
    return getPostsFileNames().map((fileName) => {
        return {
            params: {
                id: getIdByPostFileName(fileName),
            },
        };
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    //Use gray-matter to parse the post medatada section
    const matterResult = matter(fileContents);

    //Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    //Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    }
}