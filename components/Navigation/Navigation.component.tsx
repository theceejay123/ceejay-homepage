import React, { useContext } from "react";

import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

import { CgMenuGridR } from "react-icons/cg";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { Weblink } from "@models";
import { NavigationMenuContext } from "@contexts";
import { getWeblinks } from "@utils";

const Navigation = ({ ...props }) => {
  const { theme, setTheme } = useTheme();
  const { isMenuOpen, setIsMenuOpen } = useContext(NavigationMenuContext);
  const { title } = props;
  const listOfLinks: Weblink[] = getWeblinks();

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="h-14 max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                className="w-5 inline-block transition-transform group-hover:rotate-[-20deg]"
                src="/assets/ceejay_logo.svg"
                alt="logo"
                width={20}
                height={20}
              />
              <span className="px-1 text-xl font-medium">{title}</span>
            </Link>
          </div>
          <div>
            <ol className="hidden md:flex list-decimal list-outside marker:text-secondary/70 items-center text-center">
              {listOfLinks.map((item, index) => (
                <Link href={`/#${item.link}`} key={index}>
                  <li className="ml-10 text-sm uppercase hover:scale-105 transition-transform">
                    {item.title}
                  </li>
                </Link>
              ))}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-5 text-sm text-secondary rounded-md dark:text-primary-200 border-[1.5px] border-secondary dark:border-primary-200 hover:animate-wiggle p-1.5 transition-all"
              >
                {theme === "dark" ? (
                  <BsFillSunFill size={18} />
                ) : (
                  <BsFillMoonFill size={18} />
                )}
              </button>
            </ol>
          </div>
          <div
            onClick={handleMenuOpen}
            className="md:hidden cursor-pointer hover:scale-105 ease-in duration-100 text-gray-900 dark:text-primary-200"
          >
            <CgMenuGridR size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
