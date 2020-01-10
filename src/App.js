import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

class App extends Component {
  state = {
    isOpen: false,
    classes: "menu__toggler",
    addClass: "menu"
  };

  isOpenClick = () => {
    this.setState(xd => {
      return {
        isOpen: !xd.isOpen,
        classes: this.state.isOpen ? "menu__toggler" : "menu__toggler active",
        addClass: this.state.isOpen ? "menu" : "menu active"
      };
    });
  };

  render() {
    return (
      <div>
        <Menu addClass={this.state.addClass} />
        <Navbar Class={this.state.classes} open={this.isOpenClick} />
      </div>
    );
  }
}

export default App;
