import About from "./About";
import "./App.css";
import Competence from "./Competence";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Formation from "./Formation";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Formation />
       <Project />
       <Competence />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
