import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import HeroText from "./components/HeroText/HeroText";
import SearchOption from "./components/SearchOption/SearchOption";
import TextSection from "./components/TripSection/Textsection/TextSection";
import BookaTrip from "./components/TripSection/BookaTripSection/BookTripSection";

function App() {
  return (
    <div>
      <div className="hero-image">
        <section>
          <Navbar />
        </section>
        <section className="app-hero-text">
          <HeroText  />
        </section>
        <section className="app-search-option">
          <SearchOption />
        </section>
      </div>
      <div className="book-a-trip-section">
        <section className="app-hero-text">
     
          <TextSection/>
        </section>
        <section className="app-navigation-btn-section">
          <BookaTrip/>
        </section>
      </div>
    </div>
  );
}

export default App;
