import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import "./Contact.css"

function Contact() {
  return (
    <div>
      <NavigationBar />
      <h1 className="titlucontact">Contact - Book And Go</h1>
      <p className="contact">


        ㅤㅤDorim să ne asigurăm că experiența dvs. pe platforma noastră de rezervări de hoteluri, Book And Go, este plăcută și fără probleme. Dacă aveți întrebări, nelămuriri sau feedback, vă rugăm să nu ezitați să ne contactați. Echipa noastră de asistență clienți este aici pentru a vă ajuta în orice fel posibil.
        <br></br><br></br>
        <h4>1. Informații de contact:</h4>
        <br></br>
        - Telefon: 072938503912
        <br></br><br></br>
        - E-mail: bookandgo2023@gmail.com
        <br></br><br></br>
        ㅤㅤEchipa Book And Go este aici pentru a vă oferi suport și asistență de calitate. Vă mulțumim că ați ales serviciile noastre de rezervare a hotelurilor și suntem dedicați să vă oferim o experiență plăcută și satisfăcătoare în călătoriile dvs.
      </p>
    </div>
  );
}

export default Contact;