import "./App.scss";
import Header from "./Header";
import GameGrid from "./GameGrid";
import GameKeyboard from "./GameKeyboard";

function App() {
  return (
    <div className=" App container">
      <Header />
      <GameGrid />
      <GameKeyboard />
    </div>
  );
}

export default App;
