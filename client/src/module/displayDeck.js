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
			cardLoc: "deck",
			index: index
		}))
		setCardState(cleanCards)
	}

	const [cardState, setCardState] = useState([
		cleanCards
	])

	const drawCard = (index) => {
		cardState[index].cardLoc = "draw"
		console.log(cardState)
	}

	// console.log(cardState)

	return (
		<div className="deck">
			<p>Deck</p>
			{cardState.map((card, index) => {
				return (<DisplayCard
					key={index}
					index={card.index}
					name={card.name}
					url={card.url}
					cardLoc={card.cardLoc}
					drawCard={drawCard}
				/>)
			})}
		</div>
	);
}

export default DisplayDeck;
