import Head from "next/head";
import Header from "../components/header";
import MainPage from "../components/mainPage";
import Menu from "../components/menu";
import Footer from "../components/footer";
import styles from "../components/mainPage.module.css"
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

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
        <Header title="My Works" subtitle="Maximiliano Ruben Viamonte"></Header>
        <Menu></Menu>
        <div className={styles.mainContent}>
            {allPostsData && allPostsData.map(({id, date, title}) => (
              <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
            ))}
        </div>
        <Footer></Footer>
    </MainPage>
    );
}