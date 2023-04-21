import React, {useState, useEffect} from "react";
import {AddTransaction, Transactions} from "..";
import getWallet from "../../hooks/getWallet";
import updateWallet from "../../hooks/updateWallet";
import {Modal} from "../common/Modal";
import ListOverview from "../ListOverview/ListOverview";
import "./Dashboard.css";

  let inflow = 0;
  let outflow = 0;

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [transactionList, setTransactionList] = useState([]);

 function handlerSetList(transaction) {
    transaction.amount_type === "income"
      ? (inflow += Number(transaction.amount))
      : (outflow += Number(transaction.amount));
    setTransactionList([...transactionList, transaction]);
    console.log("inflow", inflow);
    console.log("out", outflow);
  }

  // useEffect(() => {
  //   const list =  () => {
  //     const getList = getWallet();
  //     setTransactionList([getList]);
  //   };

  //   list();
  // }, [setTransactionList]);

  return (
    <div className="dashboard_side">
      <div className="dashboard_header">
        <div>
          <h1>Hi there!</h1>
          <p>How much did you spend today?</p>
        </div>

        <button
          children=" + Log Expense"
          id="log_expense"
          onClick={() => {
            setIsOpen(true);
          }}
        ></button>
      </div>

      <div className="list_overview">
        <ListOverview inflow={inflow} outflow={outflow} />
      </div>

      <div className="list_expenses">
        <Transactions transactionList={transactionList} />
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <AddTransaction
          handlerSetList={handlerSetList}
          handlerVisibility={setIsOpen}
        />
      </Modal>
    </div>
  );
}
