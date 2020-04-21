import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./utilities/apollo";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    rootElement,
  );