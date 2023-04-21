import React from "react";
import "./BudgetCategory.css";
import {SlWallet} from "react-icons/sl";

export default function BudgetCategory(props) {
    const icon_color = {
    backgroundColor: props.color,
  };
  return (
    <>
      <div className="category">
        <div className="box_img_cat" style={icon_color} >
          <SlWallet className="react-icons" />
        </div>
        <div className="category_details">
          <p className="category_title">{props.title}</p>
          {Number(props.amount) > 0 ? (
            <p className="category_amount">{props.amount} RON</p>
          ) : (
            <p className="category_amount">0 RON</p>
          )}
        </div>
      </div>
    </>
  );
}
