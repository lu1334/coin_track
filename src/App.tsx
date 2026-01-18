import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Portafolio } from "./pages/Portafolio";
import { NavBar } from "./pages/NavBar";

function App() {
  return (
    <Routes>
      <Route path="home" element={<Home/>} />
      <Route path="/" element={<NavBar/>}>
        <Route path="purchased" element={<Portafolio/>} />
      </Route>
    </Routes>
  );
}

export default App;
