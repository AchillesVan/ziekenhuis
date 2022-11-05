import "./voor_patienten.css"
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import Select from "react-select"
import { useState } from "react";

const doctors = [
  {
    foto: require("../../images/doctor.png"),
    naam: "John Doe",
    afdeling: "Neurologie",
    locatie: "Amsterdam",
  },
  {
    foto: require("../../images/doctor.png"),
    naam: "Achilles Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("../../images/doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("../../images/doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("../../images/doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("../../images/doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },{
    foto: require("../../images/doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  }
];

const specialiteiten = [
  {value: "cardiologie", label: "Cardiologie"},
  {value: "neurologie", label: "Neurologie"},
  {value: "psychiatrie", label: "Psychiatrie",}
];

const VoorPatienten = () => {

  const [dokters, setDokters] = useState([]);

  let filteredDokters = [];

  const onChange = (option) => {
    filteredDokters = doctors.filter(doctor => doctor.afdeling.toLowerCase() === option.value.toLowerCase());
    if(filteredDokters[0] !== undefined) {
      setDokters(filteredDokters);
    }
    else {
      setDokters([]);
    }
  }

  return (
    <>
      <div className="voor_patienten">
        <h1>Voor patiënten</h1>
        <p>Een afspraak maken? Dan ben je op de juiste plek. Selecteer een afdeling, kies je dokter en maak nu je afspraak!</p>
        <div className="inputs">
          <div className="select">
            <Select options={specialiteiten} onChange={onChange}/>
          </div>
        </div>
        <div className="doctors">
          {dokters.map((doctor) => {
            return (
              <div>
                <DoctorCard className="doctor-card" doctor={doctor} />
              </div>
            )
          })}
        </div>
      </div>  
    </>
  );
};

export default VoorPatienten;