import React from 'react';
import './Pagination.css';

import { resultsPerPage } from '../utils.js';

export default function Pagination(props) {
	const { enable, length, currPage, setCurrPage } = props;
	if (!enable) return <></>;

	const nPages = Math.ceil(length / resultsPerPage);

	const back = function () {
		if (currPage - 1 === 0) setCurrPage(1);
		else setCurrPage(c => c - 1);
	};

	const forward = function () {
		if (currPage + 1 >= nPages) setCurrPage(nPages);
		else setCurrPage(c => c + 1);
	};

	const start = resultsPerPage * (currPage - 1) + 1;
	const end = Math.min(resultsPerPage * currPage, length);

	return (
		<div className="pagination-container">
			<div>
				<img src="left.png" alt="left arrow" onClick={back} />
			</div>
			<span>
				{start} - {end} of {length}
			</span>
			<div>
				<img src="right.png" alt="right arrow" onClick={forward} />
			</div>
		</div>
	);
}
