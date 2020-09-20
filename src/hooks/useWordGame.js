import { useState, useEffect, useRef } from "react";

function useWordGame(startingTime = 10) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    // e.target to track what user type
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    // trim function to remove white space
    // split function to count a word
    return wordsArr.filter((word) => word !== "").length;
    // to remove the default counting start from 1
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(startingTime);
    setText("");
    // useRef used to focus in the textarea when the user click start
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  };
}

export default useWordGame;
