import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./stores/ReduxStore.js";
import App from "./App";
import { MantineProvider } from "@mantine/core";
// stack overflow

ReactDOM.render(
  
  <MantineProvider>
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
</Provider>
</MantineProvider>,
document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
