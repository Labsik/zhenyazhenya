import React from "react";
import { Gallery } from "react-grid-gallery";
import first from "../../assets/1.jpg";
import second from "../../assets/2.jpg";
import third from "../../assets/3.jpg";
import fourth from "../../assets/4.jpg";
import fifth from "../../assets/5.jpg";
import sixth from "../../assets/6.jpg";

const images = [
  {
    src: first,
    width: 350,
    height: 450,
    id: 1,
  },
  {
    src: second,
    width: 250,
    height: 212,
    id: 2,
  },
  {
    src: third,
    width: 370,
    height: 212,
    id: 3,
  },
  {
    src: fourth,
    width: 220,
    height: 174,
    id: 4,
  },
  {
    src: fifth,
    width: 180,
    height: 212,
    id: 5,
  },
  {
    src: sixth,
    width: 300,
    height: 232,
    id: 6,
  },
];

export const Finish = ({ currentStep, setCurrentStep }) => {
  return (
    <div>
      <h3>
        Love you{" "}
        <span
          onClick={() => {
            setCurrentStep(1);
            localStorage.setItem("currentStep", Number(currentStep));
          }}
        >
          ❤️
        </span>
        <span
          onClick={() => {
            setCurrentStep(6);
            localStorage.setItem("currentStep", Number(currentStep));
          }}
        >
          ❤️
        </span>
      </h3>
      <Gallery images={images} />
    </div>
  );
};
