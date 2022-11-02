import React from "react";
import styles from "./Convert.module.scss";
import { ConvertProps } from "../../types/types";

const Convert = (props: ConvertProps) => {
  const {
    label,
    currency,
    selectValue,
    inputValue,
    OnInputHandler,
    OnSelectHandler,
  } = props;

  const optionCurrencies = currency.map((item: any, index: number) => {
    return <option key={index}>{item.cc}</option>;
  });

  return (
    <div className={styles.converter}>
      <label htmlFor="currency">{label ? "From" : "To"}</label>
      <select id="currency" value={selectValue} onChange={(e) => OnSelectHandler(e.target.value)}>
        {optionCurrencies}
      </select>
      <input value={inputValue} onChange={(e) => OnInputHandler(e.target.value)} type="number" />
    </div>
  );
};

export default Convert;