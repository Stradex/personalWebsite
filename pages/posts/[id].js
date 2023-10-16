import Head from "next/head";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import MainPage from "../../components/mainPage";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PostComponent from "../../components/postComponent";

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
/*     return (
        <>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1>{postData.title}</h1>
            <div>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </article>
        </>
    ); */
    return (
        <MainPage>
        <Head>
          <title>{postData.title}</title>
          <meta name="description" content={postData.description} />
        </Head>
          <Header title="My Blog" subtitle="Maximiliano Ruben Viamonte"></Header>
          <Menu></Menu>
           <PostComponent
                title={postData.title}
                date={postData.date}
                description={postData.description}
                contentHtml={postData.contentHtml}
            />
          <Footer></Footer>
      </MainPage>
    )
}