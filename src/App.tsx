import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.scss';
import Convert from "./components/Convert/Convert";
import Header from "./components/Header/Header";
import { fetchThunk } from "./store/thunks/fetchThunk";

const App = () => {
  const dispatch: Function = useDispatch();
  const currency: any[] = useSelector((state: any) => state.fetchReducer.data);

  const [inputSelect, setInputSelect] = useState<string>("RUB");
  const [outputSelect, setOutputSelect] = useState<string>("USD"); 
  const [currencyInput, setCurrencyInput] = useState<any>(0);
  const [currencyOutput, setCurrencyOutput] = useState<any>(0);

  useEffect(() => {
    dispatch(fetchThunk());
  }, [dispatch]);

  const findInputSelectRate = currency.find((rate: any) => {
    if (rate.cc === inputSelect) {
       return rate;
    } 
    return null;
  });

  const findOutputSelectRate = currency.find((rate: any) => {
    if (rate.cc === outputSelect) {
       return rate;
    } 
    return null;
  });
  
  const InputHandler = (value: number) => {
    const result = value * findInputSelectRate.rate / findOutputSelectRate.rate;
    setCurrencyOutput(result.toFixed(2));
    setCurrencyInput(value);
  };

  const OutputHandler = (value: number) => {
    const result = value / findInputSelectRate.rate * findOutputSelectRate.rate;
    setCurrencyInput(result.toFixed(2));
    setCurrencyOutput(value);
  };

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.appBlock}>
        <div className={styles.appBlockInner}>
          <Convert
            label={true}
            currency={currency}
            selectValue={inputSelect}
            inputValue={currencyInput}
            OnInputHandler={InputHandler}
            OnSelectHandler={setInputSelect}
          />
          <CurrencyExchangeIcon sx={{ fontSize: "40px" }} />
          <Convert
            label={false}
            currency={currency}
            selectValue={outputSelect}
            inputValue={currencyOutput}
            OnInputHandler={OutputHandler}
            OnSelectHandler={setOutputSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
