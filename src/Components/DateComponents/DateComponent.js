import React, { Component } from "react";
import styled from "styled-components";

const Dat = styled.div`
  // display: inline-block;
  font-size: 24px;
`;

export class DateComponent extends Component {
  constructor() {
    super();
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      currentDate: date,
    };
  }

  render() {
    return (
      <>
        <Dat>{this.state.currentDate}</Dat>
      </>
    );
  }
}
