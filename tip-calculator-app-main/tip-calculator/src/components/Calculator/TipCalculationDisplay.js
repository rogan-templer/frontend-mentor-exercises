import React, { useState } from "react";

export default function TipCalculationDisplay({
  tipPercentage,
  billTotal,
  numberOfPeople,
}) {
  console.log("tip:", billTotal);

  const calculate

  return (
    <div className="rounded-lg bg-teal-800 p-4 ">
      <div className="flex flex-row">
        <h1>Tip Amount</h1>
        <h3>/ person</h3>
        <h1>$0.00</h1>
      </div>
      <div className="flex flex-row">
        <h1>Total</h1>
        <h3>/ person</h3>
        <h1>$0.00</h1>
      </div>
      <div className="flex flex-col">
        <button
          className="btn bg-teal-100 text-teal-800"
          onClick={() => window.location.reload()}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
