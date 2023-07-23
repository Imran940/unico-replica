import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
