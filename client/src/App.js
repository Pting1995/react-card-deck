import DisplayDeck from "./module/displayDeck"
import SettingsPanel from "./module/settingsPanel"
import { useState, useEffect } from "react";

import cards from "./module/cards.json"

function App() {
	var cleanCards = []

	const [settingsState, setSettingsState] = useState({
		showHand: true,
		showDeck: true,
		showDiscard: true,
	})

	const [cardState, setCardState] = useState([
		cleanCards
	])

	// logic to hide cards
	const settingsToggle = (settingsupdate) => {
		setSettingsState({
			// ... is used to copy state
			...settingsState,
			// [] allows variables :D!
			[settingsupdate]: !settingsState[settingsupdate]
		})
	}

	// resets the deck - note to self: empty arr at the end of useEffect means fire it once when the page loads
	useEffect(() => {
		initDeck()
	}, [])

	// resets deck
	const initDeck = () => {
		cleanCards = [...cards].map((card, index) => ({
			...card,
			cardStatus: "deck",
			cardIndex: index
		}))
		setCardState(cleanCards)
	}

	// update card state
	const changeCardStatus = (index, nextCardState) => {
		const deckUpdate = cardState.map(card => {
			if (card.cardIndex === index) {
				return { ...card, cardStatus: nextCardState }
			}
			return card;
		})
		setCardState(deckUpdate)
	}

	//checks for card status, populates an array, then randomly chooses a card to move to the designated card state
	const moveRandomCard = (initialCardState, nextCardState) => {
		console.log(cardState)
		var cardChoice = []
		var chosenIndex
		cardState.map(card => {
			if (card.cardStatus === initialCardState) {
				cardChoice.push(card)
			}
		})
		chosenIndex = Math.floor(Math.random() * cardChoice.length)
		console.log(chosenIndex)
		changeCardStatus(chosenIndex, nextCardState)
	}

	return (
		<div className="app-container">
			<SettingsPanel
				settingsToggle={settingsToggle}
				moveRandomCard={moveRandomCard}
			/>
			<DisplayDeck
				{...settingsState}
				changeCardStatus={changeCardStatus}
				cardState={cardState}
			/>
		</div>

	);
}

export default App;
