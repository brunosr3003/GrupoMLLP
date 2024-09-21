import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/LogoMultiluzSolar.png";
const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("light theme");
    }
  }, [theme]);

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="relative z-[99] border-b-[1px]  border-primary/50 bg-gradient-to-l from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg"
      >
        <nav className="container  flex h-[70px] items-center justify-between py-2 ">
          <div className="text-2xl text-white md:text-3xl ">
            <a href="/#home" className="">
              <img
                className="max-h-[50px] w-full  object-fill"
                src={Logo}
                alt="pics"
              />
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Home{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Serviços</li>
                    <li className="p-2 hover:bg-violet-200">Sobre nós</li>
                    <li className="p-2 hover:bg-violet-200">Política de privacidade</li>
                  </ul>
                </div>
              </li>
              <li className="cursor pointer group">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Serviços{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block  ">
                  <div className="grid grid-cols-3 gap-5 ">
                    <div className="d-200 overflow-hidden">
                      <img
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                        src="https://picsum.photos/200"
                        alt="pics"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="pb-3 text-xl font-semibold">
                          Nossos serviços
                      </h1>
                      <p className="text-sm text-slate-600">
                      sinônimo de excelência e comprometimento. 
                      Confira alguns de nossos serviços:
                      </p>
                      <div className="grid grid-cols-3 ">
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                          Avaliação energética
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                          Realizamos um estudo analítico para garantir a viabilidade do projeto e sua melhor performance em geração, seja para sua casa ou empresa.
                          </li>
                          
                        </ul>
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                          Instalação 
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                          Com uma equipe de engenharia especializada, cuidamos de toda a obra, desde homologação do projeto até a sua instalação e geração.</li>
                        </ul>
                        
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                          Manutenção
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                          O seu sistema é monitorado por uma plataforma que indica qualquer problema ou necessidade de reparos.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cursor pointer">
                <a href="/#contact">Sobre nós</a>
              </li>
              {/* Phone number section */}
              <div className="flex items-center gap-4">
                <li>
                  <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
                </li>
                <li>
                  <div>
                    <p className="text-sm">Ligue já</p>
                    <p className="text-lg">
                      {" "}
                      <a href="tel:3136173862">(31) 3617-3862</a>
                    </p>
                  </div>
                </li>
              </div>
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </ul>
          </div>

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar2;
