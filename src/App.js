import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Passion from "./components/Passion";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Passion />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
