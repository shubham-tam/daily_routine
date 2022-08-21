import React from "react";
import { Header } from "./Components/Calorie Tracker/Header";
import { CalorieTable } from "./Components/Calorie Tracker/CalorieTable";
import { Right } from "./style/AllComponentStyle";
import { ItemsList } from "./Components/Calorie Tracker/ItemsList";
import { AddItems } from "./Components/Calorie Tracker/AddItems";
import { GlobalProvider } from "./Components/context/GlobalState";

export const CalorieTracker = () => {
  return (
    <Right>
      <GlobalProvider>
        <Header />
        <CalorieTable />
        <ItemsList />
        <AddItems />
      </GlobalProvider>
    </Right>
  );
};
