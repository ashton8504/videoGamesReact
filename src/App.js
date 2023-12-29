import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import SecondPage from "./Components/SecondPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/secondpage" element={<SecondPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
