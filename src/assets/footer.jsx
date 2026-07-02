import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <section>
      <div className="bottom-0 w-full pb-25 pt-10 md:h-150 bg-red-800 border-t-8 border-red-900 p-5 md:p-20">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
          <div className="hidden md:flex flex-col w-1/2 h-full justify-between">
            <div className="flex items-center justify-start">
              <img
                className="h-20 w-40 md:h-auto md:w-80 object-contain"
                src={`${import.meta.env.BASE_URL}/images/icon%20.png`}
                alt="Ícone da The Best Pizzaria"
              />
            </div>
          
            <div className="h-1/2 flex flex-col justify-items-start">
              <img
                className="w-50 h-25 object-cover justify-self-start "
                src={`${import.meta.env.BASE_URL}/images/ssl.png`}
                alt=""
              />
              <img
                className="max-w-60 h-20"
                src={`${import.meta.env.BASE_URL}/images/blindado.png`}
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-items-end font-poppins text-justify text-white gap-10">
            <div className="flex flex-col justify-items-end">
              <h1 className="text-xl font-poppins md:text-end text-white right-0">
                Horaio de funcionamento
              </h1>
              <p className="right-2 mt-5 text-medium md:text-end font-poppins text white text-white">
                O forno está aceso de Terça a Domingo, das 18h às 23h
              </p>
            </div>
            <div>
              <h1 className="md:text-end text-xl ">Entregas</h1>
              <p className="md:right-0 md:justify-self-end mt-5 w-80 text-medium md:text-end font-poppins text white text-white">
                Entregamos a melhor pizza da cidade direto na sua porta.
                Consulte nossas taxas e áreas de cobertura.
              </p>
            </div>
            <div>
              <h1 className="md:text-end text-xl ">Whatsapp</h1>
              <p className="md:right-0 md:justify-self-end mt-5 w-80 text-medium md:text-end font-poppins text white text-white">
                Ficou com alguma dúvida ou quer fazer um pedido grande para
                eventos? Fale com a gente pelo WhatsApp!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
