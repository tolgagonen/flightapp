import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { turkeyAirports } from "./Datas";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}


export const Sscript1 = () => {
  const [selectedCity1, setSelectedCity1] = useState(null);
  const handleSelectedCity1 = (city) => {
    setSelectedCity1(city);
  };
  const [selectedCity2, setSelectedCity2] = useState(null);
  const handleSelectedCity2 = (city) => {
    setSelectedCity2(city);
  };
  const [selectedDate1, setSelectedDate1] = useState(new Date());

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const [selectedDate2, setSelectedDate2] = useState(new Date());

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  let cityhelp1 = "";
  let cityhelp2 = "";
  let dateHelp1 = formatDate(selectedDate1);
  let dateHelp2 = formatDate(selectedDate2);

  return (
    <div>
      <div className="pb-4">
        <div className="border border-gray-400 flex px-3 py-3 text-black rounded-xl">
          <SearchBar
            placeholder="Kalkış Havaalanı"
            data={turkeyAirports}
            selectedAirportToGo={handleSelectedCity1}
          />
          <h1 className="text-white">{(cityhelp1 = selectedCity1)}</h1>
          <h1 className="text-white">{cityhelp1}</h1>
        </div>
      </div>
      <div className="pb-4">
        <div className="border border-gray-400 flex px-3 py-3 text-black rounded-xl">
          <SearchBar
            placeholder="Varış Havaalanı"
            data={turkeyAirports}
            selectedAirportToGo={handleSelectedCity2}
          />
          <h1 className="text-white">{(cityhelp2 = selectedCity2)}</h1>
          <h1 className="text-white">{cityhelp2}</h1>
        </div>
      </div>
      <div className="pb-4">
        <div className="border border-gray-400 flex px-3 py-3 text-black rounded-xl">
          <DatePicker selected={selectedDate1} onChange={handleDateChange1} />
          <h1 className="text-white">{dateHelp1}</h1>
        </div>
      </div>
      <div className="pb-4">
        <div className="border border-gray-400 flex px-3 py-3 text-black rounded-xl">
          <DatePicker  selected={selectedDate2} onChange={handleDateChange2} />
          <h1 className="text-white">{dateHelp2}</h1>
        </div>
      </div>
      <button className="bg-[#9cb034] hover:bg-[#e4ff5d] text-black font-bold py-2 px-4 border-b-4 border-[#757e43] hover:border-[#dbef78] rounded">
        <Link
          to={`/bilet?cityGo=${cityhelp1}&cityTurn=${cityhelp2}&dateF1=${dateHelp1}&dateF2=${dateHelp2}`}
        >
          Ucuz Uçuş Ara
        </Link>
      </button>
    </div>
  );
};

export const Sscript2 = () => {
  const [selectedCity1, setSelectedCity1] = useState(null);
  const handleSelectedCity1 = (city) => {
    setSelectedCity1(city);
  };
  const [selectedCity2, setSelectedCity2] = useState(null);
  const handleSelectedCity2 = (city) => {
    setSelectedCity2(city);
  };
  const [selectedDate3, setSelectedDate3] = useState(new Date());

  const handleDateChange3 = (date) => {
    setSelectedDate3(date);
    const formattedDate3 = formatDate(selectedDate3);
  };
  let cityhelp1 = "";
  let cityhelp2 = "";
  let dateHelp = formatDate(selectedDate3);
 

  return (
    <div>
      <div className="pb-4">
        <div className="border border-gray-400 flex px-3 py-3 text-black rounded-xl">
          <SearchBar
            placeholder="Kalkış Havaalanı"
            data={turkeyAirports}
            selectedAirportToGo={setSelectedCity1}
          />
          <h1 className="text-white">{(cityhelp1 = selectedCity1)}</h1>
          <h1 className="text-white">{cityhelp1}</h1>
        </div>
      </div>
      <div className="pb-4">
        <div className="border border-gray-400 flex px-3 py-3 text-black rounded-xl">
          <SearchBar
            placeholder="Varış Havaalanı"
            data={turkeyAirports}
            selectedAirportToGo={setSelectedCity2}
          />
          <h1 className="text-white">{(cityhelp2 = selectedCity2)}</h1>
          <h1 className="text-white">{cityhelp2}</h1>
        </div>
      </div>
      <div className="pb-4">
        <div className="border border-gray-400 flex px-3 py-3 text-black rounded-xl">
          <DatePicker selected={selectedDate3} onChange={handleDateChange3} />
        </div>
      </div>
      <button className="bg-[#9cb034] hover:bg-[#e4ff5d] text-black font-bold py-2 px-4 border-b-4 border-[#757e43] hover:border-[#dbef78] rounded">
        <Link
          to={`/bilet?cityGo=${cityhelp1}&cityTurn=${cityhelp2}&dateF1=${dateHelp}&dateF2=${null}`}
        >
          Ucuz Uçuş Ara
        </Link>
      </button>
    </div>
  );
};
