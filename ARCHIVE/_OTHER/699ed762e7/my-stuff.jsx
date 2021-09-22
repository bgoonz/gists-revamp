import React, { Component, Fragment } from "react";

export default class MyStuff extends Component {
  constructor(props) {
    super(props);
    this.stuff = props.stuff;
    this.changeStuff = props.changeStuff;
  }
  
  render() {
    return ( .. );
  }
}