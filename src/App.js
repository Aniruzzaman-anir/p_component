import './App.scss';
import Navbar from './components/Navbar/Navbar';
import HeroText from './components/HeroText/HeroText';
import SearchOption from './components/SearchOption/SearchOption';


function App() {
  return (
    <div className="hero-image">
      <section>
        <Navbar/>
      </section>
      <section className='app-hero-text'>
        
        <HeroText/>
      </section>
      <section className='app-search-option'>
        <SearchOption/>

      </section>

    </div>
  );
}

export default App;
