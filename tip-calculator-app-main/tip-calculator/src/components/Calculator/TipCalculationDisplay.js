import React, { useState } from "react";

export default function TipCalculationDisplay() {
  return (
    <div className="rounded-lg bg-red p-4">
      <div>
        <h1>Tip Amount</h1>
        <h3>/ person</h3>
      </div>
      <div>
        <h1>Total</h1>
        <h3>/ person</h3>
      </div>
      <div>
        <button>RESET</button>
      </div>
    </div>
  );
}
