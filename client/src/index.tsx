import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      "html, body": {
        color: "white",
        margin: 0,
        height: "100%",
        webkitfontsmoothing: "antialiased",
        mozOsxFontSmoothing: "grayscale",
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Source Sans Pro",
          "sans-serif",
        ],
        background: "linear-gradient(160deg, #488582 60%, #292929 60.1%);",
      },
    }),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
