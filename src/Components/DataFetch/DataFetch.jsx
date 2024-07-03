import React from "react";
import { useEffect, useState } from "react";
import styles from "../DataFetch/DataFetch.module.css";
import Currency from "../Currency/Currency";
import DataCalculation from "./DataCalculation";

const errormessage = document.createElement("p");

const DataFetch = (props) => {
  const [amount, setAmount] = useState();
  const [code, setCode] = useState();
  const [rate, setRate] = useState();
  const [result, setResult] = useState("");

  const showError = () => {
    errormessage.textcontent = "We have a problem";
    errormessage.style.color = "red";
    document.body.appendChild(errormessage);
  };

  console.log("DATAFETCH 1:");

  useEffect(() => {
    setAmount(props.amount);
    setCode(props.code);
    //setAmount(props.amount);
    //setCode(props.code);

    //console.log(code);
    console.log("DATAFETCH 1.5:");

    //fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${code}/2024-06-21/`)
    //fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${code}/2012-01-02/`)
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

        console.log("DATAFETCH 2:");

        setRate(data.rates[0].mid);

        console.log("Rate now on DataFetch:" + rate);
        console.log("Code now on DataFetch:" + code);
        console.log("Amount now on DataFetch:" + amount);
      })

      .catch(() => {
        showError();
      });

    return;
    <section>
      <DataCalculation amount={amount} rate={rate} />;
    </section>;
  });
};

export default DataFetch;
