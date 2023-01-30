import React from 'react';
import './EmojiCard.css';

export default function EmojiCard(props) {
	const { emoji, description, category } = props;

	return (
		<li className="emoji-card">
			<span className="emoji">{emoji}</span>
			<span className="description">{description}</span>
			<span className="category">{category}</span>
		</li>
	);
}
