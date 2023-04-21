import React, {useState} from "react";
import "./Categories.css";
import {Button} from "../../common/Button";
import BudgetCategory from "./CategoryItem/BudgetCategory";
import { Modal } from "../../common/Modal";
import AddCategoryForm from "./CategoryItem/AddCategoryForm";

export default function Categories() {
  const [listCategories, setListCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addCategoryHandler = (category) => {
    setListCategories([category, ...listCategories]);
    // console.log(listCategories);
  };
  return (
    <>
      <div className="categories_container_header">
        <h1>Categories</h1>
        <Button
          children="+"
          onClick={() => {
            setIsOpen(true);
          }}
        ></Button>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <AddCategoryForm
          addHandler={addCategoryHandler}
          handlerVisibility={setIsOpen}
        />
      </Modal>

      <div className="categories_collection">
        {listCategories.length === 0 ? (
          <p>
            <i>Nothing here yet!</i>
          </p>
        ) : (
          listCategories.map((category, index) => {
            return (
              <BudgetCategory
                key={index}
                title={category.title}
                amount={category.amount}
              />
            );
          })
        )}
      </div>
    </>
  );
}
