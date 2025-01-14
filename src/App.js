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
		showHistory: true
	})

	const [cardState, setCardState] = useState([
		cleanCards
	])

	const [historyState, setHistoryState] = useState([])

	// resets the deck - note to self: empty arr at the end of useEffect means fire it once when the page loads
	useEffect(() => {
		initDeck()
		// eslint-disable-next-line
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

	// logic to hide cards
	const settingsToggle = (settingsupdate) => {
		setSettingsState({
			// ... is used to copy state
			...settingsState,
			// [] allows variables :D!
			[settingsupdate]: !settingsState[settingsupdate]
		})
	}

	// update card history & state
	const changeCardStatus = (index, nextCardState) => {
		var deckUpdate = []
		setHistoryState([
			...historyState,
			`${cardState[index].name2} was moved from ${cardState[index].cardStatus} to ${nextCardState}`
		])

		deckUpdate = cardState.map(card => {
			if (card.cardIndex === index) {
				return { ...card, cardStatus: nextCardState }
			}
			return card;
		})
		setCardState(deckUpdate)
	}

	//checks for card status, populates an array, thenrandomly chooses a card to move to the designated card state
	const moveRandomCard = (initialCardState, nextCardState) => {
		var cardChoice = []
		cardState.map(card => {
			if (card.cardStatus === initialCardState) {
				cardChoice.push(card.cardIndex)
			}
			return cardChoice
		})
		const chosenIndex = Math.floor(Math.random() * cardChoice.length)
		changeCardStatus(cardChoice[chosenIndex], nextCardState)
	}

	return (
		<div className="app-container">
			<SettingsPanel
				settingsState={settingsState}
				historyState={historyState}
				settingsToggle={settingsToggle}
				moveRandomCard={moveRandomCard}
			/>
			<DisplayDeck
				settingsState={settingsState}
				cardState={cardState}
				historyState={historyState}
				changeCardStatus={changeCardStatus}
			/>
		</div>

	);
}

export default App;
