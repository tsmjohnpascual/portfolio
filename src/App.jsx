import "./App.css";
import "./assets/fonts/IBMPlexSansCondensed-Regular.ttf";

import NavBar from "./components/NavBar/NavBar";
import Introduction from "./components/Introduction/Introduction";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Introduction />
      <Skills />
    </>
  );
}

export default App;
