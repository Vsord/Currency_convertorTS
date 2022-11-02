import React from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.scss";

const Header = () => {
  const currency = useSelector((state: any) => state.fetchReducer.data);

  const headerCurrencies = currency.map((item: any, index: number) => {
    if (item.cc === "USD" || item.cc === "EUR") {
      return (
        <div className={styles.headerRates} key={index}>
          <span>
            {item.cc} {item.rate.toFixed(2)}
          </span>
        </div>
      );
    }
  });

  return <div className={styles.header}>{headerCurrencies}</div>;
};

export default Header;