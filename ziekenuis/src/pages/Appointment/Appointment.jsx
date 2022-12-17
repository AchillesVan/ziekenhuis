import { Flex, Heading, Stack, Text, Button } from "@chakra-ui/react";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import DatePicker from "react-date-picker";
import { tijdsSloten } from "../../api/mock-data";
import useAgendaslots from "../../api/agendaslots";
import useGebruiker from "../../api/gebruiker";
import { useAuth0 } from "@auth0/auth0-react";

const Appointment = () => {
  const { user } = useAuth0();
  const [userObj, setUserObj] = useState({});
  const [datum, setDatum] = useState(new Date());
  const [tijdsslot, setTijdsslot] = useState("");
  const [tijdssloten, setTijdssloten] = useState([]);

  const gebruikerApi = useGebruiker();
  const agendaslotsApi = useAgendaslots();
  const navigate = useNavigate();

  const riziv = useParams().riziv;

  function addMinutes(time, minsToAdd) {
    function D(J) {
      return (J < 10 ? "0" : "") + J;
    }
    var piece = time.split(":");
    var mins = piece[0] * 60 + +piece[1] + +minsToAdd;

    return D(((mins % (24 * 60)) / 60) | 0) + ":" + D(mins % 60) + ":00";
  }

  const fetchTijdSloten = useCallback(async () => {
    try {
      const date =
        datum.getFullYear().toString() +
        "-" +
        ("0" + (datum.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + datum.getDate()).slice(-2);
      const dataObj = await agendaslotsApi.getAllByDateAndRiziv(date, riziv);
      if (dataObj.data) {
        const startTijden = dataObj.data.map((tijdslot) => {
          return tijdslot.start_tijd.slice(11, 19);
        });
        setTijdssloten(
          tijdsSloten.filter(
            (tijdslot) => !startTijden.includes(tijdslot.value)
          )
        );
      } else {
        setTijdssloten(tijdsSloten);
      }
    } catch (error) {
      console.error(error);
    }
  }, [datum, riziv]);

  const fetchUserByAuth0Id = useCallback(async (auth0Id) => {
    try {
      const dataObj = await gebruikerApi.getByAuth0(auth0Id);
      if (dataObj) {
        setUserObj(dataObj);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchTijdSloten();
    fetchUserByAuth0Id(user.sub);
  }, [fetchTijdSloten, fetchUserByAuth0Id, user.sub]);

  const onDatumChange = (datum) => {
    setDatum(datum);
    fetchTijdSloten();
  };

  const onTijdslotChange = (tijdsslot) => {
    setTijdsslot(tijdsslot);
  };

  const onSubmit = async () => {
    console.log(userObj);
    const date =
      datum.getFullYear().toString() +
      "-" +
      ("0" + (datum.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + datum.getDate()).slice(-2);
    const startTijd = date + " " + addMinutes(tijdsslot.value, 60);
    const eindTijd = date + " " + addMinutes(tijdsslot.value, 90);
    const agendaSlot = {
      riziv_nummer: riziv,
      rijksregisternummer: userObj.rijksregisternummer,
      start_tijd: startTijd,
      eind_tijd: eindTijd,
    };
    console.log(agendaSlot);
    const response = await agendaslotsApi.createAgendaslot(agendaSlot);
    if (response.status === 201) {
      alert("Afspraak gemaakt!");
      navigate("/dokters");
    } else {
      alert("Afspraak maken mislukt, probeer opnieuw!");
    }
  };

  return (
    <>
      <div className="appointment">
        <Flex justify="center">
          <Stack>
            <Heading size="lg" className="header">
              Maak een afspraak
            </Heading>
            <Text>Selecteer een datum</Text>
            <DatePicker onChange={onDatumChange} value={datum} />
            {datum == null ? (
              ""
            ) : (
              <>
                <Text>Selecteer een tijdsslot</Text>
                <Select options={tijdssloten} onChange={onTijdslotChange} />
              </>
            )}
            <Button onClick={onSubmit}>Reserveer</Button>
          </Stack>
        </Flex>
      </div>
    </>
  );
};

export default Appointment;
