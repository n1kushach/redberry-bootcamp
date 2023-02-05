import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { useState } from "react";
import { PersonInfo } from "./pages/PersonInfo";
import { PersonExperience } from "./pages/PersonExperience";
import { PersonEducation } from "./pages/PersonEducation";

function App() {

  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/info" element={<PersonInfo data={data} setData={setData}/>}/>
          <Route path="/experience" element={<PersonExperience data={data} setData={setData}/>}/>
          <Route path="/education" element={<PersonEducation/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
