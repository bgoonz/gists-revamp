import React, { Component } from "react";
import MyStuffParent from "./my-stuff-parent";
import MyStuff from "./my-stuff";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showMyStuff: true
    }
  }
  
  render() {
    return (
      <MyStuffParent>
        {this.state.showMyStuff && (
          <MyStuff
            stuff={ ** what do I put here? ** }    // <------ HERE
            changeStuff={ ** ditto? ** }           // <------ HERE
          />
        )}
      </MyStuffParent>
    );
  }
}