import React from 'react';
import './App.css';

import SearchBar from './SearchBar/SearchBar';
import EmojiCard from './EmojiCard/EmojiCard';

import EMOJIS from './emojis.json';

const getNrandomEmojis = function (n) {
	if (n > 9 || n <= 0) n = 9;

	const arr = [];
	const len = EMOJIS.length;

	for (let i = 0; i < n; i++) arr.push(EMOJIS[Math.floor(Math.random() * len)]);

	return arr;
};

export default function App() {
	const emojiArr = getNrandomEmojis(3);

	return (
		<div>
			<div className="bg-top"></div>
			<div className="bg-bottom"></div>
			<div className="main">
				<h1 className="h1">Em😃jipedia</h1>
				<SearchBar />

				<ul className="emoji-card-list">
					{emojiArr.map((e, i) => (
						<EmojiCard
							key={i}
							emoji={e.emoji}
							description={e.description}
							category={e.category}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}
