import './App.css';
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"
import Experience from "./components/experience/experience"
import Contact from "./components/contact/contact"

function App() {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Portfolio />
     <Services />
     <Experience />
     <Contact />
    </>
  );
}

export default App;
