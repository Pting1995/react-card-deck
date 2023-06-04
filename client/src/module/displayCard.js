function DisplayCard(props) {
	return (
		<div className="card-container">
			<img src={props.url} alt={props.name} className="card"></img>
			{/* conditional logic to display buttons */}
			{props.cardStatus != "hand" && <button onClick={() => props.changeCardStatus(props.cardIndex, "hand")}>Draw this Card</button>}
			{props.cardStatus != "deck" && <button onClick={() => props.changeCardStatus(props.cardIndex, "deck")}>Return to Deck</button>}
			{props.cardStatus != "discard" && <button onClick={() => props.changeCardStatus(props.cardIndex, "discard")}>Discard Card</button>}

		</div >
	);
}

export default DisplayCard;
