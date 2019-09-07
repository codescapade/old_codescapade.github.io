import {getPosts} from '../blog/_posts.js';

const contents = JSON.stringify(getPosts().map(post => {
	return {
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}