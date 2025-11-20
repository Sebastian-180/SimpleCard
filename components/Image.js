function Image({ url }) {
  return (
    <img
      src={url}
      alt="Card"
      style={{ width: "200px", borderRadius: "10px" }}
    />
  );
}

export default Image;
