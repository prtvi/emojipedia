import Fuse from 'fuse.js';
import EMOJIS from './emojis.json';

// constants
const resultsPerPage = 9;
const maxSearchLen = 25;

const fuse = new Fuse(EMOJIS, {
	keys: ['description', 'aliases', 'tags'],
	includeScore: true,
});

const getNrandomEmojis = function (n) {
	if (n > 9 || n <= 0) n = 9;

	const res = [];
	const len = EMOJIS.length;

	for (let i = 0; i < n; i++) res.push(EMOJIS[Math.floor(Math.random() * len)]);

	return res;
};

const sortDescending = (a, b) => {
	if (a.score > b.score) return 1;
	if (a.score < b.score) return -1;
	return 0;
};

export { resultsPerPage, maxSearchLen, getNrandomEmojis, sortDescending, fuse };
