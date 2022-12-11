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
    <div className="h-screen text-left max-w-6xl mx-auto px-4">
      <div className="w-full h-full px-2 2xl:px-16 mt-[30%] md:mt-[15%]">
        <p className="px-2 pb-2 uppercase text-sm tracking-widest dark:text-zinc-300">
          Hi, My name is
        </p>
        <h1 className="pb-2 tracking-normal text-4xl md:text-6xl lg:text-8xl text-secondary dark:text-primary-200">
          Janeal Pimentel.
        </h1>
        <h1 className="pb-2 tracking-normal text-4xl md:text-6xl lg:text-8xl text-secondary-200 dark:text-primary">
          I build things for the web.
        </h1>
        <div className="pt-4 md:max-w-xl dark:text-zinc-300">
          <p>
            {shortBio}
            <a
              href="https://norimaconsulting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary dark:text-primary-200 cursor-pointer"
            >
              <span className="underline">Norima Consulting</span>.
            </a>
          </p>
        </div>
        <button
          onClick={handleClickGitHub}
          className="mt-6 md:mt-8 lg:mt-12 px-4 py-2 text-md tracking-widest border border-secondary rounded-xl text-secondary dark:border-primary-200 dark:text-primary-200 hover:scale-105 transition-all"
        >
          Check out my GitHub!
        </button>
      </div>
    </div>
  );
};

export default Homepage;
