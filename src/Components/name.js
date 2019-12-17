import React, { Component } from "react";

class ItemName extends Component {
  constructor(props) {
    super(props);
    this.state = { itemName: "" };
  }

  componentDidMount() {
    this.getPage();
  }

  async getPage() {
    fetch("http://collegesafe.herokuapp.com/api/items")
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData[0]["name"]);
        this.setState({ itemName: jsonData[0]["name"] });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.itemName}</h1>
      </div>
    );
  }
}

export default ItemName;
