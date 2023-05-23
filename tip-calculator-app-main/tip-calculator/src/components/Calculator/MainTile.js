import React, { useState } from "react";
import TipCalculation from "./TipCalculationDisplay";
import TipCalculationInputs from "./TipCalculationInputs";

export default function MainTile() {
  // useContext - look at the bonus calculator for an example on how you can do this.

  return (
    <div className="rounded-lg bg-white p-4 flex flex-row">
      <TipCalculationInputs />
      <TipCalculation />
    </div>
  );
}
