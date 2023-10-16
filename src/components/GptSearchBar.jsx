import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg shadow-2xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=" p-4 m-4 col-span-9 rounded-lg shadow-lg outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700  focus:outline-none dark:border-neutral-600   dark:focus:border-primary"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-gradient-to-r from-blue-400 to-slate-200 font-semibold text-black rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
