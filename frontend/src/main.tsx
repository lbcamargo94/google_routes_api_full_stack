import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SmoothScroll } from "./components/smoothScroll/SmoothScroll.tsx";
import App from "./App.tsx";
import "./css/globals.css";

createRoot(
  document.getElementById("root") || document.createElement("div")
).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>
);
