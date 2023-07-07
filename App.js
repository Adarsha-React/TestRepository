import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement(
  "h1",
  { id: "heading" },
  "GitHub Testing Functions"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
