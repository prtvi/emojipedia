import React from 'react';
import './Card.css';

export default function EmojiCard(props) {
	const { emoji, description } = props;

	const copyToClipboard = function (e) {
		const emoji = e.target.parentNode.querySelector('span.emoji').textContent;
		navigator.clipboard.writeText(emoji);
	};

	return (
		<li className="card">
			<img
				src="copy.png"
				alt="copy icon"
				title="Copy to clipboard"
				onClick={copyToClipboard}
			/>
			<span className="emoji">{emoji}</span>
			<span className="description">{description}</span>
		</li>
	);
}
