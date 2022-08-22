import React, { Component } from "react";
import styled from "styled-components";

const Tym = styled.div`
  display: inline-block;
  font-size: 24px;
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
