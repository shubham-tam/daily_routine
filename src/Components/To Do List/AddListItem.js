import React from "react";
import { Input, ButtonComponents, ButtonAdd, ButtonDelAll } from "./styleToDo";

export const AddListItem = () => {
  return (
    <>
      <ButtonComponents>
        <Input
          // type="text"
          // value={text}
          // onChange={(e) => setText(e.target.value)}
          placeholder="Add items to list"
        />
        <ButtonAdd> Add item </ButtonAdd>
        <ButtonDelAll> Clear all </ButtonDelAll>
      </ButtonComponents>
    </>
  );
};
