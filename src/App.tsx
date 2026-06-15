import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyles } from "./components/styles/GlobalStyles.styled";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
