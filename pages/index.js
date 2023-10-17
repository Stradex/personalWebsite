import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import MainPage from '../components/mainPage';
import About from '../components/about';
import ProjectItem from '../components/projectItem';
import Footer from '../components/footer';
import Menu from '../components/menu';

export default function Home() {
  return (
    
    <MainPage>
      <Head>
        <title>Maximiliano Ruben Viamonte's website</title>
        <meta name="description" content="Personal website of Maximiliano Ruben Viamonte (aka Stradex). Come in and watch my stuff." />
      </Head>
      <Header title="My Works" subtitle="Maximiliano Ruben Viamonte"></Header>
      <Menu></Menu>
      <About>
        Hello there, my name is Maximiliano Ruben Viamonte but some know me as Stradex.<br /> This is my personal website where I upload all my past and current projects.<br /><br />
        I've spent years doing Games, Music and other stuff. I love creating stuff, be it a game, a song, a piece of software, a piece of text that tells an history, anything that requires me to be creative brings joy to my heart.<br /><br />
        Now go on, stay with me until the end and I will tell you the story of soemone who love making stuff, from the very beginning until today.
      </About>
    
      <ProjectItem title="The first steps" img="/personalWebsite/images/games/oldgames.jpg">
        As many of you, I grew up playing Doom, Heretic, Mario, Sonic, and those kind of games <i>(I believe you can guess my age)</i>, so one of my biggest dreams as a child was to make my own game.<br /><br />
        During my childhood I spent lot of time with my computer teacher, I was fascinated by computers, mostly because of videogames. I remember when I was able to play Mario Bros and Doom in the school for the first time, it was mind-blowing for me. I remember how my computer teacher showed me the very basics of HTML, how he showed me how to use Macromedia Flash Player <i>(oh, the memories)</i>, and he also used to talk about other stuff with me, I remember those times fondly.<br /><br />
        Few years went on and I started to learn how to do make my very first games using Flash, and I was fascinated by it. I remember having my own Website (bearpole.com.ar) in which I used to upload my flash games and songs that I loved.
        While making that website I did learn a lot of stuff that I found amazing. For example I did learn basic stuff about CSS, ASP, and I even learned how to make Databases with Access and I was able to make a basic blog for my website.
        During those years I also discovered Game Maker and ooohh boy, believe me it was amazing. I could spend hours and days just trying to make games with it, I did lost so many games that I did during my childhood that thinking about it makes me feel a bit sad. I made some games with Game Maker, others with flash, and I did learn the basics of how to make a website during those years.
      </ProjectItem>

      <ProjectItem title="Diving into programming" img="/personalWebsite/images/websites/websitesTime.jpg">
        As I started to grew up, during my teen ages, I was busy trying to learn C and C++, trying Ubuntu, managing to surive the Technical High School while doing all that stuff, and also failing at dating.
        During the last year of the Technical High School I tried to do make my own 2D Game Engine using C first, and then C++. Of course I failed miserable, but it was a beautiful failure because I did learned a lot, I had a great time learning the basics of UI with GTK+.<br /><br />
        After finishing the School, I went to the University to study Informatics Engineering and at the same time I started with a friend from the school our very own first business: making websites. We designed some websites, I did learn a lot about JS, HTML, CSS and some frameworks and libraries like Jquery and later Bootstrap. I remember I did read some books about web development, but I remember mostly reading Professional JavaScript® for Web Developers by Nicholas C. Zakas<br /><br />
        We made some websites that we sold, another websites we made it for our family members but overall it was a nice experience, and the most important part was not doing the programming but learning how to manage a small business, deal with clients, talk with people, having a business talk and so on. While doing this work I also did work teaching basic math for High School students.<br /><br />
        Sadly, making websites and teaching math for High School students while studying Engineering was too much for me personally so I wasn't able to finnish the career. So this is a period of my life with mixed feelings, where sometimes I used to feel motivated and other times just sad.
      </ProjectItem>

      <ProjectItem title="Stradexengine" img="/personalWebsite/images/games/stradexengine.jpg">
        After a three years, I stopped doing websites with my friend and I spent a lot of time trying to fullfil again my dream of making my very own 2D Game Engine, but this time it was actually more a JavaScript Framework rather than an engine.<br /> <br />
        The name of the JS Framework was StradexEngine <i>(same name as with my first try with C++ and GTK)</i> and it was a fullfiling experience for me since I was able to apply lot of native JS knowledge into it. I used JS and JQuery for it. It had a nice Map Editor and I was able to make some few test games and actually a pretty nice space-based shooter game with it.<br /><br />
        Also this project was the very first project in which I used Git and Github, but not so well to be honest, I did improved my skills with git later but it was a nice experience for me to learn that during this project.
      </ProjectItem>

      <ProjectItem title="H.A.S.T.E" img="/personalWebsite/images/HASTE.jpg" url="https://www.indiedb.com/games/haste-a-free-to-play-fps">
        I spent near two years without programming any project, I was feeling tired of programming and not motivated. But then, I decided to go back and give it a try with making my very own first game using IDTech 4 Engine, which was a very ambitious project, just what I needed to be back at doing stuff.<br /><br />
        The beautiful thing about this project is that it forced me to learn how to properly use Visual Studio to compile a whole Game Engine, I did learn 3D Modelling with Blender, and I was being humbled by the experience of trying to make a 3D game. It was probably my most active year or close to it, since it consumed a lot of my time, but it was a great time. I also encountered my very first experience dealing with networking for a game, since all my previous projects where singleplayer but for this very project I decided to make it Cooperative.<br /><br />
        Although IDTech 4 includes a basic Netcode, it does not include Cooperative, so it was a nice experience to do some stuff to make it work in coop, I had to implement my own way of having client side entities and ways to optimize how many packes to send and receive, since the engine was not made to deal with so many packets from so many entities at the same time.
      </ProjectItem>

      <ProjectItem title="Librecoop" img="/personalWebsite/images/mods/Librecoop.jpg" url="https://www.moddb.com/mods/librecoop-dhewm3-coop">
        You probably guessed it already since I used IDTech 4, but I can tell it to you now: I DO LOVE Doom 3. I remember playing OpenCoop and Last Man Standing Mod with some friends in the past, but it always made me feel frustrated the fact that none of these mods released their source code. So while I was working with H.A.S.T.E., and even after, I decided it was time to make my own Cooperative mod for Doom 3 and release the source code. It was an amazing experience, I still remember being in the IDTech 4 Discord community while talking about the idea, and some veteran member of the community told me that making the AI enemies in Coop was not the issue, but making all the events and special things that the maps and the gameplay had that was never designed for Coop.<br /><br />
        I felt like I wanted to deal with the challenge, I met a programmer from US and he teached me more about how to properly use Github and that helped me a lot. I implemented some of the clientside stuff that I had for my H.A.S.T.E. game but I also even improved that implementing a feature that I called "clientside damage" which it helped to make clients to feel they were actually shooting the enemies in real time without having to experience the delay that is natural in an online game.<br /><br />
        This project had some nice reception since it was the very first, and until the date the only one, Doom 3 Coopeartive Open Source mod. There are some videos of people playing it online, and it is actually posted in the official Dhewm3 website, the website of the Doom 3 port for which this mod was made.
      </ProjectItem>

      <ProjectItem title="Introducing Godot" img="/personalWebsite/images/games/GodotEngine.jpg">
        After that experience with IDTech 4 I decided that it was time to move on to another thing, and I wanted to try Godot Engine since I kept hearing wonders of it from people in the IDTech 4 community. So I decided to give it a try and read the book Godot Engine Game Development in 24 Hours by  Ariel Manzur and also follow an Udemy course of Godot which I sadly don't remember it's name.<br /><br />
        I made first some basic games and experiments with it, I did some experiments with making basic multiplayer prototypes since now I wanted everything to be cooperative. One of the projects was a game I was making with a friend from the US, the same who teached me how to use GitHub properly since he is a Software Engineer and he helped me to organize a bit more my work with Trello, Github and also some coding practices. <br />
        We made some nice progress, I was able to make a nice trigger system in which the player will collide with invisible boxes that, of course, would trigger events. I was obviously inspired by the trigger system found in IDTech 4, I also implemented a cooperative netcode so we could test the game with my friend online. We also made a space-based shooter game called Space Schmup Coop, and it was my very first game using procedural generated content and I learned how to sync a random seed.<br /><br />
        After it my next project was a game called "Powerfool" which was a multiplayer turn-based strategy game in which you could play against your friends in a PVP match or you could also play against the AI in cooperative rounds. With this project I also implemented procedural generated content and it teached me something about how to make a bot for a game. Overall my time with Godot was nice and I hope to return to it someday.
      </ProjectItem>

      <ProjectItem title="My first Map for Doom 3" img="/personalWebsite/images/mods/delta.jpg" url="https://www.moddb.com/games/doom-iii/addons/delta-labs-crew-quarters-sp-map">
        I always wanted to make my very own map for Doom 3 but I always found myself afraid of such a big task, but one day I decided <i>"I have to do this before I die"</i> so I dedicated 3 months to make my very own Doom 3 map as a learning experience for a future texture pack I was planning and also as a lesson of level design.<br /><br />
        The map was called "Delta Labs Crew Quarters" and it is a more action-paced map since I wanted to show that Doom 3 can be atmospheric and have nice action at the same time. Overall it is a nice experience that combines the best of two worlds: The action pace of classic Doom with the unique and unbeatable atmosphere of Doom 3.<br /><br />
        Thankfully the map had a nice reception and that made me feel encouraged and motivated, although there were some critics that the final room battle was quite hard but overall people liked it and that made me feel very happy since it was my second success in Doom 3 <i>(the first one, and also bigger one, being Librecoop)</i>.
      </ProjectItem>

      <ProjectItem title="Sci-Fi Texture Pack" img="/personalWebsite/images/3dmodeling/3dtextures.jpg" url="https://stradex.itch.io/scifi-tech-hall-texture-pack">
        After finishing my Doom 3 map I decided it was time to start making my so wanted Sci-Fi Texture Pack using what I learned from Doom 3, so I started make a Sci-Fi Hi-Poly Scene in Blender, using Hard Surface Techniques, and I baked the pieces of such scene into textures that I know they would combine nice and seamessly.<br /><br />
        It took me a nice while, but it boosted my 3d modeling abilities a lot, so it was a nice experience to improve my skills, and my first step into getting better at making textures for a game, since the textures I did made for H.A.S.T.E. were not great at all. I also need to thank a lot to many Udemy courses I followed to improve in blender, mostly related to Hard Surface <i>(destructive and non-destructive)</i> modeling.
      </ProjectItem>

      <ProjectItem title="C# and WPF" img="/personalWebsite/images/sistemas/SistemaEMMG.jpg">
        One of my family members was having a hard time at work, she was always having problems dealing with the control of tickets and similar stuff so I decided to learn C# and WPF to make a small system in order to help her so she didn't need to be using so many excels and instead she could have all the information in a same place and also better ways to filter information and control the money that goes out and in for the company she works for.<br /><br />
        To learn C# and WPF I used mainly two nice books as my references: Beginning C# and .NET by Benjaming Perkings and Jon D. Reid, and also Professional C# and .NET by Christian Nagel.<br /><br />
        This was a nice experience for it was something different from so much Game Development, so I did enjoy making this small system. I used a MySQL with an Apache server to let the app connect with the database so it is prepared to work with a server hosted database if necessary.
      </ProjectItem>

      <ProjectItem title="3D Modelling" img="/personalWebsite/images/3dmodeling/3dstuff1.jpg">
      Did I told you that I also like doing 3D Modelling?, well I am working in a project that I am not allowed to share many information now but it is helping me to boost my 3d modelling skills. I gotta admit that doing Hard Surface is something that focused myself on, mostly in doing Sci Fi stuff.
      </ProjectItem>
      <Footer></Footer>
    </MainPage>
  );
}
