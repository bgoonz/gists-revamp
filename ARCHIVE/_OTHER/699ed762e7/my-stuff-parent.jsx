import React, { Component, Fragment } from "react";

export default class MyStuffParent extends Component {
  constructor() {
    super();
    this.state = {
      stuff: 42
    };
  }
  
  render() {
    return (
      <Fragment
        stuff={this.state.stuff}                                   // <------ HERE
        changeStuff={v => { this.setState({ stuff: v }); }}        // <------ HERE
      >
        {this.props.children}
      </Fragment>