import React, { Component } from "react";
import Buttons from "./Buttons";
import Images from "./Images";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staus: "a",
    };
  }

  frombutton = (anyval) => {
    this.setState(
      {
        staus: anyval
      }
    );
  }

  render() {
    return (
      <div>
        <Buttons handlEvent={this.frombutton} />
        <Images status={this.state.staus} />
      </div>
    );
  }
}

export default App;

