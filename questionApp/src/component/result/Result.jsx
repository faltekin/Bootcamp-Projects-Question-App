import React from "react";
import { useContext } from "react";
import { questContext } from "../../context/QuestContext";
import "./Result.css";
import questions from "../../questions";


function Result() {
    const { correctCounter, selectedAnswers, answerCounter } =
      useContext(questContext);

      const handleHover = (event, correctAnswers, isCorrect) => {
        if (!isCorrect) {
          event.target.textContent = `Doğru Cevap: ${correctAnswers}`;
        }
      };
  
    
      // Değerlendirme formu : Test bitiminde her soruya verilen yanıt ile doğru ve yanlış sayıları kullanıcı ile paylaşılacaktır.

    return (
      <div className="result-div">
        <div>
          <div>
            <h2>Sonuç</h2>
            <p>
              Doğru cevap sayısı: {correctCounter}
            </p>
            <p>
              Yanlış cevap sayısı: {answerCounter - correctCounter}
            </p>
            <p>
              Boş cevap sayısı: {questions.length - answerCounter}
            </p>
          </div>

        </div>
        <div>
          <h2>Cevaplarınız</h2>
          <ul className="result-list">
            {selectedAnswers.map((answer) => {
              return (
                <li key={answer.id} className={answer.isCorrect ? "correct" : "wrong"} onMouseEnter={(event) => handleHover(event, answer.correctAnswers,answer.isCorrect)}>
                   {answer.id} . Soru Cevabınız : {answer.selectedAnswers}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Result;




