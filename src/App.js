import React from 'react';
import Fuse from 'fuse.js';

import './App.css';

import SearchBar from './SearchBar/SearchBar';
import EmojiCard from './EmojiCard/EmojiCard';
import Pagination from './Pagination/Pagination';

import EMOJIS from './emojis.json';

// constants

const resultsPerPage = 9;
const resultLimit = 50;

const fuse = new Fuse(EMOJIS, {
	keys: ['description', 'aliases', 'tags'],
	includeScore: true,
	minMatchCharLength: 2,
});

const getNrandomEmojis = function (n) {
	if (n > 9 || n <= 0) n = 9;

	const arr = [];
	const len = EMOJIS.length;

	for (let i = 0; i < n; i++) arr.push(EMOJIS[Math.floor(Math.random() * len)]);

	return arr;
};

const sortDescending = (a, b) => {
	if (a.score > b.score) return 1;
	if (a.score < b.score) return -1;
	return 0;
};

export default function App() {
	const [search, setSearch] = React.useState('');
	const [currPage, setCurrPage] = React.useState(1);

	const foundEmojis = fuse
		.search(search)
		.sort(sortDescending)
		.slice(0, resultLimit);

	let list = getNrandomEmojis(resultsPerPage);
	const resultLength = foundEmojis.length;

	let enablePagination = false;
	if (foundEmojis.length !== 0) {
		enablePagination = true;
		list = foundEmojis
			.slice(resultsPerPage * (currPage - 1), resultsPerPage * currPage)
			.map(e => e.item);
	}

	return (
		<div>
			<div className="bg-top"></div>
			<div className="bg-bottom"></div>
			<div className="main">
				<h1 className="h1">Em😃jipedia</h1>
				<SearchBar setSearch={setSearch} />

				<ul className="emoji-card-list">
					{list.map((e, i) => (
						<EmojiCard
							key={i}
							emoji={e.emoji}
							description={e.description}
							category={e.category}
							aliases={e.aliases}
							tags={e.tags}
						/>
					))}
				</ul>

				{enablePagination ? (
					<Pagination
						length={resultLength}
						currPage={currPage}
						setCurrPage={setCurrPage}
					/>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
