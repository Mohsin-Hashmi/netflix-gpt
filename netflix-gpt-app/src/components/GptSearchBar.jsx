import React from "react";

const GptSearchBar = () => {
  return (
    <>
      <div className="pt-[10%] w-[900px] m-auto">
        <form className="" action="">
          <div className="flex flex-wrap justify-between items-center gap-x-6 ">
            <input
              type="text"
              className="w-full p-6 outline-none rounded-lg text-xl text-[#434343]  bg-gradient-to-t from-[#cfd9df] to-[#e2ebf0] placeholder:text-xl"
              placeholder="What would you like to watch today? "
            />
            <button className="py-5 px-24 m-auto mt-9 bg-red-700 text-white rounded-lg text-xl ">
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
