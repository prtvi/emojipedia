import React from 'react';
import Fuse from 'fuse.js';

import './App.css';

import SearchBar from './SearchBar/SearchBar';
import EmojiCard from './EmojiCard/EmojiCard';

import EMOJIS from './emojis.json';

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

export default function App() {
	const [search, setSearch] = React.useState('');

	const foundEmoijis = fuse.search(search).sort((a, b) => {
		if (a.score > b.score) return 1;
		if (a.score < b.score) return -1;
		return 0;
	});

	let emojiArr = [];
	if (foundEmoijis.length === 0) emojiArr = getNrandomEmojis(6);
	else emojiArr = foundEmoijis.slice(0, 9).map(e => e.item);

	return (
		<div>
			<div className="bg-top"></div>
			<div className="bg-bottom"></div>
			<div className="main">
				<h1 className="h1">Em😃jipedia</h1>
				<SearchBar setSearch={setSearch} />

				<ul className="emoji-card-list">
					{emojiArr.map((e, i) => (
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
			</div>
		</div>
	);
}
