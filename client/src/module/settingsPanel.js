function SettingsPanel(props) {
	return (
		<div className="side-bar">
			<div className="settings-container">
				<h1>Options</h1>
				<div>
					<button onClick={() => props.settingsToggle("showHand")}>Toggle Hand Visibility</button>
					<button onClick={() => props.settingsToggle("showDeck")}>Toggle Deck Visibility</button>
					<button onClick={() => props.settingsToggle("showDiscard")}>Toggle Discard Visibility</button>
					<button onClick={() => props.settingsToggle("showHistory")}>Toggle History Visibility</button>
				</div>
			</div>
			<div className="actions-container">
				<h1>Actions</h1>
				<div>
					<button onClick={() => props.moveRandomCard("deck", "hand")}>Draw Random Card</button>
					<button onClick={() => props.moveRandomCard("hand", "discard")}>Discard Random Card</button>
				</div>
			</div>
			<div className="history-container">
				{props.settingsState.showHistory
					? <>
						<h1>History</h1>
						{props.historyState.toReversed().map((event, index) => {
							return <p key={index}>{event}</p>
						})}
					</>
					: <h1>History Hidden</h1>
				}
			</div>
		</div>
	);
}

export default SettingsPanel;