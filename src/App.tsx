import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
    <div className="App">
      asdf
    </div>
    </ThemeProvider>
  );
}

export default App;
