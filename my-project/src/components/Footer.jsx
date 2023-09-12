import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#c5df00]">uygunuç.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus
          vulputate purus ultrices mollis.{" "}
        </p>
      </div>
      <div></div>
      <div className="lg:pl-72">
        <h6 className="font-medium text-gray-400">Hakkımızda</h6>
        <h6 className="font-medium text-gray-400">İletişim</h6>
        <h6 className="font-medium text-gray-400">Yardım</h6>
        <div className="flex md:w-[75½] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
