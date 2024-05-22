import React from 'react';
import './Landing.css';
import { questContext } from "../../context/QuestContext";
import { useContext } from "react";


function Landing() {


  const { setStartQuest } = useContext(questContext);

  function buttonClicked() {
    setStartQuest(true);
  }

  // Değerlendirme formu : Buton "id"'si "start" olmalıdır.
  // Değerlendirme formu : Projenin giriş ekranında "Teste Başla" adında bir buton bulunmalı 
  return (
    <div className="landing">
      <button onClick={buttonClicked} id="start"> 
        Teste Başla
      </button>
      <p className="landing-info">Toplam 10 Soru - Zorluk Kolay</p>
    </div>
  );
}

export default Landing;
