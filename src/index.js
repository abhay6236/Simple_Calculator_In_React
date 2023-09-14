import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Calc from "./Calc";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Calc />
  </StrictMode>
);
