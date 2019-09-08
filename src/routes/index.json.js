/**
 * @fileoverview The home page data. Gets the latest blog post and game to put on the homepage.
 */

import { getPostData } from './_posts';

const games = getPostData('game').map((post) => {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
  };
});

const posts = getPostData('post').map((post) => {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
  };
});

const contents = JSON.stringify({
  game: games[0],
  post: posts[0],
});

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
