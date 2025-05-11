import React, { useState } from "react";
import styles from "./AddBalance.module.css";
import { useAppContext } from "../../AppContext";

const AddBalance = () => {
  let { income, setIncome, isModalOpen, setModalOpen } = useAppContext();
  let [inputfield, setInputfield] = useState(0);

  function addIncome(value) {
    let currentIncome = income + value;
    setIncome(currentIncome);
    localStorage.setItem("income", currentIncome.toString());
    setModalOpen(false);
    setInputfield(0);
    
  }

  function handleInput(event) {
    console.log(event.target.value);
    if(!isNaN( event.target.value)){
      setInputfield(Number(event.target.value));
    }
    
  }

  if (!isModalOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => setModalOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Add Balance</h2>
        <input
          type="number"
          placeholder="Income Amount"
          onChange={(event) => handleInput(event)}
        />
        <button type="submit" onClick={() => addIncome(inputfield)}>Add Balance</button>
        <button onClick={() => setModalOpen(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddBalance;
