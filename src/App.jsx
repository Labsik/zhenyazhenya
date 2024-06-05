import { useEffect, useState } from "react";
import "./App.css";
import {
  Start,
  Vysnia,
  ShalomCross,
  ShalomInside,
  GramQuiz,
  GramPhoto,
  Finish,
} from "./features";

function App() {
  const step = localStorage.getItem("currentStep") || 1;
  const [currentStep, setCurrentStep] = useState(Number(step));

  useEffect(() => {
    localStorage.setItem("currentStep", Number(currentStep));
  }, [currentStep]);

  console.log("currentStep", currentStep, typeof currentStep);

  return (
    <>
      {currentStep === 1 && (
        <Start currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 2 && (
        <Vysnia currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 3 && (
        <ShalomCross
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 4 && (
        <ShalomInside
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 5 && (
        <GramQuiz currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 6 && (
        <GramPhoto currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 7 && (
        <Finish currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
    </>
  );
}

export default App;
