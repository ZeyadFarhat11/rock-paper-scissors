import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { AppProvider } from "./context";

const theme = {
  darkText: "hsl(229, 25%, 31%)",
  scoreText: "hsl(229, 64%, 46%)",
  headerBorder: "hsl(217, 16%, 45%)",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>
);
