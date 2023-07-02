import React, { useState } from "react";
import { isNaN, isEmpty } from "lodash";

export default function TipCalculationDisplay({
  tipPercentage,
  billTotal,
  numberOfPeople,
  customPercentage,
}) {
  const tipPercentToUse = isEmpty(customPercentage)
    ? tipPercentage
    : customPercentage / 100;

  const tipPerPerson = (billTotal * tipPercentToUse) / numberOfPeople;
  const totalPerPerson = billTotal / numberOfPeople + tipPerPerson;

  return (
    <div className="rounded-lg bg-teal-800 p-4 flex flex-col justify-between mt-4">
      <div className="flex flex-row justify-between mb-4">
        <div>
          <h1>Tip Amount</h1>
          <h3>/ person</h3>
        </div>
        <div className="flex justify-end">
          <h1>
            {isNaN(tipPerPerson) ? `$0.00` : `$${tipPerPerson.toFixed(2)}`}
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-between mb-4">
        <div>
          <h1>Total</h1>
          <h3>/ person</h3>
        </div>
        <div>
          <h1>
            {isNaN(totalPerPerson) ? `$0.00` : `$${totalPerPerson.toFixed(2)}`}
          </h1>
        </div>
      </div>

      <div className="flex flex-col mt-auto md:flex-col md:justify-between">
        <button
          className="btn bg-teal-100 text-teal-800 mb-2 md:mb-0"
          onClick={() => window.location.reload()}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
