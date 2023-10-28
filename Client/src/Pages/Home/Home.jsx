import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Header from "../Components/Header/Header";
import "./Home.css";
import Feature from "../Components/Feature/Feature";
import FeatureHotels from "../Components/FeatureHotels/FeatureHotels";
import MailList from "../Components/EmailList/MailList";
import Footer from "../Components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <Header />
            <div className="HomeContainer">
            <h1 className="HomeTitle">Orase destinatie</h1>
                <Feature />
                <h1 className="HomeTitle">Hoteluri apreciate de clienti</h1>
                <FeatureHotels />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home