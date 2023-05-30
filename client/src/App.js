import './App.css';
import cards from "./module/cards.json"
import DisplayCard from "./module/displayCard.js"

function App() {
  return (
    <div className="overview-container">
      {cards.map((card, index) => {
        return (<DisplayCard
          key={index}
          name={card.name}
          url={card.url}
        />)
      })}
    </div>
  );
}

export default App;
