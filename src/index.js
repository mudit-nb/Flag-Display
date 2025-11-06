import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CountriesFlag from "./CountriesFlag";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CountriesFlag />
  </StrictMode>
);
