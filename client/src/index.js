import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>,

  document.getElementById("root")
);
