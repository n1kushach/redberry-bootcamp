import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { useState } from "react";
import { PersonInfo } from "./pages/PersonInfo";
import { PersonExperience } from "./pages/PersonExperience";
import { PersonEducation } from "./pages/PersonEducation";

function App() {

  const [mainData, setMainData] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/info" element={<PersonInfo mainData={mainData} setMainData={setMainData}/>}/>
          <Route path="/experience" element={<PersonExperience mainData={mainData} setMainData={setMainData}/>}/>
          <Route path="/education" element={<PersonEducation/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
