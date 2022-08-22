import React, { useContext } from "react";
import { Li, ButtonDeleteItem } from "./styleToDo";
import { GlobalContext } from "../context/GlobalState";

export const ListItems = ({ list }) => {
  const { deleteList } = useContext(GlobalContext);

  return (
    <>
      <Li>
        {list.text}
        <ButtonDeleteItem onClick={() => deleteList(list.id)}>
          x
        </ButtonDeleteItem>
      </Li>
    </>
  );
};
