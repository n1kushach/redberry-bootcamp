import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PersonInfo } from "./pages/PersonInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person-info" element={<PersonInfo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
