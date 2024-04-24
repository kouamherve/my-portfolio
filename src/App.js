import About from "./components/About";
import Experience from "./components/Experience";
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
      </main>
    </>
  );
}

export default App;
