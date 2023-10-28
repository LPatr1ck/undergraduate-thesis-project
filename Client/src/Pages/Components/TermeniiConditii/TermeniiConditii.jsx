import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import "./TermeniiConditii.css"
import { Link } from 'react-router-dom';

function TermeniiConditii() {
  return (
    <div>
      <NavigationBar />
      <h1 className="Termeni">Termeni și Condiții</h1>
      <p className="termeni-conditii">
        ㅤㅤVă rugăm să citiți cu atenție următorii termeni și condiții înainte de a utiliza site-ul Book And Go. Acești termeni și condiții guvernează utilizarea dvs. a site-ului și a serviciilor oferite de Book And Go. Prin utilizarea acestui site, sunteți de acord să respectați acești termeni și condiții. Dacă nu sunteți de acord cu acești termeni și condiții, vă rugăm să nu utilizați acest site.
        <br></br><br></br>
        <h4>1. Serviciile oferite:</h4>
        <br></br>
        ㅤa. Book And Go este o platformă online care facilitează rezervarea de camere de hotel la nivel global.
        <br></br><br></br>
        ㅤb. Site-ul oferă informații despre hoteluri, disponibilitate, prețuri și facilități.
        <br></br><br></br>
        ㅤc. Book And Go oferă posibilitatea de a căuta, compara și rezerva camere de hotel la tarife competitive.
        <br></br><br></br>
        <h4>2. Utilizarea site-ului:</h4>
        <br></br>
        ㅤa. Utilizarea site-ului este permisă numai pentru scopuri legale și în conformitate cu acești termeni și condiții.
        <br></br><br></br>
        ㅤb. Nu sunteți autorizat să utilizați acest site în niciun fel care ar putea dauna sau afecta funcționalitatea, securitatea sau performanța acestuia.
        <br></br><br></br>
        ㅤc. Sunteți responsabil de asigurarea că informațiile furnizate în timpul rezervării sunt corecte și complete.
        <br></br><br></br>
        <h4>3. Rezervările:</h4>
        <br></br>
        ㅤa. Rezervările de camere de hotel se fac pe baza disponibilității existente în momentul rezervării.
        <br></br><br></br>
        ㅤb. Book And Go nu își asumă responsabilitatea pentru erori sau discrepanțe în legătură cu disponibilitatea și prețurile hotelurilor.
        <br></br><br></br>
        ㅤc. Orice modificări sau anulări ale rezervărilor trebuie efectuate conform politicilor hotelurilor și termenilor specifici afișați în timpul procesului de rezervare.
        <br></br><br></br>
        <h4>4. Confidențialitatea datelor:</h4>
        <br></br>
        ㅤa. Book And Go respectă confidențialitatea datelor dvs. personale. Vă rugăm să consultați politica noastră de confidențialitate pentru mai multe informații cu privire la colectarea, utilizarea și protecția datelor dvs.
        <br></br><br></br>
        <h4>5. Limitarea responsabilității:</h4>
        <br></br>
        ㅤa. Book And Go nu își asumă nicio responsabilitate pentru daune, pierderi sau răspundere rezultate din utilizarea sau imposibilitatea utilizării site-ului sau a serviciilor oferite.
        <br></br><br></br>
        ㅤb. Book And Go nu își asumă responsabilitatea pentru informațiile incorecte furnizate de hoteluri sau alte părți terțe.
        <br></br><br></br>
        <h4>6. Modificarea termenilor și condițiilor:</h4>
        <br></br>
        ㅤa. Book And Go își rezervă dreptul de a modifica acești termeni și condiții în orice moment, fără notificare prealabilă. Orice modificare va intra în vigoare imediat după publicarea acestora pe site-ul nostru.
        <br></br><br></br>
        ㅤㅤ<i>Vă rugăm să rețineți că acești termeni și condiții pot fi suplimentați de alți termeni și condiții specifice afișate în timpul procesului de rezervare. Utilizarea acestui site implică acceptarea tuturor termenilor și condițiilor menționate mai sus. Pentru orice întrebări sau nelămuriri, vă rugăm să ne contactați prin intermediul informațiilor de <Link to="/Contact">contact</Link> disponibile pe site-ul Book And Go.</i>
      </p>
    </div>
  );
}

export default TermeniiConditii;