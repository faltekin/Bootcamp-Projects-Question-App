import React from "react";
import "./Answer.css";
import { useContext } from "react";
import { questContext } from "../../context/QuestContext";
import questions from "../../questions";

function Answer({ selectedQuestion }) {
  const {
    counter,
    setCounter,
    setTimer,
    correctCounter,
    setCorrectCounter,
    answerCounter,
    setAnswerCounter,
    selectedAnswers,
    setSelectedAnswers,
    isAnswerVisible,
    setIsAnswerVisible,
  } = useContext(questContext);

  function handleClick(index) {
    
    const isCorrect = selectedQuestion.options[index] === selectedQuestion.answer;
  
    selectedAnswers.push({
      isCorrect: isCorrect,
      selectedAnswers: selectedQuestion.options[index],
      correctAnswers: selectedQuestion.answer,
      id: counter
    });
    setSelectedAnswers([...selectedAnswers]);       // önceki cevapların üzerine ekleme yapar
  
    if (isCorrect) {
      setCorrectCounter(correctCounter + 1);    
    }


    setAnswerCounter(answerCounter+1);          // boş cevap sayısını bulmak için toplam butonla etkileşim sayısı tutulur
    setCounter(counter + 1);                    // counter her cevaptan sonra bir artar  ( soruların bittiğini bu sayaç ile kontrol edeceğiz )
    setTimer(30);                               // sayaç her cevaptan sonra 30 dan tekrar başlar
    setIsAnswerVisible(false);        // answer  her cevaptan sonra tekrardan gizlenir


  }
  
  return (
    <div className={`answers ${isAnswerVisible ? 'visible' : 'hidden'}`}>
      {selectedQuestion.options.map((option, index) => (             // seçenekler map ile dönülürken buton ismi yazdırılır
        <button key={index} onClick={() => handleClick(index)}>
          {option} 
        </button>
      ))}
    </div>
  );
}

export default Answer;