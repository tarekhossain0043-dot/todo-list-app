import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../src/index.css";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/todo-list-app">
    <App />
  </BrowserRouter>
);
