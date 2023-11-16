import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCounter(0);
    setStep(1);
  }

  const date = new Date("november 14 2023");
  date.setDate(date.getDate() + counter);

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCounter((counter) => counter - step)}>
          -
        </button>

        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={() => setCounter((counter) => counter + step)}>
          +
        </button>
      </div>
      <p>
        <span>
          {counter === 0
            ? " Today is "
            : counter > 0
            ? counter + " days from "
            : counter + " days ago was "}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {counter !== 0 ? (
        <div>
          <button onClick={handleReset}>Restart</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
