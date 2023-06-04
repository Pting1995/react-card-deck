function DisplayCard(props) {
	// console.log(props)
	return (
		<div className="card-container">
			<p>{props.cardStatus}</p>
			<img src={props.url} alt={props.name} className="card"></img>
			<button onClick={() => props.changeCardStatus(props.cardIndex, "draw")}>Draw</button>
			<button onClick={() => props.changeCardStatus(props.cardIndex, "discard")}>Discard</button>
		</div >
	);
}

export default DisplayCard;
