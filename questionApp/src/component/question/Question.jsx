import "./Question.css";
import React, {useEffect} from "react";
import questions from "../../questions";
import { questContext } from "../../context/QuestContext";
import { useContext } from "react";
import Answer from "../answer/Answer";
import Counter from "../counter/Counter";
import Timer from "../timer/Timer";

function Question(){

  const { counter, setIsAnswerVisible, setTimer, setCounter, setIsFinished } = useContext(questContext);
  
  const selectedQuestion = questions[counter - 1];

  
  const fin = counter > questions.length;
  setIsFinished(fin);

  useEffect(() => {

      // Değerlendirme formu : Her soru ekranda en fazla 30sn kalmalıdır.
      // Değerlendirme formu : İlk 10sn cevap şıkları görünmeyecektir.
      // Değerlendirme formu : Cevap şıklarından biri tıklandıktan ya da 30sn tamamlandıktan sonra yeni soruya geçilecektir.

      const myInterval = setInterval(() => {
        setTimer(prevTimer => {
        
          if (prevTimer <= 20 && prevTimer > 0) {
            setIsAnswerVisible(true);
          } else if (prevTimer > 20) {
            setIsAnswerVisible(false);
          } else if (prevTimer == 0){
            setCounter(prevCounter => prevCounter + 1);
            setIsAnswerVisible(false);
            return 30;            // sayaç tekrar 30 dan başlar
          }
          return prevTimer - 1;   // sayaç bir bir azalır
        });
      }, 1000);
  
      return () => clearInterval(myInterval);
    
  }, [counter, setCounter, setTimer, setIsAnswerVisible]);
  

    return (
      <div className="questions">
        <div>
          <Counter />
          <Timer />
          <img src={selectedQuestion.media} alt="question-picture" />
          <p>{selectedQuestion.question}</p>
        </div>
        <Answer selectedQuestion={selectedQuestion} />
      </div>
      );


}

export default Question;