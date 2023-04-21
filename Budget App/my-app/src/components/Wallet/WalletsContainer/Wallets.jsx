import React, {useState, useEffect} from "react";
import "./Wallets.css";
import {Button} from "../../common/Button";
import {Modal} from "../../common/Modal";
import AddWallet from "../AddWallet/AddWallet";
import Wallet from "./WalletItem/Wallet";
import getWallet from "../../../hooks/getWallet";

export default function Wallets(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [listWallets, setListWallets] = useState([]);

  const addWalletHandler = (wallet) => {
    setListWallets([wallet, ...listWallets]);
  };

  // useEffect(() => {
  //   const list = () => {
  //     const getList = getWallet();
  //     // setListWallets([getList, ...listWallets]);
  //      setListWallets([getList,...listWallets]);
  //   };

  //   list();
  // }, [setListWallets]);

  return (
    <>
      <div className="wallet_container_header">
        <h1>Wallets</h1>
        <Button
          children="+"
          onClick={() => {
            setIsOpen(true);
          }}
        ></Button>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <AddWallet
          addHandler={addWalletHandler}
          handlerVisibility={setIsOpen}
        />
      </Modal>

      <div className="wallets_collection">
        {listWallets.length === 0 ? (
          <p>
            <i>Nothing here yet!</i>
          </p>
        ) : (
          listWallets.map((wallet, index) => {
            return (
              <Wallet
                key={index}
                name={wallet.name}
                amount={wallet.amount}
                color={wallet.color}
              />
            );
          })
        )}
      </div>
    </>
  );
}
