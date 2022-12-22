import NavBar from './components/NavBar/NavBar.jsx';
import './App.css';
import Home from './pages/Home/home';
import Dokters from './pages/voor_patienten/voor_patienten';
import Over from './pages/over/over';
import Profile from './pages/Profile/Profile';
import { Route, Routes } from "react-router-dom";
import Vacatures from './pages/Vacatures/Vacatures';
import Appointment from './pages/Appointment/Appointment';
import AuthLanding from './components/authentication/AuthLanding';
import Vacature from './pages/Vacature/Vacature';
import Sollicitatie from './pages/Sollicitatie/Sollicitatie';

function App() {
  return (
    <>
      <NavBar className="navbar"/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dokters" element={<Dokters />} />
          <Route path="/vacatures" element={<Vacatures />} />
          <Route path="/about" element={<Over />} />
          <Route path="/appointment/:riziv" element={<Appointment/>}/>
          <Route path="/login" element={<AuthLanding />} />
          <Route path="/vacature/:id" element={<Vacature />} />
          <Route path="/vacature/:id/solliciteer" element={<Sollicitatie />}/>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
