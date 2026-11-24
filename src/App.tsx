import Ball from "./Ball/Ball.tsx"
import './App.css'
import {useState} from "react";

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const changeNumbers = () => {
    setNumbers([6, 12, 17, 24, 33]);
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