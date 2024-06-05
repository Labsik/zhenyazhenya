import React, { useState } from "react";

export const GramQuiz = ({ currentStep, setCurrentStep }) => {
  const [quiz, setQuiz] = useState({
    password: "",
    cafe: "",
  });

  const changeCafe = (e) => {
    setQuiz({ ...quiz, cafe: e.target.value });
  };

  const onPassChanged = (e) => {
    setQuiz({ ...quiz, password: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const { password, cafe } = quiz;

    if (password === "JamesBlakeTheNational69" && cafe === "gram") {
      console.log("Please enter");
      setCurrentStep(6);
      localStorage.setItem("currentStep", Number(currentStep));
    } else {
      alert("Opps, try again");
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <span
          onClick={() => {
            setCurrentStep(4);
            localStorage.setItem("currentStep", Number(currentStep));
          }}
        >
          ❤️
        </span>
      </div>

      <img
        src="https://www.maxim.com/wp-content/uploads/2022/08/Booze-Vinyl-Promo.jpg"
        alt="rock"
        style={{ maxWidth: "300px", maxHeight: "300px" }}
      />
      <form onSubmit={submitForm}>
        <fieldset
          style={{
            marginBottom: "20px",
            borderColor: "purple",
            borderRadius: "10px",
          }}
        >
          <label htmlFor="password">Wi-Fi Password </label>
          <input
            type="password"
            id="password"
            name="password"
            value={quiz.password}
            onChange={onPassChanged}
          />
        </fieldset>
        <fieldset
          style={{
            marginBottom: "20px",
            borderColor: "purple",
            borderRadius: "10px",
          }}
        >
          <select value={quiz.cafe} name="bar" onChange={changeCafe}>
            <option defaultValue value="">
              🍸Наша наступна зупинка🪩
            </option>
            <option value="skvot">Skvot</option>
            <option value="gram">GramBar</option>
            <option value="odnodumtsi">Odnodumtsi</option>
          </select>
        </fieldset>
        <button
          style={{
            marginTop: "20px",
            width: "250px",
            backgroundColor: "purple",
          }}
          type="submit"
        >
          🍸🪩
        </button>
      </form>
    </div>
  );
};
