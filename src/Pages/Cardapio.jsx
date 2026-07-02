import Header from "../assets/Header";
import Footer from "../assets/footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { div, map } from "framer-motion/client";
import Whatsapp from "../components/whattsapp";

function Cardapio() {
  const favs = [
    {
      title: "Pizza Magherita",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elite.",
      image: "/images/pizza/pizza-2.jpg",
    },
    {
      title: "Pizza de Queijo",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex animi cum fuga ducimus",
      image: "/images/pizza/pizza-3.jpg",
    },
    {
      title: "Peperroni",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex animi cum fuga ducimus",
      image: "/images/pizza/pizza-4.jpg",
    },
    {
      title: "Pizza vegana",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex animi cum fuga ducimus",
      image: "/images/pizza/pizza-5.jpg",
    },
    {
      title: "Pizza Napolitana",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex animi cum fuga ducimus",
      image: "/images/pizza/pizza-7.jpg",
    },
    
    
  ];

  return (
    <section>
      <Header />
      <div className="pt-40">
        <div className="p-2 flex justify-center">
          <h1 className="animate-bounce text-2xl md:text-4xl font-bold font-poppins text-orange-main">
            Conheça nosso cardápio
          </h1>
        </div>
        <div className="w-full h-250 md:h-150 grid grid-cols-2 gap-3 p-6 md:grid-cols-3 md:pr-60 md:pl-60">
          {favs.map((pizza, index) => (
            <div key={index} className="">
              <div className="w-40 h-60 md:w-50 flex flex-col bg-white rounded-2xl hover:scale-105 duration-300 ease-in-out shadow-lg shadow-black/10">
                <div className="h-1/2">
                  <img
                    src={`${import.meta.env.BASE_URL}${pizza.image}`}
                    className=" object-cover rounded-t-2xl"
                    alt=""
                  />
                </div>
                <div className="h-1/2 p-2 text-md -mt-3 md:mt-3 text-justify">
                  <h1 className="font-poppins mb-3 font-semibold">
                    {pizza.title}
                  </h1>
                  <p className="font-poppins text-xs">{pizza.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <Whatsapp />
    </section>
  );
}

export default Cardapio;
