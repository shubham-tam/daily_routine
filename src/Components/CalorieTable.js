import styled from "styled-components";
import React, { useState, useContext } from "react";
import {
  CalorieDataTable,
  Target,
  Current,
  Difference,
  H1,
  Value,
  DiffValue,
  InputCalorie,
} from "../style/CalorieStyle";
import { GlobalContext } from "./context/GlobalState";

export const CalorieTable = () => {
  const { calories } = useContext(GlobalContext);
  const [target, setTarget] = useState(0);

  const amounts = calories.map((calorie) => calorie.amount);

  const total = amounts.reduce((prev, cur) => (prev += cur), 0).toFixed(2);

  const difference = target - total;

  // function handleKeyDown(e) {
  //   if (e.key === "Enter") {
  //     console.log("enter");
  //     if (target) {
  //       <InputCalorie />;
  //     }
  //   }
  // }

  const H1Target = styled.div`
    display: flex;
    justify-content: space-between;
    letter-spacing: 3px;
    font-weight: 600;
    font-size: 24px;
    // margin-bottom: 20px;
    // align-items: center;
    padding: 10px;
    // background-color: #fff;
    background-color: #ffdfcc;
    color: ${difference < 0 ? "red" : "#28A228"};
  `;

  const HeaderValue = styled.h3`
    font-size: 24px;

    color: ${difference < 0 ? "red" : "#28A228"};
  `;

  return (
    <div>
      <h4>CALORIE TODAY</h4>
      <HeaderValue> {difference} Cal</HeaderValue>
      <hr />
      <h3>Calorie Table</h3>
      <CalorieDataTable>
        <Target>
          <H1Target> TARGET</H1Target>
          <InputCalorie
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            // onKeyDown={handleKeyDown}
            placeholder="Today's target"
          />
        </Target>
        <Current>
          <H1>CURRENT</H1>
          <Value> {total} </Value>
        </Current>
      </CalorieDataTable>
      <CalorieDataTable>
        <Difference>DIFFERENCE :</Difference>{" "}
        <DiffValue> {difference}</DiffValue>
      </CalorieDataTable>
    </div>
  );
};
