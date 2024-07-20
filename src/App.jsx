import "./App.css";
import "./assets/fonts/IBMPlexSansCondensed-Regular.ttf";

import HeaderFooter from "./components/HeaderFooter/HeaderFooter";
import Introduction from "./components/Introduction/Introduction";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <HeaderFooter />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
      <HeaderFooter />
    </>
  );
}

export default App;
