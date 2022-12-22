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
  const [datum, setDatum] = useState(new Date());
  const [tijdsslot, setTijdsslot] = useState("");
  const [tijdssloten, setTijdssloten] = useState([]);

  const agendaslotsApi = useAgendaslots();
  const gebruikerApi = useGebruiker();
  const navigate = useNavigate();

  const riziv = useParams().riziv;
  const { user } = useAuth0();

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

  useEffect(() => {
    fetchTijdSloten();
  }, [fetchTijdSloten]);

  const onDatumChange = (datum) => {
    setDatum(datum);
    fetchTijdSloten();
  };

  const onTijdslotChange = (tijdsslot) => {
    setTijdsslot(tijdsslot);
  };

  const onSubmit = async () => {
    try {
      const gebruiker = await gebruikerApi.getByAuth0(user.sub);
      if (Object.keys(gebruiker).length !== 0) {
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
          start_tijd: startTijd,
          eind_tijd: eindTijd,
        };
        const response = await agendaslotsApi.createAgendaslot(agendaSlot);
        if (response.status === 201) {
          alert("Afspraak gemaakt!");
          navigate("/dokters");
        } else {
          alert("Afspraak maken mislukt, probeer opnieuw!");
        }
      } else {
        alert("Gelieve uw gegevens in te vullen alvorens een afspraak te maken!");
        navigate("/profile");
      }
    } catch (error) {}
    /*
    
    
    
    */
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
