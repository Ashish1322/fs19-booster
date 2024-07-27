import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CallbackRevision from "./component/CallbackRevision.jsx";
import "./index.css";
import MemoRevision from "./component/MemoRevision";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CallbackRevision />
  </React.StrictMode>
);
