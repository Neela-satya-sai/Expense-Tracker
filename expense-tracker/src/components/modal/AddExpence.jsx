import React, { useState } from "react";
import styles from "./AddExpence.module.css";
import { useAppContext } from "../../AppContext";
import Transactions from "../expenseItem/ExpenseItem";

const AddExpence = () => {
  let {
    income,
    setIncome,
    expences,
    setExpences,
    expenceList,
    setExpenceList,
    isModalOpen2,
    setModalOpen2,
  } = useAppContext();
  // let [inputfield, setInputfield] = useState("");
  // let [category, setCategory] = useState("");

  function addExpence(value) {
    if (!value) return; // Prevent invalid submission
    let currentIncome = income - value;
    let currentExpence = expences + Number(value);
    setIncome(currentIncome);
    setExpences(currentExpence);

    // localStorage.setItem("income", currentIncome.toString());
    // localStorage.setItem("expence", currentExpence.toString());

    // setModalOpen2(false);
    // setInputfield("");
  }

  // function handleInput(event) {
  //   if (!isNaN(event.target.value)) {
  //     setInputfield(Number(event.target.value));
  //   }
  // }
  function onDelete() {
    console.log("clicked delete");
    setIncome((prev) => prev + Number(price));
    setExpences((prev) => prev - Number(price));
    let filteredList = expenceList.filter(
      (eachExpence) => eachExpence.title != title
    );
    setExpenceList(filteredList);
  }
  function onEdit() {
    console.log("clicked edit");
    // onDelete();
    setModalOpen2(true);
    
  }

  function handleForm(event) {
    event.preventDefault();
    // event.target.reset();

    setModalOpen2(false);
    let title = event.target.elements.title.value;
    let price = event.target.elements.price.value;
    let date = event.target.elements.date.value;
    let category = event.target.elements.category.value;

    let obj = { title, price, date, category };
    setExpenceList((prev) => [...prev, obj]);
   // console.log(expenceList);

    // let prevlist = localStorage.getItem("expencesList");

    addExpence(price);
  }

  if (!isModalOpen2) return null;

  return (
    <div className={styles.overlay} onClick={() => setModalOpen2(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Add Expenses</h2>
        <form onSubmit={handleForm}>
          <input type="text" placeholder="Title" required name="title" />
          <input type="number" placeholder="Price" required name="price" />
          <select
            required
            // value={category}
            name="category"
            // onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
            <option value="travel">Travel</option>
            <option value="bills">Bills</option>
          </select>
          <input type="date" required name="date" />
          <button type="submit" className={styles.addExpense}>
            Add Expense
          </button>
          <button
            type="button"
            className={styles.cancel}
            onClick={() => setModalOpen2(false)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpence;
