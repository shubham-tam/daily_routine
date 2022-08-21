import React, { useContext } from "react";
import { Calorie } from "./Calorie";
import { Ul } from "../../style/CalorieStyle";
import { GlobalContext } from "../context/GlobalState";

export const ItemsList = ({ calorie }) => {
  const { calories } = useContext(GlobalContext);

  return (
    <>
      <h3>Items List</h3>
      <hr />
      <Ul>
        {calories.map((calorie) => (
          <Calorie key={calorie.id} calorie={calorie} />
        ))}
      </Ul>
    </>
  );
};
