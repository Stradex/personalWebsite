import Head from "next/head";
import Header from "../components/header";
import MainPage from "../components/mainPage";
import Menu from "../components/menu";
import Footer from "../components/footer";
import styles from "../components/mainPage.module.css"
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import PostPreview from "../components/postPreview";

//Static Generation
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        },
    };
}

export default function Blog({allPostsData}) {
    return (
    <MainPage>
      <Head>
        <title>Blog of Maximiliano Ruben Viamonte.</title>
        <meta name="description" content="Personal blog of Maximiliano Ruben Viamonte (aka Stradex)." />
      </Head>
        <Header title="My Blog" subtitle="Maximiliano Ruben Viamonte"></Header>
        <Menu></Menu>
        <div className={styles.mainContent}>
            {allPostsData && allPostsData.map(({id, date, title, description}) => (
                <PostPreview key={id} id={id} date={date} title={title} description={description}></PostPreview>
            ))}
        </div>  
        <Footer></Footer>
    </MainPage>
    );
}