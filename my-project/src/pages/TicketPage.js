import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FlighFilter from '../components/FlightFilter'
import RoundTrip from '../components/RoundTrip'

const TicketPage = () => {
  return (
    <div>
        <Navbar/>
        <FlighFilter/>
        <RoundTrip/>
        <Footer/>
    </div>
  )
}

export default TicketPage