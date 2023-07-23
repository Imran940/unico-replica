import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Services />
    </div>
  );
}

export default App;
