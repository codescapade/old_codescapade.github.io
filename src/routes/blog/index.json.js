import {getPosts} from './_posts';

const contents = JSON.stringify(getPosts().map(post => {
	return {
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		displaydate: post.displaydate
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}