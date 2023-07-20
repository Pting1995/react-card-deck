import { useState, useEffect } from "react";

// a.shuffle

// b.show / hide hand, deck, discarded
// c.draw 1 random card
// d.discard 1 random card
// e.reset deck button

function SettingsPanel(props) {

	return (
		<div className="control-bar">
			<div className="settings">
				<button onClick={() => props.settingsToggle("showHand")}>Toggle Hand Visibility</button>
				<button onClick={() => props.settingsToggle("showDeck")}>Toggle Deck Visibility</button>
				<button onClick={() => props.settingsToggle("showDiscard")}>Toggle Discard Visibility</button>
			</div>
			<div className="options">
				{/* draw random card, discard random card, return random card to deck */}
				<button onClick={() => props.moveRandomCard("deck", "hand")}>Draw Random Card</button>
				<button onClick={() => props.moveRandomCard("hand", "discard")}>Discard Random Card</button>
			</div>
		</div>

	);
}

export default SettingsPanel;
