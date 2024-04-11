---
title: 'Finding errors from WebApp and Server: My DevOps experience.'
date: '2024-04-10'
description: 'Follow my personal experience trying to debug, speedup and trying to solve issues with a web app hosted in a Dedicated Server.'
---

## Starting as DevOps

A few months ago I started working in a web app that had thousands of registered clients and hundreds of active clients all the time. 

It was a very interesting challenge for me since I used to make and work with small web apps but never something of that magnitude.

We did set that web app in a Debian 12 VPS. The web app itself was a **Laravel** APP with **Blade PHP** and **Angular** for the frontend.
The app also had web socket servers that were hosted using **Node PM2**

## Moving from VSCode to VIM

I was used to work with **Visual Studio Code**, but since I started working with this web app via SSH I realized that VS Code was quite uncomfortable for me. I used a SSH extension for it that in some machines worked and in others not and it did install a folder in my dedicated server, which I didn't like too much.

I was thinking in a way to be able to work from any computer, or device, easily in my server without having to configure, install, etc... something like **VSCode**, and **VIM** was the ideal solution since it was already installed in the server and also it is available in any linux terminal mostly.

___

*Fun fact:* Thanks to **vim** I was able to solve an issue using my phone, using **Termux**, while I was eating with my girlfriend at a restaurant. And that was cool.

So that alone makes vim greater than VS Code for me while working with VPS's and Dedicated Servers remotely.

___

## Creating a chroot jail for frontend developers.

During my work with this web app, we wanted to make a new frontend with the team, but the issue was that our backend code was private and should not be seen by the frontend developers. So, in order to make the enviroment safe for the frontend developers to work without breaking the server, and safe for my team so the backend code was safe, I made a **chroot jail** to restrict a user access to the whole filesystem and I configured it to work via **SFTP**.

The frontend developers we hired were used to work with Visual Studio Code so I explained them how to work using the **SFTP** extension and how to connect to our server. We were able to allow our developers to work in a kind controlled enviroment. 

## System monitoring and performance issues.

While working in this project I faced some performance issues and other issues in the road. Those issues appeared mostly at night when most of the people tried to use the Web APP at the same time.

I learned some valuable things I wish to share from this experience. *(The Web APP was hosted using Apache)*

1. Install a system monitor history in my web app in order to see if there are and, in case it happens, when the bottleneck happens. We ending installing Apache native **server status** and **munin**
2. Ensure that the **DNS** nameservers for my  domain were fast and good. Ex: **Cloudfare**. 
3. **Cache** as must as you can, but always be careful with this, there are certaing things that you don't want to allow to be cached. You can enable cache with Apache itself but also it is good to make sure that the client browser will be able to cache the assets of your app.
4. Use **CDN** to store as much assets as I can. I try to make the client to download as less resources as possible from my server.
5. Ensure you are giving **PHP** *(or PHP-FPM)* enough resources to work with your server. Increase the memory limit.
6. Optimize Apache Server for high traffic with the module **MPM Worker** or **MPM Event** and configure it to your server needs.
7. Consider if the infrastructure for your app is the right one. In the case of our app it was decided that the best option was to set the database in a Dedicated Server just for the database. So we had two servers for our APP: One for the app itself and another one for the database only. Originally the web app was hosted all in just one server, but then we finally decided to change it to two servers: one for the app and other for the database.

## Debug errors

Since the Web App we were working with was originally a very complex app it was not an option for our team to rewrite the whole app from scratch so it was my work to go through the whole source code, understand the app and then start working in modifications and optimizations for it. In such task I encountered lots of bugs and issues that are common in such unfinished complex software. So I will share my list of recommendations.

1. READ THE ERROR LOGS!
2. Read the error logs AGAIN!
3. Did I say again read the logs?
4. Cannot read the logs?, enable debug mode if possible and/or try to enable the logs.
5. Create a test enviroment for your app. We had another VPS for our TEST APP so I could freely make any modification without breaking our main web app.