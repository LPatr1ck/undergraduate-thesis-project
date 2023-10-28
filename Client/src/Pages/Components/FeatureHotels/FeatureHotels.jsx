import useFetch from "../../../hooks/useFetch";
import "./FeatureHotels.css";

const FeatureHotels = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4") //Limita de afisare a hotelurilor (4).

    return (
        <div className="FeatureHotels">
            {loading ? "Se incarca" :
                <>{data.map(item => (
                    <div className="FeatureHotelItem" key={item._id}>
                        <img src={item.imagini[0]} alt="" className="FeatureHotelImage" />
                        <span className="FPName">{item.nume}</span>
                        <span className="FPOras">{item.oras}</span>
                        <span className="FPPret">Incepe de la {item.cmipret} RON</span>
                        {item.rating && <div className="FPRating">
                            <button>{item.rating}</button>
                            <span>Excelent</span>
                        </div>}
                    </div>
                ))}
                </>}
        </div>
        

    )
}

export default FeatureHotels