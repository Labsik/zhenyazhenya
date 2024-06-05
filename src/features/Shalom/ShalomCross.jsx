import React from "react";
import Crossword from "@jaredreisinger/react-crossword";

export const ShalomCross = ({ currentStep, setCurrentStep }) => {
  const clue = "";

  const data = {
    across: {
      1: {
        clue: "Найсмачніший на Салтівці",
        answer: "ФАЛАФЕЛЬ",
        row: 1,
        col: 0,
      },
      2: { clue: "Ти моя... (🐈)", answer: "ХАТУЛЯ", row: 5, col: 0 },
    },
    down: {
      3: { clue: "Надпис на футболці", answer: "САБАБА", row: 0, col: 1 },
      4: { clue: "Заклад, в який ми йдемо", answer: "ШАЛОМ", row: 3, col: 4 },
    },
  };

  return (
    <div style={{ width: "22.5em" }}>
      <div style={{ marginBottom: "20px" }}>
        <span
          onClick={() => {
            setCurrentStep(2);
            localStorage.setItem("currentStep", Number(currentStep));
          }}
        >
          ❤️
        </span>
      </div>

      <Crossword data={data} useStorage={false} />

      <hr />
      <button
        onClick={() => {
          setCurrentStep(4);
          localStorage.setItem("currentStep", Number(currentStep));
        }}
      >
        🧆🫓
      </button>
    </div>
  );
};
