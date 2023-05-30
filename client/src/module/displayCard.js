import React, { useState } from "react";

function DisplayCard(props) {
	const [cardState, setCardState] = useState("deck")

	const addToHand = () => {
		setCardState("hand")
	}
	const discardCard = () => {
		setCardState("discard")
	}

	return (
		<div className="card-container">
			<p>{cardState}</p>
			<img src={props.url} alt={props.name} className="card"></img>
			<button onClick={addToHand}>Draw</button>
			<button onClick={discardCard}>Discard</button>
		</div>
	);
}

export default DisplayCard;
