import React from "react";
import Banner from "../../assets/modulo.jpeg";

const BannerDetails = ({ reverse, img }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">
              A Multiluz se tornou referência de energia solar em Minas Gerais!
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
              A Multiluz Solar é uma empresa reconhecida e especializada em realizar instalações fotovoltaicas para residências, empresas e agronegócios com muita qualidade. Com uma equipe altamente capacitada, os melhores equipamentos e tecnologia de ponta, estamos prontos para ajudar você a ter o seu sistema e gerar a própria energia com segurança e sem dores de cabeça.
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">
                  Equipe certificada com NR10 e NR35.
                  </li>
                  <li className="font-medium">
                  Equipamentos selecionados a dedo
                  das melhores marcas a nível mundial.
                  </li>
              
                </ul>
              </div>
              <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Conheça já
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={Banner}
                alt="No image"
                className="max-auto w-full hover:drop-shadow-md rounded-2xl"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
