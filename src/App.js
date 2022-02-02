import "./App.scss";
import Header from "./Header";
import GameGrid from "./GameGrid";
import GameKeyboard from "./GameKeyboard";
import words from "./words";
import React, {useState} from 'react';

function App() {
  // Pick a random word to be the answer
  const currentAnswer = words.answers[Math.floor(Math.random()*words.answers.length)]
  const [word, setWord] = useState(currentAnswer)

  // Handle user submitting a word
  const [userWord, updateWord] = useState([]);
  const handleUserInput = (e) => {
    console.log(e.target)
  }
  // Convert users's word to array

  // loop over user's word to compare letters / positions with answer

  // Check win condition

  // Update UI

  // Allow 6 attempts until failure


  return (
    <div className="App flex flex-col justify-between h-screen w-full max-w-md m-auto">
      <Header />
      <GameGrid handleUserInput={handleUserInput}/>
      <GameKeyboard />
    </div>
  );
}

export default App;
