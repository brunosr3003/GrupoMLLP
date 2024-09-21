import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-t-3xl bg-gradient-to-r from-blue-950 to-green-900">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home" className="">
                Multiluz
                <span className="inline-block font-bold text-primary">Solar</span>
              </a>
            </h1>
            <p className="">
            NOSSO SUCESSO VEM DO COMPROMETIMENTO COM A SUA ECONOMIA{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Av. Macapá, 645 - Veneza, Ipatinga - MG, 35164-253</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>(31) 3617-3862</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                 Links importantes
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Home
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Sobre
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Serviços
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Política de privacidade
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Serviços
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Sobre nós
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Redes Sociais
                </h1>
                <div className="flex flex-col gap-3">
                  <h1>Inscreva-se para ver as novidades</h1>
                  <input
                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 "
                    type="text"
                    placeholder="Email"
                  />
                  <div className="mt-6 flex items-center gap-3">
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
          Todos os Direitos Reservados | Multiluz Solar
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
