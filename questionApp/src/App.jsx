import React, { useContext } from 'react';
import Result from './component/result/Result.jsx';
import Question from './component/question/Question.jsx';
import Landing from './component/landing/Landing.jsx';

import { questContext } from './context/QuestContext.jsx';
import "./App.css";


function App() {

  const { startQuest, isFinished } = useContext(questContext);
  
  return (
    <div className="App">
      {isFinished ? (<Result/>) : startQuest ? (<Question/>) : (<Landing/>)}
    </div>
  );
}

export default App;
