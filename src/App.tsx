import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyles } from "./components/styles/GlobalStyles.styled";
import { useThemes } from "./hooks/useThemes";
import { darkTheme, lightTheme } from "./utils/themes";
import Footer from "./components/Footer";

function App() {
  const [theme, toggleTheme] = useThemes();

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
