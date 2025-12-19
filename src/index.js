// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// CSS
import "./styles/globals.css";
import "./styles/form.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
