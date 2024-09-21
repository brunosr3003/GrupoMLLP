import React from "react";


const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-blue-950 to-blue-900 pt-20 dark:bg-blue-950">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
            Com energia solar você
            usufrui sem se preocupar!
            </h1>
            <p className="">
            Conquiste economia para sua casa ou empresa e ajude o meio ambiente  através de um investimento inteligente e de alto retorno que tem revolucionado o mundo!
            </p>
            <div className="space-x-20">
              <button className="rounded-md border-2 border-primary bg-primary px-10 py-5  text-white transition-colors duration-300 hover:bg-primary/80  text-2xl">
                COMECE A ECONOMIZAR AGORA!
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <div className="order-1 " >
          <iframe width="400" height="315" src="https://www.youtube.com/embed/PEJ7-yNzHhk?si=8El9gityW3UZTxS9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-3xl"></iframe>
          </div>
           
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
