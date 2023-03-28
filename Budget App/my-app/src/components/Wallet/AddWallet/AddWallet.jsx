import React, {useState} from "react";
import {Button} from "../../common/Button";

const wallets = {
  name: "",
  amount: "",
  color: "",
};

export default function AddWallet(props) {
  const [wallet, setWallet] = useState(wallets);

  const inputHandler = (event) => {
    const {name, value} = event.target;
    setWallet({...wallet, [name]: value});
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // console.log("ccc", wallet);

        if (wallet.amount.toString().startsWith("0")) {
          alert("Amount can not starts with 0.");
        } else {
          wallet.name =
            wallet.name.charAt(0).toUpperCase() + wallet.name.slice(1);
          props.addHandler(wallet);
        }
        props.handlerVisibility(false);
      }}
    >
      <div className="wallet_color">
        <label>Choose a color : </label>
        <input
          type="color"
          name="color"
          value={wallet.color}
          onChange={inputHandler}
        />
      </div>
      <div className="title">
        <label>Title</label>
        <input
          type="text"
          name="name"
          value={wallet.name}
          onChange={inputHandler}
          required
        />
      </div>

      <div className="amount-type">
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={wallet.amount}
          onChange={inputHandler}
          required
          min="1"
        />
      </div>

      <Button children="Submit" type="submit" />
    </form>
  );
}
