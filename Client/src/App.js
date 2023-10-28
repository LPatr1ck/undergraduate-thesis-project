import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotel/Hotel";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AllHotels from "./Pages/Components/AllHotels/AllHotels";
import AttractionsPage from "./Pages/Components/AtractiiTuristice/AtractiiTuristice";
import AllRezervari from "./Pages/Components/AllRezervari/AllRezervari";
import TermeniiConditii from "./Pages/Components/TermeniiConditii/TermeniiConditii";
import Confidential from "./Pages/Components/Confidentialitate/Confidential";
import Despre from "./Pages/Components/Despre/Despre";
import Contact from "./Pages/Components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hotels" element={<List />} />
        <Route path="/Hotels/:id" element={<Hotel />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AllHotels" element={<AllHotels />} />
        <Route path="/AllRezervari" element={<AllRezervari />} />
        <Route path="/AttractionsPage" element={<AttractionsPage />} />
        <Route path="/TermeniiSiConditii" element={<TermeniiConditii />} />
        <Route path="/Confidentialitate" element={<Confidential />} />
        <Route path="/DespreBook&Go" element={<Despre />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
