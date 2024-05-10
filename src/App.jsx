import "./App.css";
import Home from "./components/Home";
import Market from "./components/Market";

function App() {
  return (
    <div className="h-screen grid grid-cols-2 max-md:grid-cols-1">
      <Market />
      <Home />
    </div>
  );
}

export default App;
