import React, { Component } from "react";
import styled from "styled-components";

const Tym = styled.div`
  // display: inline-block;
  //   color: red;
  // font-weight: 600;
  font-size: 24px;

  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
  // position: relative;
  // top: 10%;
  // left: 50%;
  // transform: translate(-100%, -50%);
  // position: absolute;
`;

export class TimeComponent extends Component {
  constructor() {
    super();
    var today = new Date(),
      time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    this.state = {
      currentTime: time,
    };
  }

  render() {
    return <Tym>{this.state.currentTime}</Tym>;
  }
}
