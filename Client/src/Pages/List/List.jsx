import Navbar from '../Components/NavigationBar/NavigationBar';
import Header from '../Components/Header/Header';
import './List.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../Components/SearchItem/SearchItem';
import useFetch from '../../hooks/useFetch';

const List = () => {
  const location = useLocation()
  const [Destinatie, setDestinatie] = useState(location.state.Destinatie)
  const [dates, setDates] = useState(location.state.dates)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  const { data, loading, error, reFetch } = useFetch(`/hotels?oras=${Destinatie}&min=${min || 0}&max=${max || 999}`)

  const handleClick = () => {
    reFetch()
  }

  return (
    <div>
      <Navbar />
      <Header type="List" />
      <div className="ListContainer">
        <div className="ListWrap">
          <div className='ListSearch'>
            <h1 className="LSTitle">Search</h1>
            <div className="ListItem">
              <label className='LSOptionText'>Orasul destinatie : </label>
              <input placeholder={Destinatie} type="text" />
            </div>
            <div className="ListItem">
              <label className='LSOptionText'>Check-in & Check-out : </label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDate && (<DateRange onChange={item => setDates([item.selection])} minDate={new Date()} ranges={dates} />)}
            </div>
            <div className="ListItem">
              <label className='LSOptionText' >Filtre : </label>
              <div className="LSOptions">
                <div className="LSOptionItem">
                  <span className='LSOptionText'>Pret minim <small>pe noapte</small></span>
                  <input type="number" onChange={e => setMin(e.target.value)} className="LSOptionInput" />
                </div>
                <div className="LSOptionItem">
                  <span className='LSOptionText'>Pret maxim <small>pe noapte</small></span>
                  <input type="number" onChange={e => setMax(e.target.value)} className="LSOptionInput" />
                </div>
                <div className="LSOptionItem">
                  <span className='LSOptionText' >Adulti</span>
                  <input type="number" min={1} className="LSOptionInput" placeholder={options.adult} />
                </div>
                <div className="LSOptionItem">
                  <span className='LSOptionText' >Copii</span>
                  <input type="number" min={0} className="LSOptionInput" placeholder={options.copil} />
                </div>
                <div className="LSOptionItem">
                  <span className='LSOptionText' >Camere</span>
                  <input type="number" min={1} className="LSOptionInput" placeholder={options.camera} />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="ListResult">
            {loading ? "Se incarca" : <>
              {data.map(item => (
                <SearchItem item={item} key={item._id} />
              ))}
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List