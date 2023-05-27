import React, { useState } from "react";
import TipCalculation from "./TipCalculationDisplay";

export default function MainTile() {
  const [tipPercentage, setTipPercentage] = useState(0);
  const [billTotal, setBillTotal] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [customPercentage, setCustomPercentage] = useState(0);

  return (
    <>
      <div className="rounded-lg bg-white p-4 flex flex-row">
        <div className="flex flex-col p-10">
          <h1 className="font-custom font-semibold pb-1.5">Bill</h1>
          <input
            className="input input-bordered input-accent w-full max-w-xs"
            type="number"
            placeholder="0"
            onChange={(e) => setBillTotal(e.target.value)}
          />
          <h1 className="font-custom font-semibold pt-4 pb-1.5">
            Select tip %
          </h1>
          <div className="grid grid-cols-3 gap-3">
            <button className="btn" onClick={() => setTipPercentage(0.05)}>
              5%
            </button>
            <button className="btn" onClick={() => setTipPercentage(0.1)}>
              10%
            </button>
            <button className="btn" onClick={() => setTipPercentage(0.15)}>
              15%
            </button>
            <button className="btn" onClick={() => setTipPercentage(0.25)}>
              25%
            </button>
            <button className="btn" onClick={() => setTipPercentage(0.5)}>
              50%
            </button>
            <input
              className="input input-bordered input-accent"
              type="number"
              placeholder="Custom"
              onChange={(e) => setCustomPercentage(e.target.value)}
            />
          </div>
          <h1 className="font-custom font-semibold pb-1.5">Number of people</h1>
          <input
            className="input input-bordered input-accent w-full max-w-xs"
            type="number"
            placeholder="0"
            onChange={(e) => setNumberOfPeople(e.target.value)}
          />
        </div>
        <TipCalculation
          tipPercentage={tipPercentage}
          billTotal={billTotal}
          numberOfPeople={numberOfPeople}
          customPercentage={customPercentage}
        />
      </div>
    </>
  );
}
