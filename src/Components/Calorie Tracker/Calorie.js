import React, { useContext } from "react";
// import { Li, ButtonDeleteItem } from "../style/CalorieStyle";
import { Li, ButtonDeleteItem } from "../../style/CalorieStyle";
import { GlobalContext } from "../context/GlobalState";

export const Calorie = ({ calorie }) => {
  const { deleteCalorie } = useContext(GlobalContext);

  return (
    <Li>
      {calorie.text}{" "}
      <span style={{ backgroundColor: "#fff" }}> {calorie.amount}</span>
      <ButtonDeleteItem onClick={() => deleteCalorie(calorie.id)}>
        x
      </ButtonDeleteItem>
    </Li>
  );
};
