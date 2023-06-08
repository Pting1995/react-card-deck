import DisplayDeck from "./module/displayDeck"
import SettingsPanel from "./module/settingsPanel"

function App() {
  return (
    <div className="app-container">
      <div className="settings-container">
        <SettingsPanel />
      </div>
      <div className="play-mat-container">
        <DisplayDeck />
      </div>
    </div>

  );
}

export default App;
