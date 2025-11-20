import React from "react";

function Image({ url }) {
  return (
    <img
      src={url}
      alt="Card"
      style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
    />
  );
}

export default Image;
