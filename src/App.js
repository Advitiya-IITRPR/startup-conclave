import './App.css';
import About from './components/About';
import AboutEvents from './components/AboutEvents';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Sponsers from './components/Sponsers';
import Stake from './components/Stake';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
       <Hero/>
       <About/>
       <Cards/>
       <AboutEvents/>
       <Stake/>
       <Sponsers/>
       <Team/>
    </div>
  );
}

export default App;
