import React,{useState} from 'react'
import {FaBars , FaTimes} from 'react-icons/fa'
import buyit from '../pages/TicketPage';
import App from '../App';

const Navbar = () => {
  const [nav,setNav] =  useState(true);
  
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <header>
    <div className='flex justify-between items-center h-24 max-w-[1240-px] mx-auto px-4 text-white'>
        <h1 className={nav ?'w-full text-3xl font-bold text-[#c5df00]' : 'text-[#0030]'}><a href='/'>uygunuç.</a></h1>
        <ul className='hidden md:flex font-bold'>
          <li className='p-4 flex'><a href='/'>Giriş</a></li>
          <li className='p-4'><a href='/bilet'>Bilet</a></li>
          <li className='p-4'><a href='/hakkımızda'>Hakkımızda</a></li>
          <li className='p-4'><a href='/iletisim'>İletişim</a></li>
          <li className='p-4'> </li>
        </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <FaTimes size={20}/> : <FaBars size={20}  />}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[%25] h-full bg-black  border-r-gray-600 bg-[#00030] ease-in-out duration-500' : 'fixed hidden' }>
        <h1 className='w-full text-3xl font-bold text-[#c5df00] mt-8 ml-4'><a href='/'>uygunuç.</a></h1>       
        <ul className='uppercase font-bold p-4 mt-4'>
          <li className='p-4 border-b text-white border-gray-600'><a href='/'>Anasayfa</a></li>
          <li className='p-4 border-b text-white border-gray-600'><a href='/bilet'>Bilet</a></li>
          <li className='p-4 border-b text-white border-gray-600'><a href='/hakkımızda'>Hakkımızda</a></li>
          <li className='p-4 border-b text-white border-gray-600'><a href='/iletisim'>İletişim</a></li>
          <li className='p-4'> </li>
        </ul>
      </div>

    </div>
    </header>
  )
}

export default Navbar