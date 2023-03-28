import React from "react";
import {SlWallet} from "react-icons/sl";
import "./Wallet.css";

export default function Wallet(props) {
  const icon_color = {
    backgroundColor: props.color,
  };
  return (
    <>
      <div className="wallet">
        <div className="box_img" style={icon_color}>
          <SlWallet className="react-icons" />
        </div>
        <div className="wallet_details">
          <p className="wallet_title">{props.name}</p>
          <p className="wallet_amount">{props.amount} RON</p>
        </div>
      </div>
    </>
  );
}
