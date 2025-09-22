import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
    // strict mode is a tool for highlighting potential problems in an application
    // it activates additional checks and warnings for its descendants
    // bey2oly en fy kaza components mosta5damin zayi ba3dohom
    // <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // {/* </StrictMode> */}
);
