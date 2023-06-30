import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./styles/theme";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <>
    <ThemeProvider theme={themeOptions}>
      <Navbar/>
      <Login/>
    </ThemeProvider>
    </>
  );
}

export default App;
