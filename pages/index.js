import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import MainPage from '../components/mainPage';
import About from '../components/about';

export default function Home() {
  return (
    <MainPage>
    <Header title="My Works" subtitle="Maximiliano Ruben Viamonte"></Header>
    <About>Hello there, my name is Maximiliano Ruben Viamonte but some know me as Stradex.<br /> This is my personal website where I upload all my past and current projects.<br /><br />
I've spent years doing Games, Music and other stuff. I love creating stuff, be it a game, a song, a piece of software, a piece of text that tells an history, anything that requires me to be creative brings joy to my heart.<br /><br />
Now go on, stay with me until the end and I will tell you the story of soemone who love making stuff, from the very beginning until today.</About>
    </MainPage>
  );
}
