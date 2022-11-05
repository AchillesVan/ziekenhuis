import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
  if(doctor !== null && doctor !== undefined) {
    return (
      <div className="doctor-card">
        <img src={doctor.foto} alt={doctor.naam} />
        <div className="doctor-info">
          <h3> Dr. {doctor.naam}</h3>
          <p>{doctor.afdeling}</p>
          <p>{doctor.locatie}</p>
        </div>
        <div>
          <button className="btn">Maak afspraak</button>
        </div>
      </div>
    );
  }
  else {
    return (
      <>
      </>
    )
  };
};

export default DoctorCard;