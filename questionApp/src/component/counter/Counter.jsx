import React from "react";
import { useContext } from "react";
import { questContext } from "../../context/QuestContext";
import "./Counter.css";

function QuestionCounter() {
  const { counter } = useContext(questContext);

  return <h1> {counter}. Soru </h1>;
}

export default QuestionCounter;