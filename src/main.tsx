import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CryptoProvider } from "./context/CryptoContex";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <StrictMode>
    <CryptoProvider>
      <App />
    </CryptoProvider>
  </StrictMode>
  </BrowserRouter>
);
