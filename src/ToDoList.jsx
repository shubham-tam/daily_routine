import React from "react";
import { Header } from "./Components/To Do List/HeaderTodo";
import { AddListItem } from "./Components/To Do List/AddListItem";
import { ListOutput } from "./Components/To Do List/ListOutput";
import { GlobalProvider } from "./Components/context/GlobalState";
import { Center } from "./style/AllComponentStyle";

export const ToDoList = () => {
  return (
    <>
      <Center>
        <GlobalProvider>
          <Header />
          <AddListItem />
          <ListOutput />
        </GlobalProvider>
      </Center>
    </>
  );
};
