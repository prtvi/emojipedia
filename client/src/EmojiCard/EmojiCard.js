import React from 'react';
import './EmojiCard.css';

export default function EmojiCard() {
	return (
		<div className="emoji-card">
			<span className="emoji">😂</span>
			<span className="desc">Face with tears of joy</span>
			<span className="category">Smileys & Emoticon</span>
			<span className="aliases">joy</span>
		</div>
	);
}
