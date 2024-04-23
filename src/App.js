import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Passion from "./components/Passion";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Passion />
      </main>
    </>
  );
}

export default App;
