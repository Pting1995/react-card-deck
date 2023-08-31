# React Card Deck by Peter Ting

This application is supposed to simulate a deck of cards! 

# Features

- Toggle visibility of cards in your hand, deck, discard pile
- Toggle visibility of card history
- Choose which cards to draw, return or discard
- Randomly draw cards from the deck or randomly discard a card from your hand
- View the history of all changes to your cards

# Challenges

- Here's the function for moving a card randomly from hand/deck/discard to hand/deck/discard depending on the function's parameters. It first creates an array of all of the indexes that are in the initalCardState then chooses a number between 0 and the array length. The value of that index, being the index of the complete deck of cards, is then given to the changeCardStatus function along with the nextCardState to update that card's cardState. While working on this project, I confused the indexes of the initalCardState, and the complete deck of cards index. This bug would not allow the function to remove an index that was chosen before.
```
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
```

# New Methods Used

- This function shows the ... spread operator
- [settingsupdate]: !settingsState[settingsupdate] dynamically accesses the object and "flip flops" the value of the selected setting
```
	const settingsToggle = (settingsupdate) => {
		setSettingsState({
			// ... is used to copy state
			...settingsState,
			// [] allows variables :D!
			[settingsupdate]: !settingsState[settingsupdate]
		})
	}
```
- This function maps though the card array and adds its index and sets its default cardStatus
```
	const initDeck = () => {
		cleanCards = [...cards].map((card, index) => ({
			...card,
			cardStatus: "deck",
			cardIndex: index
		}))
		setCardState(cleanCards)
	}
```

# Future Ideas:

- Add login & database functionality to allow you to play with others

## Note to self: Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)

### `npm run deploy`

Runs script to publish to gh-pages