import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroText from './components/HeroText/HeroText';
import SearchOption from './components/SearchOption/SearchOption';

function App() {
  return (
    <div className="">
      <section>
        <Navbar/>
      </section>
      <section>
        <HeroText/>
      </section>
      <section>
        <SearchOption/>

      </section>

    </div>
  );
}

export default App;
