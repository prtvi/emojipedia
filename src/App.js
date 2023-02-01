import React from 'react';
import './App.css';

import SearchBar from './SearchBar/SearchBar';
import EmojiList from './EmojiList/EmojiList';
import Pagination from './Pagination/Pagination';

import {
	fuse,
	getNrandomEmojis,
	sortDescending,
	useWindowDimensions,
	getResultsPerPage,
} from './utils.js';

export default function App() {
	const [search, setSearch] = React.useState('');
	const [currPage, setCurrPage] = React.useState(1);

	const { width } = useWindowDimensions();
	const resultsPerPage = getResultsPerPage(width);

	const resultLimit = 50;
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
				<SearchBar setSearch={setSearch} setCurrPage={setCurrPage} />
				<EmojiList list={list} />
				<Pagination
					enable={enablePagination}
					length={resultLength}
					currPage={currPage}
					setCurrPage={setCurrPage}
					resultsPerPage={resultsPerPage}
				/>
			</div>
		</div>
	);
}
