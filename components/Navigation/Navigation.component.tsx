import React, { Fragment, useContext } from "react";

import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

import { CgMenuGridR } from "react-icons/cg";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { Weblink } from "@models";
import { NavigationMenuContext } from "@contexts";
import { getWeblinks } from "@utils";
import { HiExternalLink } from "react-icons/hi";

const Navigation = ({ ...props }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const { isMenuOpen, setIsMenuOpen } = useContext(NavigationMenuContext);
  const { title } = props;
  const listOfLinks: Weblink[] = getWeblinks();

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-10 backdrop-blur-sm backdrop-filter">
      <div className="mx-auto h-14 max-w-7xl px-4">
        <div className="flex items-center justify-between p-2 2xl:px-16">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center">
              <Image
                className="inline-block w-5 transition-transform group-hover:rotate-[-20deg]"
                src="/assets/ceejay_logo.svg"
                alt="logo"
                width={20}
                height={20}
              />
              <span className="px-1 text-xl font-medium">{title}</span>
            </Link>
          </div>
          <div className="hidden md:flex">
            <ol className="flex list-outside list-decimal items-center text-center marker:text-secondary/70">
              {listOfLinks.map((item, index) => (
                <Fragment key={index}>
                  {index !== listOfLinks.length - 1 && (
                    <Link href={`/#${item.link}`}>
                      <li className="ml-10 text-sm uppercase transition-transform hover:scale-105">
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
                      <li className="ml-10 text-sm uppercase transition-transform hover:scale-105">
                        <span className="flex items-center justify-center">
                          {item.title}
                          <HiExternalLink />
                        </span>
                      </li>
                    </a>
                  )}
                </Fragment>
              ))}
            </ol>
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="ml-5 rounded-md border-[1.5px] border-secondary p-1.5 text-sm text-secondary transition-all hover:animate-wiggle dark:border-primary-200 dark:text-primary-200"
            >
              {resolvedTheme === "dark" ? (
                <BsFillSunFill size={18} />
              ) : (
                <BsFillMoonFill size={18} />
              )}
            </button>
          </div>
          <div
            onClick={handleMenuOpen}
            className="cursor-pointer text-gray-900 duration-100 ease-in hover:scale-105 dark:text-primary-200 md:hidden"
          >
            <CgMenuGridR size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
