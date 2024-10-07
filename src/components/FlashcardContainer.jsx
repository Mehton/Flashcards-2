import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";

const FlashcardContainer = () => {
  const initialFlashcards = [
    {
      question: "What is the First Amendment?",
      answer: "Freedom of speech, religion, press, assembly, and petition.",
      image:
        "https://media.istockphoto.com/id/1324363228/photo/eagle-with-american-flag-flies-in-freedom-at-sunset-vintage-toned.jpg?s=1024x1024&w=is&k=20&c=BqYfyvzJkgtwmABXimA5E4k6dPMqcwWZQynH2aaK0c0=",
    },
    {
      question: "What does the Fourth Amendment protect against?",
      answer: "Unreasonable searches and seizures.",
    },
    {
      question: "What rights are guaranteed under the Fifth Amendment?",

      answer:
        "The right to remain silent, protection against double jeopardy, and the right to due process.",
    },
    {
      question: "What is the purpose of the Sixth Amendment?",
      answer:
        " It guarantees the right to a fair trial, including the right to a speedy trial, an impartial jury, and legal counsel.",
    },
    {
      question: "What does the Eighth Amendment prohibit?",
      answer:
        "Excessive bail, excessive fines, and cruel and unusual punishment.",
      image:
        "https://flagspolesbanners.com/wp-content/uploads/2016/07/usa-flag.jpg",
    },
    {
      question: "What is the right to due process?",
      answer:
        "The legal requirement that the state must respect all legal rights owed to a person, ensuring fair treatment.",
    },
    {
      question: "What does the Tenth Amendment state?",
      answer:
        "Powers not delegated to the federal government are reserved for the states or the people.",
    },
    {
      question: 'What is a "Miranda warning"?',
      answer:
        " A warning that must be given to a person in custody before being interrogated, informing them of their rights, including the right to remain silent",
    },
    {
      question: "What is the right to free speech?",
      answer:
        "The ability to express one's opinions and ideas without fear of government retaliation or censorship",
    },
    {
      question: "What does the Equal Protection Clause do?",
      answer:
        "It prohibits states from denying any person within its jurisdiction the equal protection of the laws.",
    },
  ];

  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlashcards(shuffleArray(initialFlashcards));
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % flashcards.length;
      return nextIndex;
    });
    setFlipped(false);
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  if (flashcards.length === 0) {
    return <div>Loading flashcards...</div>;
  }

  return (
    <div className="flashcard-container">
      <h1>"Know your rights" Quiz!!!</h1>
      <h2>
        The quiz will help you learn about your rights from the Constitution.
      </h2>
      <h3>Total Cards: {flashcards.length}</h3>
      <Flashcard
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
        image={flashcards[currentIndex].image}
        flipped={flipped}
        onFlip={handleFlip}
      />
      <button
        onClick={handleNextCard}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
      >
        Next Card
      </button>
    </div>
  );
};

export default FlashcardContainer;
