import React from "react";
import "./TransactionItem.css";
export default function TransactionItem(props) {
  const income = {
    color: "green",
  };
  const expense = {
    color: "red",
  };
  const style_amount = props.amount_type === "income" ? income : expense;

  return (
    <>
      <div className="item_title">
        <h2>{props.title}</h2>
        <p> {props.date}</p>
      </div>
      <div className="item_amount">
        <p style={style_amount}>
          <b>{props.amount}</b>
        </p>
      </div>
    </>
  );
}
