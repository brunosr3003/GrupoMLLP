import React from "react";
import BannerImg from "../../assets/Geraldo Magela.png";

const Banner = () => {
  return (
    <main className="bg-primary">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className="order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2 md:items-start md:text-left">
            <h1 className="text-4xl font-bold">
              Com a Multiluz a sua satisfação é garantida!
            </h1>
            <p>
              Com mais de 2.000 projetos realizados e experiência no setor, a
              Multiluz está pronta para levar até você a melhor experiência em
              energia fotovoltaica, sem dor de cabeça!
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=553136173862&text=Oi%21+Vi+o+perfil+no+Insta+e+gostaria+de+saber+mais+sobre+energia+solar&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-md bg-white px-20 py-4 text-sm text-black transition-colors duration-300 hover:bg-white/90">
                Conheça já
              </button>
            </a>
          </div>
          <img
            src={BannerImg}
            alt="No image"
            className="hover:drop-shadow-md rounded-2xl"
          />
        </div>
      </section>
    </main>
  );
};

export default Banner;
