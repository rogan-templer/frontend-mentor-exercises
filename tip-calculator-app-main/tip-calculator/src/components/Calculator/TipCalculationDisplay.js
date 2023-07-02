import React, { useState } from "react";
import { isNaN, isEmpty } from "lodash";

export default function TipCalculationDisplay({
  tipPercentage,
  billTotal,
  numberOfPeople,
  customPercentage,
}) {
  // console.log("tippy", typeof customPercentage);

  const tipPercentToUse = isEmpty(customPercentage)
    ? tipPercentage
    : customPercentage / 100;

  const tipPerPerson = (billTotal * tipPercentToUse) / numberOfPeople;
  const totalPerPerson = billTotal / numberOfPeople + tipPerPerson;

  return (
    <div className="rounded-lg bg-teal-800 p-4 flex flex-col justify-between">
      <span className="flex flex-row justify-between mb-4">
        <h1>Tip Amount</h1>
        <h3>/ person</h3>
        <h1>{isNaN(tipPerPerson) ? `$0.00` : `$${tipPerPerson.toFixed(2)}`}</h1>
      </span>
      <span className="flex flex-row">
        <h1>Total</h1>
        <h3>/ person</h3>
        <h1>
          {isNaN(totalPerPerson) ? `$0.00` : `$${totalPerPerson.toFixed(2)}`}
        </h1>
      </span>
      <div className="flex flex-col mt-auto">
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
