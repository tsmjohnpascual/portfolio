import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <NavBar sectionId="top-nav" />
      <Profile />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <NavBar sectionId="bot-nav" />
    </>
  );
};

export default App;
