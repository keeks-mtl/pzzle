import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Play from "./Components/Play";
import Rules from "./Components/Rules";
import Contact from "./Components/Contact";
import Disclaimers from "./Components/Disclaimers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/play" element={<Play />} />
          <Route path="/disclaimers" element={<Disclaimers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
