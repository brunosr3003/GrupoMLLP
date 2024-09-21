import React from "react";
import BannerImg from "../../assets/geraldo.png";


const Banner = () => {
  return (
    <main className="bg-primary ">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className=" order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2  md:items-start md:text-left ">
            <h1 className="text-3xl font-bold ">Com a Multiluz a sua satisfação é garantida!</h1>
            <p className="">
            Com mais de 2.000 projetos realizados e experiência no setor, a Multiluz está pronta para levar até você a melhor experiência em energia fotovoltaica, sem dor de cabeça!
            </p>
            <button className="rounded-md bg-white px-4 py-2 text-sm  text-black transition-colors duration-300 hover:bg-white/90">
             Conheça já
            </button>
          </div>
          <img src={BannerImg} alt="No image" className="hover:drop-shadow-md rounded-2xl" />
        </div>
      </section>
    </main>
  );
};

export default Banner;
