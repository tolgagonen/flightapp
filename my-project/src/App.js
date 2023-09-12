import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FlightBooking from './components/FlightBooking';

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <FlightBooking/>
     <Cards/>
     <Footer/>
    </>
  );
}

export default App;
