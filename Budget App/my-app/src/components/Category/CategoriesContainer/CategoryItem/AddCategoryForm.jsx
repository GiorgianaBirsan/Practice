import React, {useState} from "react";
import { Button } from "../../../common/Button";

const categories = {
  title: "",
  amount: "",
};

export default function AddCategoryForm(props) {
  const [category, setCategory] = useState(categories);

  const inputHandler = (event) => {
    const {name, value} = event.target;
    setCategory({...category, [name]: value});
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          category.title =
            category.title.charAt(0).toUpperCase() + category.title.slice(1);
          props.addHandler(category);
          props.handlerVisibility(false);
        }}
      >
        <div className="title">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={category.title}
            onChange={inputHandler}
            required
          />
        </div>

        <Button children="Submit" type="submit" />
      </form>
    </>
  );
}
