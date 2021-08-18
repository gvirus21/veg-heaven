import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import data from "../src/data.json";
import { useState } from "react";
function App() {
  const [filteredData, setFilteredData] = useState(data);
  return (
    <div className="App">
      <Navbar />
      <HeroSection
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </div>
  );
}

export default App;
