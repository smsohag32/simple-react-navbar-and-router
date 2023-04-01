import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
