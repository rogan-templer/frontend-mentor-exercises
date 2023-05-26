import React, { useState, createContext, useContext, useReducer } from "react";
import TipCalculation from "./TipCalculationDisplay";
import TipCalculationInputs from "./TipCalculationInputs";
import { DISPATCH_ACTION } from "./constants";

export const TipFormContext = createContext({});

const InitialFormState = {
  billTotal: "",
  fivePercent: "",
  tenPercent: "",
  fifteenPercent: "",
  twentyFivePercent: "",
  fiftyPercent: "",
  customTipPercent: "",
  numberOfPeople: "",
};

export default function MainTile() {
  const [formState, dispatch] = useReducer(reducer, InitialFormState);

  const stateData = useContext(TipFormContext);

  return (
    <>
      <TipFormContext.Provider value={formState}>
        {console.log("formstate:", formState)}
        <form>
          <div className="rounded-lg bg-white p-4 flex flex-row">
            <TipCalculationInputs />
            <TipCalculation />
          </div>
        </form>
      </TipFormContext.Provider>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case DISPATCH_ACTION.addBillTotal:
      return { ...state, billTotal: action.payload.billTotal };
    case DISPATCH_ACTION.addFivePercent:
      return { ...state, fivePercent: action.payload.fivePercent };
    case DISPATCH_ACTION.addTenPercent:
      return { ...state, tenPercent: action.payload.tenPercent };
    case DISPATCH_ACTION.addFifteenPercent:
      return { ...state, fifteenPercent: action.payload.fifteenPercent };
    case DISPATCH_ACTION.addTwentyFivePercent:
      return { ...state, twentyFivePercent: action.payload.twentyFivePercent };
    case DISPATCH_ACTION.addFiftyPercent:
      return { ...state, fiftyPercent: action.payload.fiftyPercent };
    case DISPATCH_ACTION.addCustomTipPercent:
      return { ...state, customTipPercent: action.payload.customTipPercent };
    case DISPATCH_ACTION.addNumberOfPeople:
      return { ...state, numberOfPeople: action.payload.numberOfPeople };
  }
}
