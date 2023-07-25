import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
