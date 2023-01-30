import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
	return (
		<div className="input-container">
			<input type="text" className="input-search" />
			<img className="search-icon" src="search.png" alt="search icon" />
		</div>
	);
}
