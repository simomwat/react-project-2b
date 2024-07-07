import React from "react";
import { useEffect, useState } from "react";

import styles from "./Currency.module.css";
import DataFetch from "../DataFetch/DataFetch";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [code, setCode] = useState("CHF");

  // const [result, setResult] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    setAmount(event.target.amount.value);
    setCode(event.target.code.value);
  }

  const errormessage = document.createElement("p");

  const showError = () => {
    errormessage.textcontent = "We have a problem";
    errormessage.style.color = "red";
    document.body.appendChild(errormessage);
  };

  if ({ code }) {
    //fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${code}/today/`)
    fetch(`https://api.nbp.pl/api/exchangerates/rates/A/${code}/`)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })

      .then((data) => {
        if (!data) {
          showError();
          return;
        }

        setRate(data.rates[0].mid);

        //  setResult(rate * amount);
      })

      .catch(() => {
        showError();
      });
  }
  return (
    <section className={styles.container}>
      <div>
        <form id="myform" className={styles.position} onSubmit={handleSubmit}>
          <input
            className={styles.item}
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
        </form>
        <br />
        <div></div>
      </div>
      <DataFetch rate={rate} amount={amount} />
    </section>
  );
};
export default Currency;
