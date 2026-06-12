import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyles } from "./components/styles/GlobalStyles.styled";
import { useThemes } from "./hooks/useThemes";
import Footer from "./components/Footer";

function App() {
  const { theme, toggleTheme } = useThemes();

  return (
    <>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
