import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";
import { NavigationProvider } from "./context/NavigationContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <NavigationProvider>
        <App />

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2500,
            style: {
              borderRadius: "12px",
              background: "#111827",
              color: "#fff",
              border: "1px solid #374151",
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </NavigationProvider>
    </ThemeProvider>
  </StrictMode>
);