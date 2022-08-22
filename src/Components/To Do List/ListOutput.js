import React, { useContext } from "react";
import { ListItems } from "./ListItems";
import { H3, Ul } from "./styleToDo";

import { GlobalContext } from "../context/GlobalState";

export const ListOutput = ({ list }) => {
  const { lists } = useContext(GlobalContext);

  return (
    <>
      <H3>Items List</H3>
      <Ul>
        {lists.map((list) => (
          <ListItems key={list.id} list={list} />
        ))}
      </Ul>
    </>
  );
};
