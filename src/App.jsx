import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PhoneBar from "./components/PhoneBar/PhoneBar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <div className="">
      <Navbar />
      <PriceList />
      <Dashboard />
      <PhoneBar />
    </div>
  );
}

export default App;
