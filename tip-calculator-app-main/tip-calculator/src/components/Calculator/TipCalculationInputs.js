import React, { useState } from "react";

export default function TipCalculationInputs() {
  const [fivePercent, setFivePercent] = useState(0);

  return (
    <div className="flex flex-col p-10">
      <h1>Bill</h1>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <h1>Select tip %</h1>
      <div className="grid grid-cols-3 gap-3">
        <button
          className="btn"
          value={fivePercent}
          onClick={(e, d) => setFivePercent(0.05)}
        >
          5%
        </button>
        <button className="btn">10%</button>
        <button className="btn">15%</button>
        <button className="btn">25%</button>
        <button className="btn">50%</button>
        <button className="btn" contentEditable="true">
          Custom
        </button>
      </div>
      <h1>Number of people</h1>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent w-full max-w-xs"
      />
    </div>
  );
}
