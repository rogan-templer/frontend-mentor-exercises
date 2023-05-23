import React, { useState } from "react";

export default function TipCalculationInputs() {
  const [billInput, setBillInput] = useState(0);

  return (
    <div className="flex flex-col">
      <h1>Bill</h1>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <h1>Select tip %</h1>
      <div className="grid grid-cols-3 gap-3">
        <button className="btn">5%</button>
        <button className="btn">10%</button>
        <button className="btn">15%</button>
        <button className="btn">25%</button>
        <button className="btn">50%</button>
        <button className="btn" contentEditable="true">
          choose
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
