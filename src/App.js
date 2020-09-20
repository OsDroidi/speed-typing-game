import React from "react";
import "./App.css";
import useWordGame from "./hooks/useWordGame";

function App() {
  // use context refactoring
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame(5);

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time Reaming: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </>
  );
}

export default App;
