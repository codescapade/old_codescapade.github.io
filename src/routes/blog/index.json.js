/**
 * @fileoverview Get posts data for the blog list.
 */

import { getPostData } from '../_posts';

// Post contents array.
const contents = JSON.stringify(
  getPostData('post').map((post) => {
    return {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      displaydate: post.displaydate,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
