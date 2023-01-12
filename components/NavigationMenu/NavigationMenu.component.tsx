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
            ? "fixed right-0 top-0 z-20 h-screen w-full bg-neutral-700/70 transition-all md:hidden"
            : ""
        }
      ></div>
      <div
        className={
          isMenuOpen
            ? "fixed right-0 top-0 z-20 h-screen w-[75%] rounded-l-xl bg-primary-100 p-4 transition-all dark:bg-zinc-900 dark:shadow-zinc-700 sm:w-[60%] md:hidden md:w-[45%]"
            : "fixed right-[-100%] top-0 z-20 rounded-l-xl p-4 transition-all"
        }
      >
        <div className="flex items-center justify-between">
          <div
            onClick={handleMenuOpen}
            className="cursor-pointer p-2 text-xl hover:animate-wiggle"
          >
            <AiOutlineClose />
          </div>
          <Link
            href="/"
            onClick={handleMenuOpen}
            className="group flex items-center"
          >
            <span className="sm:text-md px-1 text-xl font-medium">{title}</span>
            <Image
              className="inline-block w-5 transition-transform group-hover:rotate-[20deg]"
              src="/assets/ceejay_logo.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className="grid h-screen grid-cols-1 text-center">
          <div className="pt-10">
            <ul>
              {listOfLinks.map((item, index) => (
                <Fragment key={index}>
                  {index !== listOfLinks.length - 1 && (
                    <Link href={`/#${item.link}`} onClick={handleMenuOpen}>
                      <li className="py-4 text-lg uppercase transition-all hover:scale-105 hover:underline sm:text-sm">
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
                      <li className="group flex items-center justify-center py-4 text-lg uppercase transition-all hover:scale-105 hover:underline sm:text-sm">
                        {item.title}
                        <HiExternalLink />
                      </li>
                    </a>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
          <div className="pt-40 transition-all sm:pt-10">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="btn-primary"
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
