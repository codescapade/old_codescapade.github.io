import {getPosts} from '../_posts';

const lookup = new Map();

getPosts().forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { year, slug } = req.params;
	const completeSllug = `${year}/${slug}`;
	
	if (lookup.has(completeSllug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(completeSllug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Page not found`
		}));
	}
}
