import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";

import HomePage from "./pages/HomePage";
import "./styles/app.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
);
