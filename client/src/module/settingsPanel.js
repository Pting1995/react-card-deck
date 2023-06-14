import { useState, useEffect } from "react";

// a.shuffle

// b.show / hide hand, deck, discarded
// c.draw 1 random card
// d.discard 1 random card
// e.reset deck button

function SettingsPanel(props) {

	return (
		<div className="settings">
			<button onClick={() => props.settingsToggle("showHand")}>Toggle Hand Visibility</button>
			<button onClick={() => props.settingsToggle("showDeck")}>Toggle Deck Visibility</button>
			<button onClick={() => props.settingsToggle("showDiscard")}>Toggle Discard Visibility</button>
		</div>
	);
}

export default SettingsPanel;
