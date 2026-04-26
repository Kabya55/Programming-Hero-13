import React, { useState } from "react";

function Players() {
  const [run, setRun] = useState(0);
  const singalRun = () => {
    const updateRun = run + 1;
    setRun(updateRun);
  };

  const forRun = () => {
    const updateRun = run + 4;
    setRun(updateRun);
  };

  const sixRun = () => {
    const updateRun = run + 6;
    setRun(updateRun);
  };
  return (
    <div>
      <h1>Player Name: Dhoni</h1>
      <h2>Run Count: {run}</h2>
      <button onClick={singalRun}>Singal</button>
      <button onClick={forRun}>Four</button>
      <button onClick={sixRun}>Six</button>
    </div>
  );
}

export default Players;
