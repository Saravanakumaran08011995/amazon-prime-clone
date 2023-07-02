import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./authContext/AuthContext";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <App />
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);
