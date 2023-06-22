import React from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";

import "./index.scss";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (resource: string, init: RequestInit) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    ></SWRConfig>
  </React.StrictMode>,
);
