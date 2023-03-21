import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import StateToReducer from "./StateToReducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StateToReducer />
  </StrictMode>
);
