import { useState } from 'react';
import "./AtractiiTuristice.css";
import NavigationBar from '../NavigationBar/NavigationBar';

const attractionsData = [
  {
    name: 'Castelul Bran',
    location: 'Bran, România',
    description: 'Este un monument istoric și arhitectonic situat în Pasul Bran-Rucăr, la 30 de kilometri de Brașov.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bran_castle_%2847626731362%29.jpg/330px-Bran_castle_%2847626731362%29.jpg',
  },
  {
    name: 'Castelul Peles',
    location: 'Sinaia, România',
    description: 'Construită ca reședință de vară a regilor României, clădirea se află, în prezent, în proprietatea Familiei Regale a României și adăpostește Muzeul Național Peleș.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Castelul_Peles%2C_Sinaia_-_Vedere_panoramica.jpg/330px-Castelul_Peles%2C_Sinaia_-_Vedere_panoramica.jpg',
  },
  {
    name: 'Castelul Corvinilor',
    location: 'Hunedoara, România',
    description: 'Cetate medievală a Hunedoarei, unul din cele mai importante monumente de arhitectură gotică din România.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Castelul_Corvinilor_HD.jpg/330px-Castelul_Corvinilor_HD.jpg',
  },
  {
    name: 'Cascada Bigăr',
    location: 'Județul Caraș-Severin, România',
    description: 'Izvorul Bigăr este o arie protejată de interes național, situată în județul Caraș-Severin, pe teritoriul administrativ al comunei Bozovici',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Izvorul_Big%C4%83r.JPG/426px-Izvorul_Big%C4%83r.JPG',
  },
]

const AttractionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredAttractions = attractionsData.filter((attraction) =>
    attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <NavigationBar />
      <div className="attractions-page">
        <h2>Atractii turistice din Romania</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Cauta atractiile dorite..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="attractions-list">
          {filteredAttractions.map((attraction) => (
            <div key={attraction.name} className="attraction-card">
              <img src={attraction.image} alt={attraction.name} />
              <h2>{attraction.name}</h2>
              <p>{attraction.location}</p>
              <p>{attraction.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default AttractionsPage;
