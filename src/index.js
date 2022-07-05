import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
// import { FronteggProvider } from "@frontegg/react";
import {BrowserRouter} from "react-router-dom";
// const contextOptions = {
//   baseUrl: "https://app-c1prbbgkp374.frontegg.com",

//   clientId: "78e62b17-5059-4cfb-88e7-b7f632bdaf10",
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </FronteggProvider>
);
