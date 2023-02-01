import React from 'react';
import './EmojiCard.css';

export default function EmojiCard(props) {
	const { emoji, description, category, aliases, tags } = props;

	const copyToClipboard = function (e) {
		const emoji = e.target.parentNode.querySelector('span.emoji').textContent;
		navigator.clipboard.writeText(emoji);
	};

	return (
		<li className="emoji-card" aliases={aliases} tags={tags}>
			<img
				src="copy.png"
				alt="copy icon"
				title="Copy to clipboard"
				onClick={copyToClipboard}
			/>
			<span className="emoji">{emoji}</span>
			<span className="description">{description}</span>
			<span className="category">{category}</span>
		</li>
	);
}
