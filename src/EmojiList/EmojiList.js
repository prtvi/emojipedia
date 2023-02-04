import React from 'react';
import './EmojiList.css';

import Card from './Card/Card';

export default function EmojiList(props) {
	const { list } = props;
	return (
		<ul className="emoji-card-list">
			{list.map((e, i) => (
				<Card key={i} emoji={e.emoji} description={e.description} />
			))}
		</ul>
	);
}
