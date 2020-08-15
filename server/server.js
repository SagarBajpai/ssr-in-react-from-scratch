import express from "express";
import ReactDOMServer from "react-dom/server";

import AppComponent from "./../src/App";
import React from "react";
const app = express();

app.get("**", (req, res) => {
  const content = ReactDOMServer.renderToString(<AppComponent />);
  res.send(content);
});

app.listen(4001, () => {
  console.log("Listening to Port 4001");
});
