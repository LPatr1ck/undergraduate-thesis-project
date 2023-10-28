import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import "./Despre.css"
import { Link } from 'react-router-dom';

function Despre() {
   return (
      <div>
         <NavigationBar />
         <h1 className="titludespre">Despre - Book And Go</h1>
         <p className="despre">
            ㅤㅤBine ați venit la Book And Go, platforma online dedicată rezervărilor de hoteluri! Suntem dedicați să vă oferim o experiență simplă, convenabilă și sigură atunci când căutați și rezervați cazarea perfectă pentru călătoriile dvs.
            <br></br><br></br>
            <h4>1. Misiunea noastră:</h4>
            <br></br>
            ㅤㅤLa Book And Go, misiunea noastră este de a vă facilita călătoriile, oferindu-vă acces rapid și ușor la o gamă largă de hoteluri din întreaga lume. Ne străduim să vă oferim opțiuni variate și competitive, astfel încât să puteți găsi și rezerva locația perfectă pentru fiecare călătorie.
            <br></br><br></br>
            <h4>2. Cum funcționează:</h4>
            <br></br>
            ㅤㅤPrin intermediul platformei noastre intuitive, puteți căuta și compara diverse opțiuni de cazare în funcție de destinația dvs., perioada șederii și preferințele dvs. Puteți explora informații detaliate despre hoteluri, facilități și fotografii pentru a vă ajuta să luați cea mai bună decizie. Apoi, puteți rezerva rapid și sigur camera dorită direct prin intermediul site-ului nostru.
            <br></br><br></br>
            <h4>3. De ce să alegeți Book And Go:</h4>
            <br></br>
            ㅤㅤa. O gamă largă de hoteluri: Colaborăm cu o rețea extinsă de hoteluri, de la hoteluri de lux la pensiuni confortabile, pentru a vă oferi opțiuni diverse șiㅤㅤㅤㅤ adecvate bugetului și preferințelor dvs.
            <br></br><br></br>
            ㅤㅤb. Rezervare simplă: Interfața noastră ușor de utilizat vă permite să găsiți și să rezervați rapid camera dorită, în doar câteva clicuri.
            <br></br><br></br>
            ㅤㅤc. Prețuri competitive: Vă oferim tarife competitive și oferte speciale pentru a vă ajuta să economisiți în timpul călătoriilor dvs.
            <br></br><br></br>
            ㅤㅤd. Recenzii și evaluări: Puteți citi recenzii și evaluări de la alți călători pentru a obține o perspectivă mai clară asupra experiențelor anterioare aleㅤㅤㅤㅤ ㅤㅤㅤoaspeților.
            <br></br><br></br>
            ㅤㅤe. Asistență clienți: Echipa noastră dedicată de asistență clienți este disponibilă pentru a vă ajuta și a răspunde la întrebările dvs. în legătură cu rezervările ㅤㅤㅤși serviciile noastre.
            <br></br><br></br>
            <h4>4. Securitate și confidențialitate:</h4>
            <br></br>
            ㅤㅤVă asigurăm că securitatea și confidențialitatea datelor dvs. personale sunt o prioritate pentru noi. Utilizăm măsuri de securitate adecvate pentru a proteja informațiile dvs. și ne asigurăm că acestea sunt utilizate numai în conformitate cu politica noastră de confidențialitate.
            <br></br><br></br>
            <h4>5. Contactați-ne:</h4>
            <br></br>
            ㅤㅤDacă aveți întrebări, sugestii sau feedback, echipa noastră de asisten

            ță clienți este aici pentru a vă ajuta. Puteți găsi informațiile de <Link to="/Contact">contact</Link> pe site-ul nostru, iar noi vă vom răspunde cât mai curând posibil.
            <br></br><br></br><br></br>
            ㅤㅤ<i>Vă mulțumim că ați ales Book And Go pentru rezervările dvs. de hoteluri! Ne angajăm să vă oferim o experiență plăcută și fără griji în călătoriile dvs. și să vă ajutăm să găsiți cele mai bune oferte de cazare.</i>
         </p>
      </div>
   );
}

export default Despre;