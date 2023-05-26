import React, { useState } from "react";
import TipCalculation from "./TipCalculationDisplay";

// Bin off the context/reducer etc as not required.
// instead -> const [tipPercent, setTipPercent] = useState(0)
// each button onClick setTippercent to new value
// pass props of setTipPercent, billTotal, numberOfPeople to calculation display component.

export default function MainTile() {
  const [tipPercentage, setTipPercentage] = useState(0);
  const [billTotal, setBillTotal] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  return (
    <>
      <form>
        <div className="rounded-lg bg-white p-4 flex flex-row">
          <div className="flex flex-col p-10">
            <h1>Bill</h1>
            <input
              className="input input-bordered input-accent w-full max-w-xs"
              type="number"
              placeholder="0"
              onChange={(e) => setBillTotal(e.target.value)}
            />
            <h1>Select tip %</h1>
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
              <button className="btn" contentEditable="true">
                Custom
              </button>
            </div>
            <h1>Number of people</h1>
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
          />
        </div>
      </form>
    </>
  );
}
