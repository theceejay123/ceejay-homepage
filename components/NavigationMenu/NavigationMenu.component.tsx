import React, { Fragment, useContext } from "react";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import { AiOutlineClose } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";

import { NavigationMenuContext } from "@contexts";
import { getWeblinks } from "@utils";

const NavigationMenu = ({ ...props }) => {
  const { title } = props;
  const { isMenuOpen, setIsMenuOpen } = useContext(NavigationMenuContext);
  const listOfLinks = getWeblinks();
  const { theme, setTheme } = useTheme();

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        onClick={handleMenuOpen}
        className={
          isMenuOpen
            ? "md:hidden z-20 fixed right-0 top-0 w-full h-screen bg-neutral-700/70 transition-all"
            : ""
        }
      ></div>
      <div
        className={
          isMenuOpen
            ? "md:hidden z-20 rounded-l-xl fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary-100 dark:bg-zinc-900 dark:shadow-zinc-700 p-4 transition-all"
            : "z-20 rounded-l-xl fixed right-[-100%] top-0 p-4 transition-all"
        }
      >
        <div className="flex items-center justify-between">
          <div
            onClick={handleMenuOpen}
            className="cursor-pointer text-xl hover:animate-wiggle p-2"
          >
            <AiOutlineClose />
          </div>
          <Link
            href="/"
            onClick={handleMenuOpen}
            className="flex items-center group"
          >
            <span className="px-1 text-xl sm:text-md font-medium">{title}</span>
            <Image
              className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
              src="/assets/ceejay_logo.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 text-center h-screen">
          <div className="pt-10">
            <ul>
              {listOfLinks.map((item, index) => (
                <Fragment key={index}>
                  {index !== listOfLinks.length - 1 && (
                    <Link href={`/#${item.link}`} onClick={handleMenuOpen}>
                      <li className="py-4 text-lg sm:text-sm uppercase hover:scale-105 hover:underline transition-all">
                        {item.title}
                      </li>
                    </Link>
                  )}
                  {index === listOfLinks.length - 1 && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="group flex items-center justify-center py-4 text-lg sm:text-sm uppercase hover:scale-105 hover:underline transition-all">
                        {item.title}
                        <HiExternalLink />
                      </li>
                    </a>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
          <div className="pt-40 sm:pt-10 transition-all">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-lg sm:text-sm text-secondary rounded-md dark:text-primary-200 border-[1.5px] border-secondary dark:border-primary-200 hover:bg-secondary hover:text-primary-200 hover:border-none dark:hover:text-secondary dark:hover:bg-primary-200 hover:scale-105 py-2 px-4 transition-all"
            >
              Switch to {theme === "dark" ? "light" : "dark"} mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
