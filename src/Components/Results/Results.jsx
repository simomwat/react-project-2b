import React from "react";

import styles from "../Results/Results.module.css";

const Results = ({ result }) => {
  if ({ result }) {
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
  }
  return null;
};

export default Results;
