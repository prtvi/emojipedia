import React from 'react';

export default function App() {
	const [data, setData] = React.useState(null);

	React.useState(async () => {
		const res = await fetch('/api').catch(err => console.error(err));
		if (res.ok) {
			const data = await res.json().catch(err => console.error(err));
			setData(data.msg);
		}
	}, []);

	return (
		<div className="App">
			<p>{!data ? 'Loading ..' : data}</p>
		</div>
	);
}
