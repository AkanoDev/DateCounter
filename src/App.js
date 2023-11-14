import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isZero, setisZero] = useState(0);

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("november 14 2023");
  date.setDate(date.getDate() + counter);

  return (
    <div className="counter">
      <div>
        <button onClick={() => setStep((step) => step - 1)}> - </button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((step) => step + 1)}> + </button>
      </div>
      <button onClick={() => setCounter((counter) => counter - step)}>-</button>
      <span>Count: {counter}</span>
      <button onClick={() => setCounter((counter) => counter + step)}>+</button>

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
    </div>
  );
}
