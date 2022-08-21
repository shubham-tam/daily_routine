import React, { useState, useContext } from "react";
import { Input, ButtonAdd } from "../../style/CalorieStyle";
import { GlobalContext } from "../context/GlobalState";

export const AddItems = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addCalorie } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addCalorie(newItem);
  };

  return (
    <>
      <h3>Add New Items</h3>
      <hr />

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="item"> Food Item</label>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the name of the food item..."
          />
        </div>

        <div>
          <label htmlFor="value"> Calorie </label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the amount of calorie in the food..."
          />
        </div>

        <ButtonAdd> Add Items </ButtonAdd>
      </form>
    </>
  );
};
