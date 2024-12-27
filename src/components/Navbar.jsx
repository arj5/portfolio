import React, { useState } from "react";
import signW from "../assets/signW.png";
import { LINKS } from "../info";
import { FaTimes, FaBars } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

const Navbar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen(!isMobileOpen);
  };
  const handleClick = (e, href) => {
    e.preventDefault();
    const targetElem = document.querySelector(href);
    if (targetElem) {
      const offset = -85;
      const elemPos = targetElem.getBoundingClientRect().top;
      const offsetPos = elemPos + window.scrollY + offset;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth",
      });
    }
    setMobileOpen(false);
  };
  return (
    <>
      <nav className="fixed flex flex-row items-center justify-center left-0 right-0 top-4 z-50">
        {/* Desktop */}

        {/* <div className="lg:flex hidden max-w-sm w-40 h-40 fixed left-10 top-4 rounded-full bg-black/20 py-3 backdrop-blur-lg border-[11.5px] border-white transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.8)]">
          <a href="#">
            <img src={signW}  alt="sign" />
          </a>
        </div> */}

        <div className="mx-auto hidden max-w-xl p-10 items-center justify-center rounded-full  border borderstone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className=" flex items-center justify-between gap-6">
            <div>
              <ul className="flex items-center gap-4">
                {LINKS.map((item, index) => (
                  <li className="text-lg hover:text-yellow-400" key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile */}

        <div className="w-full border-b-4 border-white fixed top-0  backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                {/* <img src={signW} width={120} alt="signW" className="mx-3" /> */}
                <TiHome className="m-3 h-10 w-12" />
              </a>
            </div>
            <div className="flex flex-col items-center ">
              <button
                className="focus:outline-none lg:hidden "
                onClick={toggleMobile}
              >
                {isMobileOpen ? (
                  <FaTimes className="m-3 h-10 w-12" />
                ) : (
                  <FaBars className="m-3 h-10 w-12" />
                )}
              </button>
            </div>
          </div>

          {isMobileOpen && (
            <ul className="ml-4 my-4 flex flex-col gap-4 backdrop-blur-md">
              {LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className=" block w-full text-3xl"
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
