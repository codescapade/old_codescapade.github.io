/**
 * @fileoverview This creates a map with all posts.
 */

import { getPostData } from '../../_posts';

const lookup = new Map();

// Load all posts from the _posts.js and map them by slug.
getPostData('post').forEach((post) => {
  lookup.set(post.slug, JSON.stringify(post));
});

export function get(req, res, next) {
  // Folder structure is [year][slug] so year and slug are available as parameters.
  const { year, slug } = req.params;

  // Create the slug from the year + slug.
  const completeSllug = `${year}/${slug}`;

  // If available in the json return the post.
  if (lookup.has(completeSllug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(lookup.get(completeSllug));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: `Page not found`,
      })
    );
  }
}
