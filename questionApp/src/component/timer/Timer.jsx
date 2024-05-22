import React from "react";
import { useContext } from "react";
import { questContext } from "../../context/QuestContext";
import "./Timer.css";

function Timer() {
  const { timer } = useContext(questContext);
  const timerColor = timer < 20 ? "timer-orange" : "";

  return(

    <h2>
      <span className="time-text">Kalan Süre: </span>
      <span className={timerColor}>{timer}</span>
    </h2>
    
  )
}

export default Timer;

