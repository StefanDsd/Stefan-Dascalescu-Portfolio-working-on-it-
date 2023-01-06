import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Section2 from "./Components/Section2";
import Collection from "./Components/Collection";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Nav />
      <Section2 />
      <Collection />
      <Contact />
    </div>
  );
}

export default App;
