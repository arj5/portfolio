import React from "react";
import signW from "../assets/signW.png";
import { SOCIAL } from "../info";

const Footer = () => {
  return (
    <div className="">
      <div className="flex my-20 items-center justify-center transition-transform duration-300 hover:scale-110">
        <a href="https://smpl-tictactoe.netlify.app/" target="_blank">
          <img src={signW} width={200} alt="signW" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className=" mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy; 2026 Arjun Sharma. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
