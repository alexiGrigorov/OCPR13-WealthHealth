import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";

import EmployeePage from "./pages/EmployeeListPage";
import "./styles/app.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <EmployeePage />
  </Provider>,
);
