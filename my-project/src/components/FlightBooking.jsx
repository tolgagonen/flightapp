import React, { useState } from "react";
import { Sscript1, Sscript2 } from "./Sscript";

const FlightBooking = () => {
  const [selectedScript, setSelectedScript] = useState(<Sscript1 />);

  const handleRadioChange = (event) => {
    if (event.target.value === "1") {
      setSelectedScript(<Sscript2 />);
    } else {
      setSelectedScript(<Sscript1 />);
    }
  };

  return (
    <div className="bg-white lg:w-[40%] p-12 lg:rounded-3xl max-w-[1240px] mb-8 mx-auto text-center flex flex-col justify-center">
      <p className="font-bold text-[#c5df00] text-left pb-8">
        uygunuç.
        <span className="text-[#000000]"> ile en iyi tercihi yapın.</span>
      </p>
      <div className="flex gap-8 bg-black text-white justify-center w-full">
        <div className="flex">
          <input
            type="radio"
            id="2way-1"
            name="2way"
            value="1"
            checked={selectedScript.type === Sscript2}
            onChange={handleRadioChange}
          />
          <p className="text-xl font-bold">Tek Yönlü</p>
        </div>
        <div className="flex">
          <input
            type="radio"
            id="2way-2"
            name="2way"
            value="2"
            checked={selectedScript.type === Sscript1}
            onChange={handleRadioChange}
          />
          <p className="text-xl font-bold">Gidiş Dönüş</p>
        </div>
      </div>
      <div className="p-5">{selectedScript}</div>
    </div>
  );
};

export default FlightBooking;
