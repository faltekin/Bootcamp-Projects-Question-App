import React, { useState, createContext } from "react";

export const questContext = createContext(null); 

function QuestContext({ children }) {
  const [startQuest, setStartQuest] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [timer, setTimer] = useState(30);
  const [counter, setCounter] = useState(1);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  


  const contextData = {
    startQuest,
    setStartQuest,
    isFinished,
    setIsFinished,
    isAnswerVisible,
    setIsAnswerVisible,
    timer,
    setTimer,
    counter,
    setCounter,
    correctCounter,
    setCorrectCounter,
    answerCounter,
    setAnswerCounter,
    selectedAnswers,
    setSelectedAnswers,
  };

  return (
    <questContext.Provider value={contextData}>
      {children}
    </questContext.Provider>
  );
}

export default QuestContext;
