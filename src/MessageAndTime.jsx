import React from "react";
import styled from "styled-components";
import { Message } from "./Components/Message and DateTime/Message";
import { DateNTime } from "./Components/Message and DateTime/DateNTime";

const Wrapper = styled.div`
  display: inline-block;
`;

export const MessageAndTime = () => {
  return (
    <>
      <Wrapper>
        <Message />
        <DateNTime />
      </Wrapper>
    </>
  );
};
