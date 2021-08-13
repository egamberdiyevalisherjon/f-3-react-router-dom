import React, { Component } from "react";

export default class LifeCycle extends Component {
  componentDidMount() {
    console.log("componentDidMount metodidan CONSOLE!");
  }

  render() {
    console.log("Render metodidan CONSOLE!");
    return <div>Life Cycle</div>;
  }
}
