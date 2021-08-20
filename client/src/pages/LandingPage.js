import React, { Component } from "react";

import Card from "../components/Card";
import Header from "../components/Header";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <Card></Card>
        </div>
      </div>
    );
  }
}
