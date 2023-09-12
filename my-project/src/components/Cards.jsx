import React from "react";
import enuygun from "../images/enuygun.png";
import sayisizsec from "../images/sayisizsec.png";
import teksite from "../images/teksite.png";
import guvenliode from "../images/guvenliode.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={enuygun}
            alt="#"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            En Uygun Fiyatlar
          </h2>
          <p className="py-2 mx-8 mt-8">
            Sayısız uçuş seçeneğini dilediğiniz gibi filtreleyin , en uygun
            bileti kolayca seçin.
          </p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={sayisizsec}
            alt="#"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Sayısız Seçenekler
          </h2>
          <p className="py-2 mx-8 mt-8">
            Sayısız uçuş seçeneğini sizin için karşılaştırıyoruz , istediğiniz
            gibi filtreliyoruz..
          </p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={teksite}
            alt="#"
          />
          <h2 className="text-2xl font-bold text-center py-8">Tek Site</h2>
          <p className="py-2 mx-8 mt-8">
            İstediğiniz uçuşu tek bir sayfa üzerinden , başka sitelere
            yönlendirmeden karşılaştırıyoruz.{" "}
          </p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={guvenliode}
            alt="#"
          />
          <h2 className="text-2xl font-bold text-center py-8">Güvenli Ödeme</h2>
          <p className="py-2 mx-8 mt-8">
            Birlikte çalıştığımız güvenli ödeme firmaları sayesinde rahatlıkla
            ödemeni yapabilirsin.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
