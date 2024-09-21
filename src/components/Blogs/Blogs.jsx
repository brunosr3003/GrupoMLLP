import React, { useEffect } from "react";
import Img1 from "../../assets/geraldo.jpg";
import Img2 from "../../assets/blog2.png";
import Img3 from "../../assets/grupo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
        Energia solar precisa ser com quem entende
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img1}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
             
              <p className="line-clamp-1"> MultiluzSolar</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Honestidade
              </h1>
              <p className="line-clamp-2">
              Nós entendemos a necessidade de cada cliente e solucionamos de maneira especializada.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img2}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
             
              <p className="line-clamp-1"> MultiluzSolar</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Credibilidade
              </h1>
              <p className="line-clamp-2">
              Com mais de 2.000 projetos realizados, somos reconhecidos por entregar a melhor solução.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img3}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
           
              <p className="line-clamp-1"> MultiluzSolar</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Tradição
              </h1>
              <p className="line-clamp-2">
              Com mais de 30 anos no mercado, a Multiluz Solar carrega tradição e profissionalismo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
