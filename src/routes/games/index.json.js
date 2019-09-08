/**
 * @fileoverview Get the game post data for the game list overview.
 */

import { getPostData } from '../_posts';

const contents = JSON.stringify(
  getPostData('game').map((post) => {
    return {
      title: post.title,
      slug: post.slug,
      cover: post.cover,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
