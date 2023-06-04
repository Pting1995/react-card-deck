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
		cleanCards = [...cards].map((card, index) => ({
			...card,
			cardStatus: "deck",
			cardIndex: index
		}))
		setCardState(cleanCards)
	}

	const [cardState, setCardState] = useState([
		cleanCards
	])

	const changeCardStatus = (index, statusUpdate) => {
		const deckUpdate = cardState.map(card => {
			if (card.cardIndex === index) {
				return { ...card, cardStatus: statusUpdate }
			}
			return card;
		})
		console.log(deckUpdate)
		setCardState(deckUpdate)
	}

	return (
		<div className="deck">
			<p>Deck</p>
			{cardState.map((card, index) => {
				return (<DisplayCard
					key={index}
					cardIndex={card.cardIndex}
					name={card.name}
					url={card.url}
					cardStatus={card.cardStatus}
					changeCardStatus={changeCardStatus}
				/>)
			})}
		</div>
	);
}

export default DisplayDeck;
