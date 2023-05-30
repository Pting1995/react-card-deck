function displayCard(props) {
	return (
		<div className="card-container">
			<img src={props.url} name={props.name} class="card"></img>
		</div>
	);
}

export default displayCard;
