import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FlighFilter from '../components/FlightFilter'

const TicketPage = () => {
  return (
    <div>
        <Navbar/>
        <FlighFilter/>
        <Footer/>
    </div>
  )
}

export default TicketPage