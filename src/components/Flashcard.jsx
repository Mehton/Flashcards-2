import React from "react";
import "./Flashcard.css";

const Flashcard = ({ question, answer, image, flipped, onFlip }) => {
  return (
    <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={onFlip}>
      <div className="front">
        <h2>{question}</h2>
      </div>
      <div className="back">
        <img src={image} alt="" />
        <h2>{answer}</h2>
      </div>
    </div>
  );
};

export default Flashcard;
