import React from 'react';
import './App.css';

import SearchBar from './SearchBar/SearchBar';

export default function App() {
	// const [data, setData] = React.useState(null);
	// React.useState(async () => {
	// 	const res = await fetch('/api').catch(err => console.error(err));
	// 	if (res.ok) {
	// 		const data = await res.json().catch(err => console.error(err));
	// setData('content from backend');
	// 	}
	// }, []);

	return (
		<div>
			<div className="bg-top"></div>
			<div className="bg-bottom"></div>
			<div className="main">
				<SearchBar />
			</div>
		</div>
	);
}
