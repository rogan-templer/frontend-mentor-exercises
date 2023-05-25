import React, { useState, createContext, useContext, useReducer } from "react";
import TipCalculation from "./TipCalculationDisplay";
import TipCalculationInputs from "./TipCalculationInputs";
import { DISPATCH_ACTION } from "./constants";

export const TipFormContext = createContext({});

const InitialFormState = {
  fivePercent: 5/100,
  tenPercent: 10/100,
  fifteenPercent: 15/100,
  twentyFivePercent: 25/100,
  fiftyPercent: 50/100,
  userChoice: ''
}

export default function MainTile() {
  // useContext - look at the bonus calculator for an example on how you can do this.
  const [formState, dispatch] = useReducer(reducer, InitialFormState);

  const stateData = useContext(TipFormContext);

  return (
    <>
    <TipFormContext.Provider value={formState}>
      {console.log('formstate:', formState)}
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
    case DISPATCH_ACTION.addUserChoice:
      return { ...state, userChoice: action.payload.userChoice };
  }
}