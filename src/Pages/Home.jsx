import Header from "../assets/Header";
import Footer from "../assets/footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { div, map } from "framer-motion/client";
import Whatsapp from "../components/whattsapp";

export default function Home() {
  const favs = [
    {
      title: "Pizza de abacaxi",
      text: "O contraste perfeito entre o frescor doce e suculento do abacaxi e o salgado do queijo derretido. ",
      image: "/images/pizza-abacaxi.jpg",
    },
    {
      title: "Pizza de queijo",
      text: "Uma camada generosa do nosso blend especial de queijos, assada no forno até atingir aquele ponto dourado e elástico irresistível",
      image: "/images/pizza-queijo.jpg",
    },
    {
      title: "Pizza de cebola",
      text: "Rodelas fininhas de cebola que assam no calor intenso do forno até ficarem levemente caramelizadas. ",
      image: "/images/pizza-cebola.jpg",
    },
  ];

  return (
    <section className="">
      <Header />
      <motion.div
        className="bg-amber-50 w-full pt-25"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <section className="gap-10 md:flex md:justify-evenly md:items-center w-full h-137">
          <div className="flex-col justify-center text-center md:w-1/2 md:h-2/3 md:text-left md:ml-25">
            <div>
              <h1 className="p-1 text-5xl font-caladea md:w-2/3 font-bold">
                Massa artesanal,{" "}
                <div className="inline text-orange-ligh">
                  ingredientes frescos
                </div>{" "}
                e uma <div className="inline text-orange-main">paixao</div>{" "}
                inesquecivel em cada pedaço.
              </h1>
            </div>
            <div>
              <p className="mt-10">Veja nosso cardapio abaixo</p>
            </div>
            <Link to="/cardapio">
              <motion.div
                className="mt-5 w-50 text-center inline-block p-4 rounded-4xl font-poppins duration-150 text-white bg-green-800 animate-soft-ping"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Veja aqui!
              </motion.div>
            </Link>
            <p className="mt-6">
              Peca agora e descubra por que somos The best!
            </p>
          </div>

          <div className="relative bg-cover rounded-full bg-center mt-10 p-5">
            <div className="md:w-90 md:h-90">
              <img
                src="/images/pizza-image.jpg"
                className="border-4 border-white w-full h-full object-cover rounded-full object-center"
                alt=""
              />
            </div>
            <div className="absolute -top-5 right-7 md:-top-9 md:-right-4 z-40 bg-white md:w-26 md:h-26 rounded-full p-8">
              <img
                src="/images/coracao.png"
                className="w-full h-full animate-pulse"
                alt=""
              />
            </div>
            <div className="absolute scale-80 top-50 md:top-75 md:-left-4 z-40 bg-white md:w-26 md:h-26 rounded-full p-8">
              <img
                src="/images/folha-de-louro.png"
                className="w-full h-full animate-pulse"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="mt-70 md:mt-40 flex flex-col items-center w-full inset-shadow-2xl shadow-2xl bg-red-800 px-6 py-12">
          <div className="w-full max-w-5xl">
            <h1 className="font-caladea text-center text-4xl text-white font-bold">
              A Historia da The best Pizzaria
            </h1>
            <p className="font-poppins text-justify mt-10 text-white">
              Tudo comecou com uma ideia simples: reunir pessoas queridas em
              volta de uma mesa com uma comida que abraca a alma. A The best
              Pizzaria nasceu do amor pela verdadeira arte de fazer pizza. Nao
              queriamos ser apenas mais uma pizzaria na cidade. Nosso objetivo
              desde o primeiro dia foi criar uma experiencia. Passamos meses
              testando blends de farinha, o ponto exato do molho de tomate
              fresco e a combinacao perfeita de queijos. O resultado? Uma
              identidade unica, feita com dedicacao artesanal e muito carinho.
              Hoje, cada caixa que sai do nosso forno carrega a nossa essencia:
              entregar nao apenas pizzas :D, mas alegria e momentos
              inesqueciveis para a sua casa.
            </p>
            <hr className="mt-5 text-white" />
            <p className="font-poppins text-center mt-5 text-white">
              Foi ai que decidimos abrir a The best :D
            </p>
          </div>

          <div className="mt-10 w-full max-w-3xl">
            <img
              src="/images/loja.png"
              className="w-full max-h-120 rounded-4xl object-cover object-center "
              alt=""
            />
          </div>
        </section>
        <section className=" w-full h-260 md:h-150 flex-col justify-center items-center bg-[url(/images/italy-back.jpg)] bg-cover bg-center bg-no-repeat" >
          <div className="text-3xl md:text-4xl md:mb-10 font-justo font-bold mb-5 text-center h-12 justify-center w-full md:pt-30 ">
            <div className="md:w-100 md:m-auto md:rounded-3xl">
              <h1 className="bg-neutral-100 pt-5 pb-3 md:rounded-3xl">
              FAVORITOS DOS <span className="text-orange-main">CLIENTES</span>
            </h1>
            </div>
            
          </div>
          <div className="flex-col flex md:w-300 md:m-auto md:h-90 md:rounded-3xl  md:flex-row pt-20 justify-center h-full bg-white">
            {favs.map((pzz, index) => (
              <div
                key={index}
                className="w-full h-70 gap relative flex justify-center mb-5 "
              >
                <div className="w-full flex justify-center ">
                  <div className="w-65 h-full ">
                    <div className="w-full h-60 flex-col mb-10 shadow-2xl/40 hover:scale-120 duration-300 rounded-3xl ease-in-out">
                      <div className="w-full h-30">
                        <img
                          src={pzz.image}
                          alt=""
                          className="w-full h-full object-cover rounded-t-3xl"
                        />
                      </div>

                      <div className=" bg-white rounded-b-3xl p-3  w-65 h-1/2">
                        <h1 className="font-medium font-poppins">
                          {pzz.title}
                        </h1>
                        <p className="font-poppins text-xs w-full h-full">
                          {pzz.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
        <Whatsapp />
      </motion.div>
    </section>
  );
}
