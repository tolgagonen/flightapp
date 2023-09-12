import React from 'react'
import {useState} from 'react'
import { turkeyAirports } from './Datas';

function SearchBar({ placeholder, data , selectedAirportToGo }) {
    const [searchInput, setSearchInput] = useState("");
    const [filteredAirports, setFilteredAirports] = useState([]);
    const [selectedAirport, setSelectedAirport] = useState(null);
    const handleChange = (e) => {
      const input = e.target.value;
      setSearchInput(input);
  
      const filteredCities = turkeyAirports.filter((airport) => {
        return airport.city.toLowerCase().includes(input.toLowerCase());
      });
  
      setFilteredAirports(filteredCities);
      setSelectedAirport(null);
    };
  
    const handleAirportClick = (airport) => {
      setSearchInput(airport.city);
      setSelectedAirport(airport);
      setFilteredAirports([]); // Sonuçları temizle
    };
  
    return (
      <div>
        <input
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
          value={searchInput}
          className="ml-3 outline-none border-none text-sm w-full"
        />
  
        <table>
          <tbody>
            {filteredAirports.map((airport, index) => (
              <tr key={index} onClick={() => handleAirportClick(airport)}>
                <td>{airport.city}</td>
                {selectedAirportToGo=setSelectedAirport}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  

export default SearchBar