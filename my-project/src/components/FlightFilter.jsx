import React from "react";
import { mockDatas } from "./MockData";
import { useState, useEffect } from "react";
import { entryDatas } from "./Sscript";
import { useLocation } from 'react-router-dom';

//Listelenen uçuşlar kalkış saati, dönüş saati, uçuş uzunluğu, ya da fiyata göre sıralanabilmeli
//Sunucudan cevap gelene kadar kullanıcıya “yükleniyor” animasyonu gösterilmeli
//Listelenen uçuşların detay bilgileri gösterilmeli (havayolu, şehir, vs.)
const FlighFilter = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [sortingPreference, setSortingPreference] = useState("");
  const firstPageDatas= entryDatas;
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const cityGo = params.get('cityGo');
  const cityTurn = params.get('cityTurn');
  const dateF = params.get('dateF');
  const selectedCity = cityGo;
  const selectedDestination = cityTurn;
  const selectedDate = dateF;

  useEffect(() => {
    const data = mockDatas;

    const filteredData = data.filter((item) => {
      return (
        item.city === selectedCity &&
        item.destination === selectedDestination &&
        item.date === selectedDate
      );
    });
    

  const sortedData = sortDataByPreference(filteredData, sortingPreference);

  setFilteredData(sortedData);
}, [selectedCity, selectedDestination, selectedDate, sortingPreference]);


const calculateFlightDuration = (time_start, time_end) => {

  const data = mockDatas;  
  const a=data.time_start;
  const b=data.time_end;
  if (a>b){
    return 24-a+b;
  }else{
    return a-b;
  }

}

const sortDataByPreference = (data, preference) => {
  return data.slice().sort((a, b) => {
    switch (preference) {
      case "cheapest":
        return a.price - b.price;
      case "earliest_departure":
        return a.time_start - b.time_start;
      case "earliest_arrival":
        return a.time_end - b.time_end;
      case "shortest_flight":
        const aD= calculateFlightDuration(a.time_start,a.time_end);
        const bD= calculateFlightDuration(b.time_star,b.time_end);
        return aD - bD;
            
      default:
        return 0;
    }
  });
};

// Sıralama tercihini güncelleyen işlev
const handleSort = (preference) => {
  setSortingPreference(preference);
};


  return (
    <div className="pt-12">
      <div className="bg-white lg:w-[90%] pt-12 pb-96 lg:rounded-3xl max-w-[1240px] mb-8 mx-auto text-center flex flex-col justify-center lg:border-8 border-[#c5df00]">
        
        <p className="font-bold text-[#c5df00] text-left pb-8 pl-12">
          uygunuç.
          <span className="text-[#000000]"> ile en iyi tercihi yapın.</span>
        </p>
        <p className="text-black">{dateF}</p>
        <div className="lg:flex">
          <div className="flex pl-8 lg:pl-12 pb-4 gap-8">
            <div class="flex items-center pl-4 ">
              <input
                checked={sortingPreference === "cheapest"} // Kontrol edilen sıralama seçeneği
                onChange={() => handleSort("cheapest")}
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-black"
              />
              <label
                for="bordered-radio-1"
                class="w-full py-4 ml-2 text-l text-black font-bold"
              >
                En Ucuz Uçuş
              </label>
            </div>
            <div class="flex items-center pl-4 ">
              <input
              checked={sortingPreference === "earliest_departure"} // Kontrol edilen sıralama seçeneği
              onChange={() => handleSort("earliest_departure")}
                id="bordered-radio-2"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-black"
              />
              <label
                for="bordered-radio-2"
                class="w-full py-4 ml-2 text-l text-black font-bold"
              >
                En Erken Kalkan
              </label>
            </div>
          </div>

          <div className="flex pl-8 lg:pl-12 pb-4 gap-8">
            <div class="flex items-center pl-4 ">
              <input
              checked={sortingPreference === "earliest_arrival"} // Kontrol edilen sıralama seçeneği
              onChange={() => handleSort("earliest_arrival")}
                id="bordered-radio-3"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-black"
              />
              <label
                for="bordered-radio-3"
                class="w-full py-4 ml-2 text-l text-black font-bold"
              >
                En Erken Varan
              </label>
            </div>
            <div class="flex items-center pl-4 rounded ">
              <input
              checked={sortingPreference === "shortest_flight"} // Kontrol edilen sıralama seçeneği
              onChange={() => handleSort("shortest_flight")}
                id="bordered-radio-4"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-black"
              />
              <label
                for="bordered-radio-4"
                class="w-full py-4 ml-2 text-l text-black font-bold"
              >
                En Kısa Uçuş{" "}
              </label>
            </div>
          </div>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="pb-4 bg-white dark:bg-gray-900">
            <label for="table-search" class="sr-only">
              Search
            </label>
            <div class="relative mt-1"></div>
          </div>
          {filteredData.length === 0 ? (
            <div className=" dark:bg-gray-900 text-white font-bold">
    <p>Bu filtrelemeye uygun uçuş bulunmamaktadır. </p>
    <p>9/12/2023 - 9/22/2023 arasında bolca uçuş gözüküyor belki de o tarihleri denemelisiniz.</p></div>
  ) : (

          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="p-4"></th>
                <th scope="col" class="px-6 py-3">
                  Uçuş
                </th>
                <th scope="col" class="px-6 py-3">
                  Kalkış Saati
                </th>
                <th scope="col" class="px-6 py-3">
                  Dönüş Saati
                </th>
                <th scope="col" class="px-6 py-3">
                  Fiyat
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((flight, index) => (
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={index}
                >
                  <td class="w-4 p-4"></td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {flight.airline} - {flight.city} 'dan {flight.destination}{" "}
                    'e
                  </th>
                  <td class="px-6 py-4">{flight.time_start}</td>
                  <td class="px-6 py-4">{flight.time_end}</td>
                  <td class="px-6 py-4">{flight.price}</td>
                </tr>
              ))}
            </tbody>
          </table>  )}
        </div>
      </div>
    </div>
  );
};

export default FlighFilter;
