import React from "react";
import { Title } from "./styleToDo";

export const Header = () => {
  return (
    <>
      {/* <Title>
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          To Do List{" "}
        </h2>
        <hr style={{ width: "350px" }} />
      </Title> */}
      <Title>
        <h2>To Do List </h2>
        {/* <hr style={{ width: "350px" }} /> */}
      </Title>
    </>
  );
};
