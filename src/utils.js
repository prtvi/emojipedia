import React from 'react';
import Fuse from 'fuse.js';
import EMOJIS from './emojis.json';

// constants
const maxSearchLen = 25;
const resultsPerPage = new Map([
	[450, 15],
	[580, 18],
	[768, 18],
	[1024, 24],
	[1250, 24],
]);

const fuse = new Fuse(EMOJIS, {
	keys: ['description', 'aliases', 'tags'],
	includeScore: true,
});

const getNrandomEmojis = function (n) {
	if (n <= 0 || n >= 1849) n = 12;

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

const getWindowDimensions = function () {
	const { innerWidth: width, innerHeight: height } = window;
	return { width, height };
};

const useWindowDimensions = function () {
	const [windowDimensions, setWindowDimensions] = React.useState(
		getWindowDimensions()
	);

	React.useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
};

const getResultsPerPage = function (width) {
	if (width > 0 && width <= 450) return resultsPerPage.get(450);

	if (width > 450 && width <= 580) return resultsPerPage.get(580);

	if (width > 580 && width <= 768) return resultsPerPage.get(768);

	if (width > 768 && width <= 1024) return resultsPerPage.get(1024);

	if (width > 1024 && width <= 1250) return resultsPerPage.get(1250);

	if (width > 1250) return resultsPerPage.get(1250);
};

export {
	fuse,
	maxSearchLen,
	getNrandomEmojis,
	sortDescending,
	useWindowDimensions,
	getResultsPerPage,
};
