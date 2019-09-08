import fm from 'front-matter';
import glob from 'glob';
import fs from 'fs';
import markdownIt from 'markdown-it';
import hljs from 'highlight.js';
import mila from 'markdown-it-link-attributes';

const GAMES_DIR = './src/content/games';

export function getGames() {
	const slugs = glob.sync(`${GAMES_DIR}/*.md`).map((file) => {
    const split = file.split('/');
		return `${split[split.length - 1].slice(0, -3)}`;
	});

	return slugs.map(getGame).filter((game) => {
		return !game.draft;
	}).sort((a, b) => {
		return a.weight < b.weight ? 1: -1;
	});
}

function getGame(slug) {
	const file = `${GAMES_DIR}/${slug}.md`;

	const markdown = fs.readFileSync(file, 'utf-8');
	const md = new markdownIt({
		highlight: function(str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(lang, str).value;
				} catch(__) {

				}
			}
			return '';
		}
	});

	md.use(mila, {
		pattern: /^https:/,
		attrs: {
				target: '_blank',
				rel: 'noopener'
		}
	});
	const frontMatter = fm(markdown);

  const releaseDate = frontMatter.attributes.releaseDate;
  let displaydate;
  if (releaseDate === 'TBD') {
    displaydate = releaseDate;
  } else {
    const date = new Date(releaseDate);
    displaydate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
	}
	
	let excerpt;
	let body;
	if (frontMatter.body.indexOf('<!--more-->') !== -1) {
		const split = frontMatter.body.split('<!--more-->');
		excerpt = split[0];
		body = split[0] + split[1];
	} else {
		body = frontMatter.body;
		if (body.length > 140) {
			excerpt = body.substr(0, 140);
			const index = excerpt.lastIndexOf(' ');
			excerpt = excerpt.substr(0, index) + '...';
		} else {
			excerpt = body;
		}
	}
	
	const html = md.render(body);
	
	return {
		...frontMatter.attributes,
		slug,
		html,
		excerpt,
		displaydate,
	};
}

function addZero(nr) {
	if (nr < 10) {
		return `0${nr}`;
	} else {
		return nr.toString();
	}
}