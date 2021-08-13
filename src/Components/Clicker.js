import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { son: 1 };
  }

  render() {
    const { son } = this.state;

    const oshirish = () => {
      this.setState({ son: son + 1 });
    };

    return (
      <div>
        <h2>{son}</h2>
        <button onClick={oshirish}>Oshirish</button>
      </div>
    );
  }
}

export default Clicker;
