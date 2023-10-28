import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import "./Confidential.css"
import { Link } from 'react-router-dom';

function Confidential() {
   return (
      <div>
         <NavigationBar />
         <h1 className="titluconf">Politica de Confidențialitate și Cookie-uri</h1>
         <p className="confidentialitate">
            ㅤㅤAceastă politică de confidențialitate și cookie-uri stabilește modul în care Book And Go colectează, utilizează și protejează informațiile personale și utilizează modulele cookie pe site-ul său. Vă rugăm să citiți cu atenție această politică pentru a înțelege modul în care informațiile dvs. personale vor fi tratate atunci când utilizați serviciile noastre.
            <br></br><br></br>
            <h3>I. Confidențialitatea informațiilor personale:</h3>
            <br></br>
            <h4>ㅤ1. Colectarea informațiilor:</h4>
            <br></br>
            ㅤㅤa. Book And Go poate colecta informații personale, cum ar fi numele, adresa de e-mail, numărul de telefon și informațiile de facturare, în momentul în ㅤㅤㅤㅤcare vă înregistrați pe site-ul nostru sau când efectuați o rezervare de hotel.
            <br></br><br></br>
            ㅤㅤb. Informațiile personale colectate sunt utilizate în principal pentru a procesa rezervările dvs., a vă furniza informații despre rezervările efectuate și a vă ㅤㅤㅤㅤoferi asistență în legătură cu serviciile noastre.
            <br></br><br></br>
            <h4>ㅤ2. Utilizarea informațiilor:</h4>
            <br></br>
            ㅤㅤa. Book And Go utilizează informațiile personale pentru a vă oferi serviciile solicitate și pentru a vă îmbunătăți experiența utilizatorului.
            <br></br><br></br>
            ㅤㅤb. Informațiile dvs. personale pot fi utilizate pentru a vă contacta în legătură cu rezervările efectuate, pentru a vă furniza actualizări sau informațiiㅤㅤㅤ ㅤㅤㅤrelevante despre serviciile noastre.
            <br></br><br></br>
            <h4>ㅤ3. Divulgarea informațiilor:</h4>
            <br></br>
            ㅤㅤa. Book And Go nu va divulga informațiile personale către terțe părți, cu excepția cazurilor în care este necesar pentru procesarea rezervărilor sau în ㅤㅤㅤㅤㅤconformitate cu legile și reglementările aplicabile.
            <br></br><br></br>
            <h3>II. Cookie-uri:</h3>
            <br></br>
            <h4>ㅤ4. Utilizarea cookie-urilor:</h4>
            <br></br>
            ㅤㅤa. Book And Go utilizează module cookie pentru a oferi o experiență mai bună de utilizare și pentru a personaliza și îmbunătăți serviciile noastre.
            <br></br><br></br>
            ㅤㅤb. Cookie-urile sunt fișiere mici de text stocate pe dispozitivul dvs. care ajută la recunoașterea și înțelegerea preferințelor și comportamentului dvs. de ㅤㅤㅤㅤutilizator.
            <br></br><br></br>
            ㅤㅤc. Cookie-urile pot fi utilizate pentru a furniza funcționalități specifice, pentru a analiza traficul și pentru a oferi servicii de marketing personalizate.
            <br></br><br></br>
            <h4>ㅤ5. Controlul cookie-urilor:</h4>
            <br></br>
            ㅤㅤa. Puteți controla și gestiona setările cookie-urilor utilizând setările browserului dvs. web. Vă rugăm să rețineți că blocarea sau ștergerea cookie-urilor ㅤㅤㅤㅤpoate afecta funcționalitatea site-ului și serviciilor noastre.
            <br></br><br></br>
            <h3>Modificări ale politicii:</h3>
            <br></br>
            ㅤ<b>6. Book And Go </b> își rezervă dreptul de a modifica această politică de confidențialitate și cookie-uri în orice moment. Orice modificări vor intra în vigoare imediat după publicarea acestora pe site-ul nostru.
            <br></br><br></br>
            ㅤㅤ<i>Vă rugăm să rețineți că utilizarea site-ului Book And Go implică acceptarea politicilor și practicilor noastre în ceea ce privește confidențialitatea și cookie-urile. Pentru orice întrebări sau nelămuriri, vă rugăm să ne contactați prin intermediul informațiilor de <Link to="/Contact">contact</Link> disponibile pe site-ul nostru.</i>
         </p>
      </div>
   );
}

export default Confidential;