import DisplayCard from "./displayCard.js"

function DisplayDeck(props) {
	const cardStateFilter = (props, filter) => {
		return props.cardState.filter(card => card.cardStatus === filter)
	}

	return (
		<div className="card-table">
			<div className="hand-cards">
				<h1>Hand</h1>
				<div className="card-group">
					{cardStateFilter(props, "hand").map((card, index) => {
						return (<DisplayCard
							key={index}
							{...card}
							changeCardStatus={props.changeCardStatus}
							showHand={props.settingsState.showHand}
						/>)
					})}
				</div>
			</div>
			<div className="deck-cards">
				<h1>Deck</h1>
				<div className="card-group">
					{cardStateFilter(props, "deck").map((card, index) => {
						return (<DisplayCard
							key={index}
							{...card}
							changeCardStatus={props.changeCardStatus}
							showDeck={props.settingsState.showDeck}
						/>)
					})}
				</div>
			</div>
			<div className="discard-cards">
				<h1>Discard</h1>
				<div className="card-group">
					{cardStateFilter(props, "discard").map((card, index) => {
						return (<DisplayCard
							key={index}
							{...card}
							changeCardStatus={props.changeCardStatus}
							showDiscard={props.settingsState.showDiscard}
						/>)
					})}
				</div>
			</div>
		</div>
	);
}

export default DisplayDeck;
