import Navbar from '../NavigationBar/NavigationBar';
import useFetch from '../../../hooks/useFetch';
import React, { useState } from 'react';
import "./AllRezervari.css";

const AllRezervari = () => {
  const [filterValue] = useState('price=212');
  const { data, loading, error, reFetch } = useFetch(`/hotelrooms?${filterValue}`);
  const handleClick = () => {
    reFetch();
  };

  const filteredData = data.filter(item => {
    return item.numarcamere.some(NumarCamera => {
      return NumarCamera.unavailableDate.length > 0; 
    });
  });

  return (
    <div>
      <Navbar />
      {filteredData.length === 0 ? (
        <div className="noReservationsMessage">
        Această pagină afișează toate rezervările dvs. in cazul în care ați efectuat o rezervare.</div>
      ) : (
        filteredData.map(item => (
          <div className="allrezervariItem">
            <div className="allrezervariItemInfo">
              <div className="allrezervariTitle">{item.titlu}</div>
              <div className="allrezervariDesc">{item.descriere}</div>
              <div className="allrezervariMax">Număr maxim persoane: <b>{item.maxPersoane}</b></div>
              <div></div>
            </div>
            <div className="allrezervariSelectRoom">
              {item.numarcamere.map(NumarCamera => (
                <div className="allrezervaricamera">
                  <label>{NumarCamera.numar}</label>
                  <div className="unavailableDate">
                    {NumarCamera.unavailableDate.map(rezervat => (
                      <div>data: {rezervat}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllRezervari;
