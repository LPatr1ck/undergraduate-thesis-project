import './Hotel.css';
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Header from "../Components/Header/Header";
import MailList from "../Components/EmailList/MailList";
import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { faCircleLeft, faCircleRight, faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import useFetch from "../../hooks/useFetch.js";
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../Components/Reserve/Reserve';

const Hotel = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [SliderNumber, setSliderNumber] = useState(0);
  const [Open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`)

  const { dates, options } = useContext(SearchContext)

  const { user } = useContext(AuthContext)

  const navigate = useNavigate()

  const mil_per_day = 1000 * 60 * 60 * 24
  function dayDiff(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(timeDiff / mil_per_day)
    return diffDays
  }

  const days = dayDiff(dates[0].startDate, dates[0].endDate)

  const handleOpen = (i) => {
    setSliderNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber

    if (direction === "s") {
      newSlideNumber = SliderNumber === 0 ? 5 : SliderNumber - 1
    } else {
      newSlideNumber = SliderNumber === 5 ? 0 : SliderNumber + 1
    }

    setSliderNumber(newSlideNumber)
  }

  const handleClick = () => {
    if (user) {
      setOpenModal(true)
    } else {
      navigate("/Login")
    }
  }

  return (
    <div>
      <NavigationBar />
      <Header type='List' />
      {loading ? ("Se incarca") : (
        <div className="HotelContainer">
          {Open && <div className="Slider">
            <FontAwesomeIcon icon={faXmarkCircle} className="Close" onClick={() => setOpen(false)} />
            <FontAwesomeIcon icon={faCircleLeft} className="Arrow" onClick={() => handleMove("s")} />
            <div className="SliderWrapp">
              <img src={data.imagini[SliderNumber]} alt="" className="SliderImage" />
            </div>
            <FontAwesomeIcon icon={faCircleRight} className="Arrow" onClick={() => handleMove("d")} />
          </div>}
          <div className="HotelWrapp">
            <button onClick={handleClick} className="BookNow">Rezerva acum</button>
            <h1 className="HotelTitle">{data.nume}</h1>
            <div className="HotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.adresa}</span>
            </div>
            <span className="HotelDistance">Distanta buna - {data.distanta}m de centru</span>
            <span className="HotelPrice">Rezerva un sejur de peste {data.cmipret} RON la aceasta proprietate si obtine un discount la urmatorul sejur.</span>
            <div className="HotelImages">
              {data.imagini?.map((imagini, i) => (
                <div className='HotelImageWrapp'>
                  <img onClick={() => handleOpen(i)} src={imagini} alt="" className="HotelImage" />
                </div>
              ))}
            </div>
            <div className="HotelDetail">
              <div className="HotelDetailText">
                <h1 className='HotelTitle'>{data.titlu}</h1>
                <p className="HotelDesc">
                  {data.descriere}
                </p>
              </div>
              <div className="HotelDetailPrice">
                <h1>Perfect pentru {days} nopti!</h1>
                <span>
                  Localizat aproape de centrul orasului, acest hotel are un scor al locatiei de 4.9!
                </span>
                <h2>
                  <b>{days * data.cmipret * options.camera} RON</b> ({days} nopti)
                </h2>
                <button onClick={handleClick}>Rezerva acum!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>)}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  )
}


export default Hotel