function SettingsPanel(props) {
	return (
		<div className="side-bar">
			<div className="control-bar">
				<h1>Options</h1>
				<div className="settings">
					<button onClick={() => props.settingsToggle("showHand")}>Toggle Hand Visibility</button>
					<button onClick={() => props.settingsToggle("showDeck")}>Toggle Deck Visibility</button>
					<button onClick={() => props.settingsToggle("showDiscard")}>Toggle Discard Visibility</button>
					<button onClick={() => props.settingsToggle("showHistory")}>Toggle History Visibility</button>
				</div>
				<div className="options">
					{/* draw random card, discard random card, return random card to deck */}
					<button onClick={() => props.moveRandomCard("deck", "hand")}>Draw Random Card</button>
					<button onClick={() => props.moveRandomCard("hand", "discard")}>Discard Random Card</button>
				</div>
			</div>
			<div className="history-container">
				{props.showHistory
					? <h1>History</h1>
					: <h1>History Hidden</h1>
				}
			</div>
		</div>
	);
}

export default SettingsPanel;
