import React, { Component } from "react";
import styled from "styled-components";

const Tym = styled.div`
  font-size: 19px;
`;

export class TimeComponent extends Component {
  state = {
    date: new Date(),
  };

  callMe() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <>
        <Tym>{this.state.date.toLocaleTimeString("it-IT")}</Tym>
        {this.callMe()}
      </>
    );
  }
}
