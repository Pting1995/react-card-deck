function DisplayCard(props) {

	return (
		<div className="card-container">
			<p>{props.cardState.cardLoc}</p>
			<img src={props.url} alt={props.name} className="card"></img>
			<button onClick={props.setCardState}>Draw</button>

		</div >
	);
}

export default DisplayCard;
