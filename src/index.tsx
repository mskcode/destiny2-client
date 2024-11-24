import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";

import React from "react";
import { App } from "./App";

import { OAuthCallback } from "./OAuthCallback";
import "./style.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="oauth" element={<OAuthCallback />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
