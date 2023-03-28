import React from "react";
import { Card } from "../common/Card";
import "./ListOverview.css";

export default function ListOverview(props) {
  // const {totalAmount}= props

  return (
    <React.Fragment>
    
      <div className="overview_title">*o sa vina wallet name*</div>
      <div className="overview_detailes">
        <div className="total_incomes">
          <Card>
           <p>Total inflow</p>
           <p>{props.inflow} RON</p>
          </Card>
        </div>
        <div className="total_expenses">
          <Card>
            <p>Total outflow</p>
            <p>{props.outflow} RON</p>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}
