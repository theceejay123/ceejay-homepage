import React from "react";

const Homepage = () => {
  const shortBio =
    "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building well-thought-out, human-driven experiences at ";

  const handleClickGitHub = () => {
    window.open(
      "https://github.com/theceejay123",
      "_blank",
      "noreferrer noopener"
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 text-left">
      <div className="mt-[30%] px-2 md:mt-[15%] 2xl:px-16">
        <p className="pb-2 text-sm uppercase tracking-widest dark:text-primary-400">
          Hi, my name is
        </p>
        <h1 className="pb-2 text-4xl tracking-normal text-secondary dark:text-primary-200 md:text-6xl lg:text-8xl">
          Janeal Pimentel
        </h1>
        <h1 className="pb-2 text-4xl tracking-normal text-secondary-200 dark:text-primary md:text-6xl lg:text-8xl">
          I build things for the web
        </h1>
        <div className="max-w-xl pt-4 dark:text-slate-300 md:max-w-2xl">
          <p className="">
            {shortBio}
            <a
              href="https://norimaconsulting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-secondary-400 dark:text-primary-200"
            >
              <span className="hover-underline">Norima Consulting</span>
            </a>
          </p>
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default Homepage;
