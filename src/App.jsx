import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Info } from "./pages/Info";
import { Education } from "./pages/Education";
import { Experience } from "./pages/Experience";
import { useState, useEffect } from "react";

function App() {
  const [mainData, setMainData] = useState();
  const [img, setImg] = useState();
  const apiData = new FormData()
  
    useEffect(() => {
      sessionStorage.setItem("mainData", JSON.stringify(mainData));
    }, [mainData])

  return (
    <div className="App">
      <Router basename="/redberry-bootcamp/">
        <Routes>
          <Route path="/" element={<Home mainData={mainData} setMainData={setMainData} />} />
          <Route path="/info" element={<Info img={img} setImg={setImg} apiData={apiData} mainData={mainData} setMainData={setMainData} />} />
          <Route path="/experience" element={<Experience img={img} setImg={setImg}  apiData={apiData}  mainData={mainData} setMainData={setMainData}/>}/>
          <Route path="/education" element={<Education img={img} setImg={setImg}  apiData={apiData}  mainData={mainData} setMainData={setMainData}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
