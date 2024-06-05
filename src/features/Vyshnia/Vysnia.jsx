export const Vysnia = ({ setCurrentStep, currentStep }) => {
  return (
    <div>
      <h3>
        Перший заклад для розігріву
        <span
          onClick={() => {
            setCurrentStep(1);
            localStorage.setItem("currentStep", Number(currentStep));
          }}
        >
          ❤️
        </span>
      </h3>
      <a
        href="https://maps.app.goo.gl/AYoerJ1gbhwfMRCn8"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "15px" }}
      >
        A🍷D🍷D🍷R🍷E🍷S🍷S I🍷N B🍷I🍷0
      </a>
      <br />
      <hr />
      <br />
      <button
        onClick={() => {
          setCurrentStep(3);
          localStorage.setItem("currentStep", Number(currentStep));
        }}
      >
        Поїхали далі ⏭️⏭️⏭️
      </button>
    </div>
  );
};
