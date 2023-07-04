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
    <div className="rounded-lg bg-teal-800 p-4 flex flex-col justify-between mt-4 h-5/6">
      <div className="flex justify-between pb-5">
        <div className="grid grid-cols-1">
          <h1>Tip Amount</h1>
          <h3>/ person</h3>
        </div>
        <div>
          <h1>
            {isNaN(tipPerPerson) ? `$0.00` : `$${tipPerPerson.toFixed(2)}`}
          </h1>
        </div>
      </div>
      <div className="flex justify-between pb-5">
        <div className="grid grid-cols-1">
          <h1>Total</h1>
          <h3>/ person</h3>
        </div>
        <div>
          <h1>
            {isNaN(totalPerPerson) ? `$0.00` : `$${totalPerPerson.toFixed(2)}`}
          </h1>
        </div>
      </div>

      <div className="flex flex-col mt-auto">
        <button
          className="btn bg-teal-100 text-teal-800 mb-2"
          onClick={() => window.location.reload()}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
