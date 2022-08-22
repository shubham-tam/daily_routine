import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  Input,
  Form,
  ButtonComponents,
  ButtonAdd,
  ButtonDelAll,
} from "./styleToDo";

export const AddListItem = () => {
  const [text, setText] = useState("");

  const { addList } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Math.floor(Math.random() * 10000000),
      text,
    };

    addList(newItem);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add items to list"
        />
        <ButtonAdd> Add item </ButtonAdd>
        {/* <ButtonDelAll> Clear all </ButtonDelAll> */}
      </Form>
    </>
  );
};
