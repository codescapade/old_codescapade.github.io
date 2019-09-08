import { getGames } from './games/_games';
import { getPosts } from './blog/_posts';

const game = getGames().map(game => {
  return {
    title: game.title,
    slug: game.slug,
    excerpt: game.excerpt,
  }
});
const post = getPosts().map(post => {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt
  }
});

const contents = JSON.stringify({
  game: game[0],
  post: post[0],
});

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}