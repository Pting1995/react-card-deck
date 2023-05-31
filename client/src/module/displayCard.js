import React, { useState } from "react";

function DisplayCard(props) {

	//card status logic
	const [cardState, setCardState] = useState("deck")

	const updateCard = (change) => {
		setCardState(change)
	}

	return (
		<div className="card-container">
			<p>{cardState}</p>
			<img src={props.url} alt={props.name} className="card"></img>
			<button onClick={updateCard}>Draw</button>
			<button onClick={updateCard}>Discard</button>

		</div>
	);
}

export default DisplayCard;
