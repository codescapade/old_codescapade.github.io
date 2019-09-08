/**
 * @fileoverview Get all the game posts. Works just like the blog json.js file.
 */

import { getPostData } from '../_posts';

const lookup = new Map();

getPostData('game').forEach((post) => {
  lookup.set(post.slug, JSON.stringify(post));
});

export function get(req, res, next) {
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: 'Page not found',
      })
    );
  }
}
