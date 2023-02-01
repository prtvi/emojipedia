import React from 'react';
import './SearchBar.css';

import { maxSearchLen } from '../utils.js';

export default function SearchBar(props) {
	const { setSearch, setCurrPage } = props;
	const [search, updateSearch] = React.useState('');

	const handleInputChange = function (e) {
		let input = e.target.value;
		if (input.length > maxSearchLen) input = input.slice(0, maxSearchLen);

		updateSearch(input);
		setSearch(input);

		if (input === '') setCurrPage(1);
	};

	return (
		<div className="input-container">
			<input
				type="text"
				className="input-search"
				placeholder="Search any emoji"
				value={search}
				onChange={handleInputChange}
			/>
			<img className="search-icon" src="search.png" alt="search icon" />
		</div>
	);
}
