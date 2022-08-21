import React from "react";
import { Header } from "./Components/Header";
import { CalorieTable } from "./Components/CalorieTable";
import { Right } from "./style/AllComponentStyle";
import { ItemsList } from "./Components/ItemsList";
import { AddItems } from "./Components/AddItems";
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
