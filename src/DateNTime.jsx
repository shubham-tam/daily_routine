import React from "react";
import styled from "styled-components";
import { DateComponent } from "./Components/DateComponents/DateComponent";
import { TimeComponent } from "./Components/DateComponents/TimeComponent";

const Wrap = styled.div`
  display: inline-block;
`;

export const DateNTime = () => {
  return (
    <Wrap>
      <DateComponent />
      <br />
      <TimeComponent />
    </Wrap>
  );
};
