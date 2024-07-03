import React from "react";
import { useEffect, useState } from "react";
import DataFetch from "./DataFetch";

const DataCalculation = (props) => {
  const [rate, setRate] = useState();
  const [amount, setAmount] = useState();
  //const [result, setResult] = useState("");

  useEffect(() => {
    setRate(props.rate);
    setAmount(props.amount);
  }, []);

  console.log("DATACALCULATION LEVEL:");

  //const result = { amount } * { rate };

  const convertedAmount = amount * rate;
  console.log("DataCalculation Rate" + rate);
  console.log("DataCalculation Amount" + amount);
  console.log("Total;" + convertedAmount);
  //setResult(` ${convertedAmount.toFixed(2)} `);

  return (
    <section>
      <p>
        Rate: {rate}
        Amount: {amount}
        Total: {convertedAmount}
      </p>
      <div>
        <h1>Convert {convertedAmount}</h1>;
      </div>
    </section>
  );
};

export default DataCalculation;
