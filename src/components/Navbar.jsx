import React, { useState } from "react";
import signW from "../assets/signW.png";
import { NAVIGATION_LINKS } from "../info";

const Navbar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen(!isMobileOpen);
  };
  const handleClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offest = -85;
      const elemPos = targetElement.getBoundClientRect().top;
      const offsetPos = elemPos + window.scrollY + offset;
      window.toScroll({
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

        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <a href="#">
              <img src={signW} width={120} alt="signW" className="m-2" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
