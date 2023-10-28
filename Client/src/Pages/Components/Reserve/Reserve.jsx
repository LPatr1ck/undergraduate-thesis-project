import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import "./Reserve.css";
import useFetch from "../../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
    const [selectedRoom, setSelectedRoom] = useState([]);
    const { data, loading, error } = useFetch(`/hotels/camere/${hotelId}`);
    const { dates } = useContext(SearchContext);

    const mil_per_day = 1000 * 60 * 60 * 24;

    function dayDiff(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / mil_per_day);
        return diffDays;
    }

    const days = dayDiff(dates[0].startDate, dates[0].endDate);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        let dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        return dates;
    }

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (NumarCamera) => {
        const isFound = NumarCamera.unavailableDate.some((date) =>
            alldates.includes(new Date(date).getTime())
        );
        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRoom(
            checked
                ? [...selectedRoom, value]
                : selectedRoom.filter((item) => item !== value)
        );
    };

    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRoom.map((roomId) => {
                    const res = axios.put(`/hotelrooms/availability/${roomId}`, {
                        dates: alldates,
                    });
                    return res.data;
                })
            );
            setOpen(false);
            navigate("/");
        } catch (err) { }
    };

    return (
        <div className="reserve">
            <div className="reserveContainer">
                <FontAwesomeIcon
                    icon={faXmarkCircle}
                    className="reserveClose"
                    onClick={() => setOpen(false)}
                />
                <span>Selecteaza camerele dorite:</span>
                <div className="reserveContent">
                    {data.map((item) => (
                        <div className="reserveItem">
                            <div className="reserveItemInfo">
                                <div className="reserveTitle">{item.titlu}</div>
                                <div className="reserveDesc">{item.descriere}</div>
                                <div className="reserveMax">
                                    Numar maxim persoane: <b>{item.maxPersoane}</b>
                                </div>
                                <div className="reservePrice">
                                    Costul per noapte: {item.pret} RON
                                </div>
                                <div className="reservePrice">
                                    Rezerva camera pentru {days} nopti.
                                </div>
                            </div>
                            <div className="reserveSelectRoom">
                                {item.numarcamere.map((NumarCamera) => (
                                    <div className="camera">
                                        <label>{NumarCamera.numar}</label>
                                        <input
                                            type="checkbox"
                                            value={NumarCamera._id}
                                            onChange={handleSelect}
                                            disabled={!isAvailable(NumarCamera)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleClick} className="reserveButton">
                    Rezerva acum!
                </button>
            </div>
        </div>
    );
};

export default Reserve;
