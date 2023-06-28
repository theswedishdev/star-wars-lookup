import React from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";

import App from "./App";
import "./index.scss";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (resource: string, init: RequestInit) =>
          fetch(resource, init).then((res) => res.json()),
        provider: () => new Map(),
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>,
);
