import Navbar from './components/navbar/navbar';
import './App.css';
import Home from './pages/home';
import Dokters from './pages/dokters';
import About from './pages/about';
import { Route, Routes } from "react-router-dom";
import Vacatures from './pages/vacatures';

function App() {
  return (
    <>
      <Navbar />
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
