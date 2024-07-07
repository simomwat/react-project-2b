import React from "react";
import { useEffect, useState } from "react";
import styles from "../DataFetch/DataFetch.module.css";

import Currency from "../Currency/Currency";

const DataFetch = (props) => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState("");
  const [result, setResult] = useState(0);

  // useEffect(() => {
  setAmount(props.amount);
  setRate(props.rate);
  setResult(amount * rate);
  // });

  return (
    <section className={styles.section}>
      <div>
        <form id="myform" className={styles.myForm}>
          <span className={styles.item}>
            TO <span id="pln">{result.toFixed(2)}</span> PLN
          </span>
        </form>
        <br />
        <div></div>
      </div>
    </section>
  );
};

export default DataFetch;
