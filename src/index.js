import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./css/style.css";
import "./css/satoshi.css";


const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
