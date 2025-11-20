import React, { Components } from "react";
import Title from "./components/Title";
import Description from "./components/Description";
import Image from "./components/Image";
class SimpleCard extends Components {
  render() {
    const { titleText, descText, imageUrl } = this.props;
    return (
      <div
        style={{
          width: "300px",
          margin: "50px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image url={imageUrl} />
        <Title text={titleText} />
        <Description text={descText} />
      </div>
    );
  }
}
export default SimpleCard;
