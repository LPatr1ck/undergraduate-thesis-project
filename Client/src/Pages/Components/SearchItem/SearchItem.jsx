import './SearchItem.css';
import { Link, useLocation } from "react-router-dom";

const SearchItem = ({ item }) => {
    const location = useLocation();

    // Verificăm dacă adresa URL curentă conține "/hotels"
    const isOnHotelsPage = location.pathname.includes("/Hotels");

    return (
        <div className='SearchItem'>
            <img src={item.imagini[0]} className='SIImage' />
            <div className="SIDescription">
                <h1 className="SITitle">{item.nume}</h1>
                <span className='SIDistance'>{item.distanta}m de centru</span>
                <span className='SISubtitle'>Camere Single, Duble si Apartamente*</span>
                <span className='SIFeature'>{item.descriere}</span>
                <span className="SICancel">Anulare gratuita</span>
                <span className="SICancelSubtitle">Oferta de ultima ora, rezerva acum camera dorita!</span>
            </div>
            <div className="SIDetail">
                {item.rating && <div className="SIRating">
                    <span>Excelent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="SIDetailText">
                    <span className="SIPrice">{item.cmipret} RON</span>
                    <span className="SITVA"> Include TVA</span>
                    {isOnHotelsPage && (
                        <Link to={`/hotels/${item._id}`}>
                            <button className='SIDispo'>Vezi disponibilitate</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchItem;
