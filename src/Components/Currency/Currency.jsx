import React from "react";
import { useState } from "react";

import styles from "./Currency.module.css";
import DataFetch from "../DataFetch/DataFetch";
import DataCalculation from "../DataFetch/DataCalculation";

const Currency = () => {
  const [amount, setAmount] = useState();
  const [code, setCode] = useState();

  //const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //setAmount("Form has been submitted with with Input: " + amount);

    //setResult("Form has been submitted with with Input: " + amount);

    setAmount(event.target.amount.value);
    setCode(event.target.code.value);
    // setRate(rops.rate);
  }

  //function handleChange(event) {
  //  setAmount(event.target.value);
  //  setCode(event.target.value);

  // setResult("");
  // }

  // setRate(3);

  console.log("Currency level amount:" + amount);
  //console.log("Currency level rate:" + rate);
  console.log("this is my code" + code);
  console.log("CURRENCY LEVEL:");

  //console.log("Rate now on DataFetch:" + rate);
  //const convertedAmount = amount * rate;
  //setResult(` ${convertedAmount.toFixed(2)} `);

  // document.getElementById("pln").innerText = ` ${convertedAmount.toFixed(2)} `;
  // console.log("Total now  on DataFetch:" + convertedAmount);

  // const items = {
  //  amount: amount,
  //  code: code,
  // };

  return (
    <section>
      <div>
        <form id="myform" className={styles.container} onSubmit={handleSubmit}>
          <DataFetch amount={amount} code={code} />

          <input
            className={styles.item}
            // value={amount}
            //onInput={handleChange}
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            required
          />
          <select name="code" className={styles.item}>
            <option value="CHF">CHF</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <button type="submit" className={styles.item}>
            Convert
          </button>
          <span className={styles.para}>
            TO <span id="pln">0</span> PLN2
          </span>
        </form>
        <br />
        <div></div>
      </div>
    </section>
  );
};

export default Currency;
