import "./App.css";
import Animation from "./components/Animation/Animation";
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
      <div className=" mx-auto">
        <Animation></Animation>
      </div>
    </div>
  );
}

export default App;
