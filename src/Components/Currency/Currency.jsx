import React from "react";
import { useEffect, useState } from "react";

import styles from "./Currency.module.css";
import Results from "../Results/Results";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [code, setCode] = useState("CHF");
  const [rate, setRate] = useState(0);
  const [result, setResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setAmount(event.target.amount.value);
    //const amount = event.target.amount.value;
    //const code = event.target.code.value;
    setCode(event.target.code.value);
  }

  //const errormessage = document.createElement("p");

  const showError = () => {
    setErrorMessage("Having problem, try again latter!");
  };

  useEffect(() => {
    if (code) {
      //fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${code}/today/`)
      fetch(`https://api.nbp.pl/api/exchangerates/rates/A/${code}/`)
        .then((response) => {
          if (!response.ok) {
            showError();
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
          console.log(rate);

          setResult(rate * amount);
        })

        .catch(() => {
          showError();
        });
    }
  });

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

        {errorMessage && <div className={styles.error}> {errorMessage} </div>}
      </div>
      <Results result={result} />
    </section>
  );
};
export default Currency;
