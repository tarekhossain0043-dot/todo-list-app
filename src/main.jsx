import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../src/index.css";

import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/app/Store.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/todo-list-app">
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Provider>
);
