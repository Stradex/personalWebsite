---
title: 'Next.js in 32 bits.'
date: '2023-10-17'
description: 'In this post you will learn how to make Next.js to run in a 32 bits OS.'
---

## Installing Next.js in 32 bits
In this post I'll teach you how to install Next.js in a **32 bits** OS *(tested only with Windows 10)*. 

### Why does this even matter?
I know, I know, 32 bits Operative Systems are already obsolete and if you find yourself working in such architecture, **you should upgrade to 64 bits** NOW. 

But there are times, like in my case, where there is no alternative since maybe you are working with someone's else computer, or in an old computer and you have no time or the means to upgrade to 64 bits easily.

### What happens if I try to runs Next.js in 32 bits?

The first time I tried to run Next.js in a computer using a 32 bits architecture, the error I was receiving was that, when I tried to run **npm run dev** to start my Next.js app, the command will just wait for a moment and then it will terminate without starting the Node server, and therefore without starting my Next.js app.

### How I ended working in 32 bits?

You  may be wondering: *why is this fool working in such deprecated architecture?*

Well, let me explain myself. Few days ago I was working in my Next.js project, which is this website by the way, and I was having a great time working in my desktop computer that, of course, runs in a 64 bits operative system.

But the issue was that a few days later I had to go to my girlfriend's house and I couldn't move my desktop computer to her house so I decided to bring my old Notebook. The issue was that I completely forgot that the Notebook was using a 32 bits version of Windows 10.

Therefore when I tried to install all the necessary tools to continue working with my website project with Next.js, I found myself not being able to start the app for the NodeJS server was not starting.

At first glance I thought it may be NodeJS, then I thought it was React but I lost a few hours trying to solve the problem.

### How to fix it?

After trying with different versions of Next.js, NodeJS and React, I was finally able to find a build that allowed me to continue working with my Next.js app with that old computer that was running the OS in 32 bits.

**This is the working build:**
```json
    Next.js 12.2.5
    React 18.2.0
    Node 18.14.2
    npm 9.5.0
```

With the versions of React, Node, npm and Next.js listed above I was able to finally get my Next.js app working with 32 bits. 

To force your project to use those specific versions of Next.js and React, you can edit your **package.json** file the following way, changing the values of the versions to use of next, react and react-dom.

```json
{
  "dependencies": {
    "next": "12.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0",
  },
}
```

**Additional note**

First I thought that I needed to force the use of **Babel** instead of **SWC** since I thought **SWC** was 64 bits only, but it seems that it works fine with **SWC**  too. But just in case, if you still can't get it to work with the versions of Node, React, Next and NPM that I told you, you can also force the use of **Babel** instead of **SWC** the following way.

*(This step is NOT necessary if you already made your Next.js app work in 32 bits with what I told you before.)*

Create a **babel.config.js** file with the following data:

```json
module.exports = {
   presets: ['next/babel'],
    "plugins": []
};
```

### How to export Static HTML files
When trying to export static generated html files, you will face some issues for new Next.js versions use a new method to export.

We will need to change the image loader to **akami** and set output to **standlone** in our Next.js configuration JSON.

To generate the static generated files with this old version of Next.js, you will have to do the following.

1. Go to **next.config.js** and set the following.

```json
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'standalone',
     trailingSlash: true,
         
    images: {
        unoptimized: true,
        loader: 'akamai',
        path: '',
    },
  }
   
  module.exports = nextConfig
```

2. Go to the root folder of your project in the terminal and write:
 **npx next build**

3. Then write:
 **npx next export**



### Final thoughts

Even if you manage to make your Next.js project in 32 bits, remember that you will be using a old version of it, therefore you will face a lot of issues trying to work in such conditions for you will not be enjoying many bug-fixes and latest features of the framework, and many new libraries made for Next.js may won't work.

This is only a temporary solution for anyone in a situation where there's NO way to have a 64 bits OS working. But don't even consider working for long in 32 bits, I don't want to encourage anyone to work in such architecture and please if you find yourself in this situation consider to change to 64 bits as soon as you can.