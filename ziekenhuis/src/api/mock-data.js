const tijdsSloten = [
  { value: '09:00:00', label: '09:00:00' },
  { value: '09:30:00', label: '09:30:00' },
  { value: '10:00:00', label: '10:00:00' },
  { value: '10:30:00', label: '10:30:00' },
  { value: '11:00:00', label: '11:00:00' },
  { value: '11:30:00', label: '11:30:00' },
  { value: '12:00:00', label: '12:00:00' },
  { value: '12:30:00', label: '12:30:00' },
  { value: '13:00:00', label: '13:00:00' },
  { value: '13:30:00', label: '13:30:00' },
  { value: '14:00:00', label: '14:00:00' },
  { value: '14:30:00', label: '14:30:00' },
  { value: '15:00:00', label: '15:00:00' },
  { value: '15:30:00', label: '15:30:00' },
  { value: '16:00:00', label: '16:00:00' },
  { value: '16:30:00', label: '16:30:00' },
  { value: '17:00:00', label: '17:00:00' },
]

const doctors = [
  {
    foto: require("./doctor.png"),
    naam: "Kristof François",
    afdeling: "Neurologie",
    locatie: "Amsterdam",
    riziv: "17696758"
  },
  {
    foto: require("./doctor.png"),
    naam: "Achilles Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("./doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("./doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("./doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("./doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },{
    foto: require("./doctor.png"),
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

const vacatures = [
  {
    id: 1,
    titel: "Vacature 1",
    omschrijving: "Omschrijving 1",
    profiel: "Profiel 1",
    aanbod: "Aanbod 1",
    type_job: "Type job 1",
    type_contract: "Type contract 1",
    werkregime: "Werkregime 1"
  },
  {
    id: 2,
    titel: "Vacature 2",
    omschrijving: "Omschrijving 2",
    profiel: "Profiel 2",
    aanbod: "Aanbod 2",
    type_job: "Type job 2",
    type_contract: "Type contract 2",
    werkregime: "Werkregime 2"
  },
]

export { tijdsSloten, doctors, specialiteiten, vacatures };