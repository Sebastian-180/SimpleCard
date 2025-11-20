import React from "react";
import SimpleCard from "./SimpleCard";
import "./App.css";
import { render } from "@testing-library/react";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#f9f9f9",
        height: "100vh",
        paddingTop: "50px",
      }}
    >
      <SimpleCard
        titleText="Beautiful Landscape"
        descText="This stunning landscape shows the beauty of nature — calm skies, rolling hills, and endless serenity."
        imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />
    </div>
  );
}

export default App;
test("renders without crashing", () => {
  render(<App />);
});
