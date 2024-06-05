/* eslint-disable react/prop-types */
import ConfettiExplosion from "react-confetti-explosion";

import { formatDuration, intervalToDuration, isBefore } from "date-fns";
import { useEffect } from "react";
import { useState } from "react";

export const Start = ({ currentStep, setCurrentStep }) => {
  const [countdown, setCountdown] = useState("");
  const [countdownEnded, setCountdownEnded] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);

  // my date: new Date(2024, 5, 8, 15, 0, 0),

  console.log("countdown", countdown, typeof countdown);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const duration = intervalToDuration({
        start: new Date(),
        end: new Date(2024, 5, 8, 15, 0, 0),
      });

      if (isBefore(new Date(2024, 5, 8, 15, 0, 0), now)) {
        setCountdownEnded(true);
        clearInterval(interval);
      } else {
        setCountdown(`${formatDuration(duration)}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useState(() => {
    showConfetti &&
      setTimeout(() => {
        setShowConfetti(false);
      }, 8000);
  }, [showConfetti]);

  return (
    <div>
      {!countdownEnded && countdown !== "" && (
        <p>Cвяткування почнеться за {countdown} </p>
      )}

      {countdownEnded && (
        <>
          <button
            onClick={() => {
              setCurrentStep(currentStep + 1);
              localStorage.setItem("currentStep", Number(currentStep));
            }}
          >
            Let`s gooo!
          </button>
          <ConfettiExplosion />
        </>
      )}
    </div>
  );
};
