import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDay, faHotel, faMountainCity, faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import { useContext, useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";
import { AuthContext } from "../../../context/AuthContext";

const Header = ({ type }) => {

  const [Destinatie, setDestinatie] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openModal, setOpenModal] = useState(false);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    copil: 0,
    camera: 1,
  });

  const Navigate = useNavigate();

  const navigateToRegister = () => {
    Navigate('/Register');
  };

  const navigateToAllHotels = () => {
    Navigate('/AllHotels');
  };

  const navigateToAllRezervari = () => {
    if (user) {
      setOpenModal(true);
      Navigate('/AllRezervari');
    } else {
      Navigate("/Login");
    } 
  };

  const navigateToAttractionsPage = () => {
    Navigate('/AttractionsPage');
  };

  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === "p" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const HandleSearch = () => {
    if (Destinatie.trim() !== "") {
      dispatch({ type: "NEW_SEARCH", payload: { Destinatie, dates, options } });
      Navigate("/Hotels", { state: { Destinatie, dates, options } });
    }
  };

  const handleDestinationChange = (e) => {
    setDestinatie(e.target.value);
  };

  return (
    <div className="Header">
      <div className={type === "List" ? "HeadContainer ListMode" : "HeaderContainer"}>
        <div className="HeaderList">
          <div className="HeaderListItem">
            <FontAwesomeIcon icon={faHotel} />
            <button onClick={navigateToAllHotels} className="NavButtonHoteluri">Hoteluri</button>
          </div>
          <div className="HeaderListItem">
            <FontAwesomeIcon icon={faMountainCity} />
            <button onClick={navigateToAttractionsPage} className="NavButtonHoteluri" >Atractii Turistice</button>
          </div>
          <div className="HeaderListItem">
            <FontAwesomeIcon icon={faCalendar} />
            <button className="NavButtonHoteluri" onClick={navigateToAllRezervari} >Rezervari</button>
          </div>
        </div>
        {type !== "List" &&
          <>
            <h1 className="HeaderTitle">Rezerva acum si bucura-te de vacanta dorita, simplu si rapid.</h1>
            <p className="HeaderDescription">
              Promoții, discount-uri și oferte speciale pentru dumneavoastra. Inregistrati-va acum. {!user && <button onClick={navigateToRegister} className="HeaderButtonInreg">Inregistrati-va!</button>}
            </p>
            <div className="HeaderSearch">
              <div className="HeaderSearchItem">
                <FontAwesomeIcon icon={faHotel} className="HeaderIcon" />
                <input
                  type="text"
                  placeholder="Cauta destinatia ..."
                  className="HeaderSearchInput"
                  value={Destinatie}
                  onChange={handleDestinationChange}
                />
              </div>
              <div className="HeaderSearchItem">
                <FontAwesomeIcon icon={faPeopleRoof} className="HeaderIcon" />
                <span onClick={() => setOpenOptions(!openOptions)} className="HeaderSearchText">{`${options.adult} adulti ⊛ ${options.copil} copii ⊛ ${options.camera} camere`}</span>
                {openOptions && <div className="Options">
                  <div className="OptionItem">
                    <span className="OptionText">Adulti</span>
                    <div className="OptionCount">
                      <button disabled={options.adult <= 1} className="OptionCounterButton" onClick={() => handleOption("adult", "n")}>-</button>
                      <span className="OptionCounterNumber">{options.adult}</span>
                      <button className="OptionCounterButton" onClick={() => handleOption("adult", "p")}>+</button>
                    </div>
                  </div>
                  <div className="OptionItem">
                    <span className="OptionText">Copii</span>
                    <div className="OptionCount">
                      <button disabled={options.copil <= 0} className="OptionCounterButton" onClick={() => handleOption("copil", "n")}>-</button>
                      <span className="OptionCounterNumber">{options.copil}</span>
                      <button className="OptionCounterButton" onClick={() => handleOption("copil", "p")}>+</button>
                    </div>
                  </div>
                  <div className="OptionItem">
                    <span className="OptionText">Camere</span>
                    <div className="OptionCount">
                      <button disabled={options.camera <= 1} className="OptionCounterButton" onClick={() => handleOption("camera", "n")}>-</button>
                      <span className="OptionCounterNumber">{options.camera}</span>
                      <button className="OptionCounterButton" onClick={() => handleOption("camera", "p")}>+</button>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="HeaderSearchItem">
                <FontAwesomeIcon icon={faCalendarDay} className="HeaderIcon" />
                <span onClick={() => setOpenDate(!openDate)} className="HeaderSearchText">{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="Date"
                  minDate={new Date()}
                />}
              </div>
              <div className="HeaderSearchItem">
                <button
                  className="HeaderButton"
                  onClick={HandleSearch}
                  disabled={Destinatie.trim() === ""}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;
