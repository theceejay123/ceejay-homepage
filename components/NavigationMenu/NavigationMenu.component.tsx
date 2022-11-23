import { NavigationMenuContext } from "@contexts";
import React, { useContext } from "react";

const NavigationMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(NavigationMenuContext);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        onClick={handleMenuOpen}
        className={
          isMenuOpen
            ? "md:hidden z-20 fixed right-0 top-0 w-full h-screen bg-slate-400/20 transition-all"
            : ""
        }
      ></div>
      <div
        className={
          isMenuOpen
            ? "md:hidden z-20 rounded-l-xl shadow-xl shadow-secondary-400/70 fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary-100 px-10 py-5 transition-all duration-300"
            : "z-20 rounded-l-xl fixed right-[-100%] top-0 px-10 py-5 transition-all duration-300"
        }
      ></div>
    </div>
  );
};

export default NavigationMenu;
