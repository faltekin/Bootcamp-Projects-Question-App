import React, { useContext } from "react";

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import QuestContext, { questContext } from "./context/QuestContext.jsx";

import './index.css'



ReactDOM.createRoot(document.getElementById("root")).render(
  
    <QuestContext>
      <App />
    </QuestContext>
  
);