import Ball from "./ball/ball.tsx"
import './App.css'
import {useState} from "react";

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const changeNumbers = () => {
    const newNumbers: number[] = [];

    while (newNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 32) + 5;
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }

    newNumbers.sort((a, b) => a - b);
    setNumbers(newNumbers);
  };

  return (
    <>
      <button onClick={changeNumbers}>New numbers</button>
      <div>
        <Ball value={numbers[0]} />
        <Ball value={numbers[1]} />
        <Ball value={numbers[2]} />
        <Ball value={numbers[3]} />
        <Ball value={numbers[4]} />
      </div>
    </>
  )
};

export default App