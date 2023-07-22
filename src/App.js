import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div
        style={{ background: "black", width: "100%", height: "500px" }}
      ></div>
    </div>
  );
}

export default App;
