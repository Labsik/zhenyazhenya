import React, { useLayoutEffect } from "react";
import monkey from "../../assets/serving.jpg";

export const GramPhoto = ({ currentStep, setCurrentStep }) => {
  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <span
          onClick={() => {
            setCurrentStep(5);
            localStorage.setItem("currentStep", Number(currentStep));
          }}
        >
          ❤️
        </span>
      </div>

      <img
        src={monkey}
        alt="we"
        style={{ maxWidth: "325", maxHeight: "325px", marginBottom: "20px" }}
      />

      <button
        onClick={() => {
          setCurrentStep(7);
          localStorage.setItem("currentStep", Number(currentStep));
        }}
      >
        👉🏻👈🏻
      </button>
    </div>
  );
};
