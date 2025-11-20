import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.5" }}>
        {this.props.text}
      </p>
    );
  }
}

export default Description;
