import React from "react";
import { useState } from "react";

import styles from "./Currency.module.css";
import Results from "../Results/Results";

const Currency = () => {
  const [result, setResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (event.target.code.value) {
      fetch(
        `https://api.nbp.pl/api/exchangerates/rates/A/${event.target.code.value}/`
      )
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

          setResult(data.rates[0].mid * event.target.amount.value);
        })

        .catch(() => {
          showError();
        });
    }
  }

  const showError = () => {
    setErrorMessage("Having problem, try again latter!");
  };

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
