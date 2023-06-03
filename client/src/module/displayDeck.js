import DisplayCard from "./displayCard.js"
import { useState, useEffect } from "react";

import cards from "./cards.json"

function DisplayDeck() {

	var cleanCards = []

	//resets the deck - note to self: empty arr at the end of useEffect means fire it once
	useEffect(() => {
		initDeck()
	}, [])

	const initDeck = () => {
		cleanCards = [
			...cards
		].map(card => ({ ...card, cardLoc: "deck" }))
		setCardState(cleanCards)
	}

	const [cardState, setCardState] = useState([
		...cleanCards
	])

	console.log(cardState)

	return (
		<div className="deck">
			<p>Deck</p>
			{cards.map((card, index) => {
				return (<DisplayCard
					key={index}
					name={card.name}
					url={card.url}
					cardState={cardState}
					setCardState={setCardState}
				/>)
			})}
		</div>
	);
}

export default DisplayDeck;
