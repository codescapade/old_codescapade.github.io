/**
 * @fileoverview Converts all markdown blog posts into json.
 */

import fm from 'front-matter';
import glob from 'glob';
import fs from 'fs';
import markdownIt from 'markdown-it';
import hljs from 'highlight.js';
import mila from 'markdown-it-link-attributes';

// The directory to look for the posts.
const POST_DIR = './src/content/posts';

// The directory to look for the game posts
const GAME_DIR = './src/content/games';

// Load the posts and return them as an array.
export function getPostData(type) {
  const dir = type === 'post' ? POST_DIR : GAME_DIR;
  const slugs = glob.sync(`${dir}/**/*.md`).map((file) => {
    const split = file.split('/');
    if (type === 'post') {
      return `${split[4]}/${split[5].slice(0, -3)}`;
    } else {
      return `${split[split.length - 1].slice(0, -3)}`;
    }
  });

  return slugs
    .map((slug) => getPost(slug, type))
    .filter((post) => {
      return !post.draft; // Exclude draft posts.
    })
    .sort((a, b) => {
      if (type === 'post') {
        return a.date < b.date ? 1 : -1; // Sort latest first.
      } else {
        return a.weight < b.weight ? 1 : -1; // Games sort by weight. Higher first.
      }
    });
}

// Get a post converted from markdown to html with front matter properties.
function getPost(slug, type) {
  let file;
  if (type === 'post') {
    file = `${POST_DIR}/${slug}.md`;
  } else {
    file = `${GAME_DIR}/${slug}.md`;
  }

  const markdown = fs.readFileSync(file, 'utf-8');

  // Get the front matter data from the markdown file.
  const frontMatter = fm(markdown);

  let excerpt = getExcerpt(frontMatter.body);

  // Get a date string from the publish date.
  let displaydate;
  if (type === 'post') {
    displaydate = getDateString(frontMatter.attributes.date);
  } else {
    displaydate = getDateString(frontMatter.attributes.releaseDate);
  }

  frontMatter.body = frontMatter.body.replace('<!--more-->', '');

  const md = getMdParser();
  const html = md.render(frontMatter.body);
  excerpt = md.renderInline(excerpt);

  return {
    ...frontMatter.attributes,
    slug,
    html,
    excerpt,
    displaydate,
  };
}

// Get an excerpt from a post.
function getExcerpt(body) {
  let excerpt;
  if (body.indexOf('<!--more-->') !== -1) {
    const split = body.split('<!--more-->');
    excerpt = split[0];
  } else {
    if (body.length > 140) {
      excerpt = body.substr(0, 140);
      const index = excerpt.lastIndexOf(' ');
      excerpt = excerpt.substr(0, index) + '...';
    } else {
      excerpt = body;
    }
  }

  return excerpt;
}

// Create markdown converter instance and add highlighter to it for syntax highlighting.
function getMdParser() {
  const md = new markdownIt({
    highlight: function(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }
      return '';
    },
  });

  // Make external links open in a new tab.
  md.use(mila, {
    pattern: /^https:/,
    attrs: {
      target: '_blank',
      rel: 'noopener',
    },
  });

  return md;
}

// Convert a markdown date into a YYYY-MM-DD string.
function getDateString(markdownDate) {
  if (markdownDate === 'TBD') {
    return markdownDate;
  }

  const date = new Date(markdownDate);

  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
    date.getDate()
  )}`;
}

// Add a leading zero when the number is under 10.
function addZero(nr) {
  if (nr < 10) {
    return `0${nr}`;
  } else {
    return nr.toString();
  }
}
