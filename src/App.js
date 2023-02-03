import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro></Intro>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
