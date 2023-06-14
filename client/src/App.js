import DisplayDeck from "./module/displayDeck"
import SettingsPanel from "./module/settingsPanel"
import { useState } from "react";

function App() {
	const [settingsState, setSettingsState] = useState({
		showHand: true,
		showDeck: true,
		showDiscard: true,

		// v might add this one? v
		// organizeCards: true
	})

	// logic to hide cards
	const settingsToggle = (settingsupdate) => {
		setSettingsState({
			// ... is used to copy state
			...settingsState,
			// [] allows variables :)!
			[settingsupdate]: !settingsState[settingsupdate]
		})
		console.log(settingsState)
	}

	return (
		<div className="app-container">
			<div className="settings-container">
				<SettingsPanel
					settingsToggle={settingsToggle}
				/>
			</div>
			<div className="play-mat-container">
				<DisplayDeck />
			</div>
		</div>

	);
}

export default App;
