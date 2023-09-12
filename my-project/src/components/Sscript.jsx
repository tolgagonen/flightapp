import React from 'react'
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { turkeyAirports } from './Datas';
import SearchBar from './SearchBar';



const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export const Sscript1 = () => {
  
  return (
    <div>
      <div className='pb-4'>
    <div className='border border-gray-400 flex px-3 py-3 text-black rounded-xl'>
        <SearchBar placeholder="Kalkış Havaalanı" data={turkeyAirports} />
    </div>
    </div>
    <div className='pb-4'>
    <div className='border border-gray-400 flex px-3 py-3 text-black rounded-xl'>
    <SearchBar placeholder="Varış Havaalanı" data={turkeyAirports} />
   </div>
   </div>
   <div className='pb-4'>
   <div className='border border-gray-400 flex px-3 py-3 text-black rounded-xl'>
   <Datepicker/>
   </div>
   </div>
   <div className='pb-4'>
   <div className='border border-gray-400 flex px-3 py-3 text-black rounded-xl'>
   <Datepicker/>
   </div></div>
   <button class="bg-[#9cb034] hover:bg-[#e4ff5d] text-black font-bold py-2 px-4 border-b-4 border-[#757e43] hover:border-[#dbef78] rounded">
   <a href='/bilet'>Ucuz Uçuş Ara</a>
  </button>
   </div>
  )
}

export const  Sscript2 = () => {
  let firstCity;
  let secondCity;
  return (
    <div>
      <div className='pb-4'>
    <div className='border border-gray-400 flex px-3 py-3 text-black rounded-xl'>
      <SearchBar placeholder="Kalkış Havaalanı" data={turkeyAirports} selectedAirportToGo={firstCity}/>
    </div>
    </div>
    <div className='pb-4'>
    <div className='border border-gray-400 flex px-3 py-3 text-black rounded-xl'>
    <SearchBar placeholder="Varış Havaalanı" data={turkeyAirports} selectedAirportToGo={secondCity}/>
   </div>
   </div>
   <div className='pb-4'>
   <div className='border border-gray-400 flex px-3 py-3 text-black rounded-xl'>
   <Datepicker/>
   </div>
   </div>
   <button class="bg-[#9cb034] hover:bg-[#e4ff5d] text-black font-bold py-2 px-4 border-b-4 border-[#757e43] hover:border-[#dbef78] rounded">
    <a href='/bilet'>Ucuz Uçuş Ara</a>
  </button>
   </div>
  )
}




        
        