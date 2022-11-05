import NavBar from './components/NavBar/NavBar';
import './App.css';
import Home from './pages/home';
import Dokters from './pages/voor_patienten/voor_patienten';
import About from './pages/over_ons/over_ons';
import { Route, Routes } from "react-router-dom";
import Vacatures from './pages/vacatures';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dokters" element={<Dokters />} />
          <Route path="/vacatures" element={<Vacatures />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
