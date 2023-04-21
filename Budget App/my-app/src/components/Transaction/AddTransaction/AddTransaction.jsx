import React, {useState} from "react";
import "./AddTransaction.css";

const categories = [
  {label: "-", value: ""},
  {label: "Utilities", value: "utilities"},
  {label: "Shopping", value: "shopping"},
  {label: "Personal", value: "personal"},
  {label: "Saving", value: "saving"},
];
const amountType = [
  {label: "-", value: ""},
  {label: "Income", value: "income"},
  {label: "Expense", value: "expense"},
];
const initial_values = {
  title: "",
  date: "",
  amount: "",
  category_type: "",
  amount_type: "",
};

export default function AddTransaction(props) {
  const [transaction, setTransaction] = useState(initial_values);

  const inputHandler = (event) => {
    const {name, value} = event.target;
    setTransaction({...transaction, [name]: value});
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.handlerSetList(transaction);
    props.handlerVisibility(false);
  };
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="categories">
        <label>Category</label>
        <select
          id="category_type"
          name="category_type"
          value={transaction.category_type}
          onChange={inputHandler}
          required
        >
          {categories.map((category, index) => {
            return (
              <option key={index} value={category.value}>
                {category.label}
              </option>
            );
          })}
        </select>
      </div>
      <div className="title">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={transaction.title}
          onChange={inputHandler}
          required
        />
      </div>
      <div className="date">
        <label>Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={transaction.date}
          onChange={inputHandler}
          required
        />
      </div>
      <div className="amount">
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={transaction.amount}
          id="amount"
          onChange={inputHandler}
          required
        />
      </div>

      <div className="amount-type">
        <label>Amount type</label>
        <select
          name="amount_type"
          id="amount_type"
          value={transaction.amount_type}
          onChange={inputHandler}
          required
        >
          {amountType.map((type, index) => {
            return (
              <option key={index} value={type.value}>
                {type.label}
              </option>
            );
          })}
        </select>
      </div>

      <button id="save_transaction" children="Save" type="submit" />
    </form>
  );
}
