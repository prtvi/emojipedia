import React from 'react';
import './EmojiList.css';

import EmojiCard from './EmojiCard/EmojiCard';

export default function EmojiList(props) {
	const { list } = props;
	return (
		<ul className="emoji-card-list">
			{list.map((e, i) => (
				<EmojiCard
					key={i}
					emoji={e.emoji}
					description={e.description}
					category={e.category}
					aliases={e.aliases}
					tags={e.tags}
				/>
			))}
		</ul>
	);
}
