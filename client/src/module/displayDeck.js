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

	// updating an array of objects
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
		<div className="card-table">
			<div className="hand-cards">
				<h1>Hand</h1>
				<div class="card-group">
					{cardState.map((card, index) => {
						if (card.cardStatus === "hand") {
							return (<DisplayCard
								key={index}
								cardIndex={card.cardIndex}
								name={card.name}
								url={card.url}
								cardStatus={card.cardStatus}
								changeCardStatus={changeCardStatus}
							/>)
						}
					})}
				</div>

			</div>
			<div className="deck-cards">
				<h1>Deck</h1>
				<div class="card-group">
					{cardState.map((card, index) => {
						if (card.cardStatus === "deck") {
							return (<DisplayCard
								key={index}
								cardIndex={card.cardIndex}
								name={card.name}
								url={card.url}
								cardStatus={card.cardStatus}
								changeCardStatus={changeCardStatus}
							/>)
						}
					})}
				</div>

			</div>
			<div className="discard-cards">
				<h1>Discard</h1>
				<div class="card-group">
					{cardState.map((card, index) => {
						if (card.cardStatus === "discard") {
							return (<DisplayCard
								key={index}
								cardIndex={card.cardIndex}
								name={card.name}
								url={card.url}
								cardStatus={card.cardStatus}
								changeCardStatus={changeCardStatus}
							/>)
						}
					})}
				</div>

			</div>

		</div>
	);
}

export default DisplayDeck;
