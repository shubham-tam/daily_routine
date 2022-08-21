import React, { Component } from "react";
import styled from "styled-components";

const Msg = styled.div`
  display: inline-block;
  //   color: red;
  font-weight: 600;
  font-size: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: 10%;
  left: 50%;
  transform: translate(-100%, -50%);
  position: absolute;
`;

export class Message extends Component {
  constructor() {
    super();
    var today = new Date();

    this.state = {
      message: "morning",
    };

    const hour = today.getHours();

    // if (hour > 0 && hour <= 12) {
    //   this.setState({
    //     message: "morning",
    //   });
    // } else

    if (hour > 12 && hour <= 16) {
      this.setState({
        message: "afternoon",
      });
    } else if (hour > 16 && hour <= 20) {
      this.setState({
        message: "night",
      });
    }
  }

  render() {
    return <Msg> Good {this.state.message} </Msg>;
  }
}
