import DisplayCard from "./displayCard.js"

import cards from "./cards.json"

function DisplayDeck() {

	return (
		<div className="deck">
			<p>Deck</p>
			{cards.map((card, index) => {
				return (<DisplayCard
					key={index}
					name={card.name}
					url={card.url}
				/>)
			})}
		</div>
	);
}

export default DisplayDeck;
