function DisplayCard(props) {

	console.log(props)
	return (
		<div className="card-container">
			<p>{props.cardLoc}</p>
			<img src={props.url} alt={props.name} className="card"></img>
			<button onClick={props.drawCard} key={props.index}>Draw</button>

		</div >
	);
}

export default DisplayCard;
