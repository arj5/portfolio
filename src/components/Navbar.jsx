import React, { useState } from "react";
import signW from "../assets/signW.png";
import { NAVIGATION_LINKS } from "../info";
import { FaTimes, FaBars } from "react-icons/fa";

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
      const elemPos = targetElem.getBoundClientRect().top;
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

        <div className="lg:flex hidden max-w-sm  fixed left-10 top-4">
          <a href="#">
            <img src={signW} width={150} alt="sign" />
          </a>
        </div>

        <div className="mx-auto hidden max-w-xl p-10 items-center justify-center rounded-full  border borderstone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className=" flex items-center justify-between gap-6">
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
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

        <div className="w-full fixed top-0 rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={signW} width={120} alt="signW" className="mx-3" />
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
              {NAVIGATION_LINKS.map((item, index) => (
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
