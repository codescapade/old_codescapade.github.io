---
title: Switching to a new site generator
date: 2019-09-08
draft: false
---

About two weeks ago I launched this blog. I wanted a simple blog generator that could generate static sites to host on Github Pages, [Hugo](https://gohugo.io) seemed like the best choice. It is pretty easy to setup and use. Everything was working well until I added a dark mode.
<!--more-->
With Hugo you don't use a front-end framework, your static site is just a collection of separate pages. When I added the dark mode I added some JavaScript to check which mode you last used to add the appropriate css. With the dark mode enabled, when you go to a new page the background starts white and then has to add the dark mode css after. This makes the page flicker for a split second. That gets really annoying when you go from page to page.

&nbsp;

### Finding a new generator
I needed a different generator, one that makes something like a single page app instead of separate pages. I looked at a few of them. [Gatsby](https://www.gatsbyjs.org) seems like a good one but I don't really like React a lot and it seems like you need a lot of plugins. [Gridsome](https://gridsome.org) seems good as well it uses Vue instead of React. After trying it I couldn't get it to build properly. It might have been my fault or maybe because it is still pretty new. Both of these seemed a bit overkill for just a blog / portfolio.

Then I found [Svelte](https://svelte.dev), it's a reactive framework like React and Vue but compiles your code into plain JavaScript so you end up with only the code needed to run your site. I never heard of it before but it looked promising. It's pretty easy to get started with it if you have used a reactive framework before. The framework that can generate static sites with Svelte is called [Sapper](https://sapper.svelte.dev). 

Sapper is still in early development so there are some missing features and some bugs but overall it works quite well. I like that I have more control over the markdown parsing. I learned a lot about it over the weekend. With Sapper you convert your markdown page into HTML and then into JSON that you can query. It only took me a weekend to go from not knowing the framework to converting my whole blog to it. Feeling pretty good about that.

So now this blog runs on Sapper. I will probably make a separate post about how to set it up because there isn't a lot of information on certain steps yet.