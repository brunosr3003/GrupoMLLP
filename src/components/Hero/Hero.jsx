import Img from "../../assets/CApa.png";
import React, { useState } from "react";

const Hero = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cidadeUf, setCidadeUf] = useState("");
  const [valorContaLuz, setValorContaLuz] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envia os dados para o backend
    fetch("/enviarFormulario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        telefone,
        email,
        cidadeUf,
        valorContaLuz,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Sucesso:", data);
        alert("Formulário enviado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Erro ao enviar o formulário");
      });
  };

  return (
    <main className="bg-gradient-to-r bg-secundary to-blue-900 pt-20 dark:bg-blue-950">
      <section className="container mx-auto flex flex-col items-center justify-center px-4 md:px-0 md:h-[500px]">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {/* Texto de Chamada */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col gap-4 text-center text-white md:items-start md:text-left "
          >
            <img
              src={Img}
              alt="No image"
              className="w-full h-auto object-cover transition duration-700 hover:skew-x-2 hover:scale-100 rounded-md"
            />
          </div>

          {/* Formulário */}
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-full p-4"
          >
            <div className="order-1">
              <p className="text-xl text-white">
                Preencha o formulário e comece a economizar agora!
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Primeira Linha - Nome e Telefone */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="nome" className="block text-lg text-white">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-lg text-white"
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Segunda Linha - Email e Cidade/UF */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cidadeUf"
                      className="block text-lg text-white"
                    >
                      Cidade/UF
                    </label>
                    <input
                      type="text"
                      id="cidadeUf"
                      className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={cidadeUf}
                      onChange={(e) => setCidadeUf(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Terceira Linha - Valor da Conta de Luz */}
                <div>
                  <label
                    htmlFor="valorContaLuz"
                    className="block text-lg text-white"
                  >
                    Valor da Conta de Luz
                  </label>
                  <select
                    id="valorContaLuz"
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={valorContaLuz}
                    onChange={(e) => setValorContaLuz(e.target.value)}
                    required
                  >
                    <option value="">Selecione o valor</option>
                    <option value="Até R$ 250">Até R$ 250</option>
                    <option value="R$ 250 a R$ 350">
                      De R$ 250 a R$ 350
                    </option>
                    <option value="R$ 350 a R$ 500">
                      De R$ 350 a R$ 500
                    </option>
                    <option value="Mais de R$ 500">Mais de R$ 500</option>
                  </select>
                </div>

                {/* Botão de Envio */}
                <button
                  type="submit"
                  className="w-full rounded-md border-2 border-green-800 bg-green-600 px-6 py-3 text-white text-xl transition-colors duration-300 hover:bg-green-400"
                >
                  Quero economizar agora
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
