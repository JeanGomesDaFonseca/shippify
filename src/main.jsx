import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WebRouter from "./router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WebRouter />
  </StrictMode>
);
