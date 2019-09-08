import { getGames } from './_games';

const contents = JSON.stringify(getGames().map(game => {
	return {
		title: game.title,
		slug: game.slug,
		cover: game.cover,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json',
	});

	res.end(contents);
}
