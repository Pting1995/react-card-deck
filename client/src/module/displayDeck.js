import DisplayCard from "./displayCard.js"

function DisplayDeck(props) {
	return (
		<div className="card-table">
			<div className="hand-cards">
				<h1>Hand</h1>
				<div className="card-group">
					{props.cardState.map((card, index) => {
						if (card.cardStatus === "hand") {
							return (<DisplayCard
								key={index}
								{...card}
								changeCardStatus={props.changeCardStatus}
								showHand={props.settingsState.showHand}
							/>)
						}
					})}
				</div>

			</div>
			<div className="deck-cards">
				<h1>Deck</h1>
				<div className="card-group">
					{props.cardState.map((card, index) => {
						if (card.cardStatus === "deck") {
							return (<DisplayCard
								key={index}
								{...card}
								changeCardStatus={props.changeCardStatus}
								showHand={props.settingsState.showDeck}
							/>)
						}
					})}
				</div>

			</div>
			<div className="discard-cards">
				<h1>Discard</h1>
				<div className="card-group">
					{props.cardState.map((card, index) => {
						if (card.cardStatus === "discard") {
							return (<DisplayCard
								key={index}
								{...card}
								changeCardStatus={props.changeCardStatus}
								showHand={props.settingsState.showDiscard}
							/>)
						}
					})}
				</div>

			</div>
		</div>
	);
}

export default DisplayDeck;
