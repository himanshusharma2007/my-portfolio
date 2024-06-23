import React from "react";

const PhotoBorder = () => {
  return (
    <div className="line  relative p-2 w-fit h-fit rounded-full overflow-hidden">
      <div className="w-[200px] h-[200px] sm:w-[290px] sm:h-[290px] border-4 border-green-500 rounded-full">
        <div className="absolute rounded-full w-6 h-10 bg-zinc-900 top-13 left-8 sm:top-5 sm:left-12"></div>
        <div className="absolute rounded-full w-4 h-10 bg-zinc-900 top-24 right-10 sm:top-32 sm:right-0 sm:w-10 sm:h-14"></div>
        <div className="absolute rounded-full w-4 h-10 bg-zinc-900 top-20 left-10 sm:top-20 sm:left-0 sm:w-10 sm:h-12"></div>
        <div className="absolute rounded-full w-4 h-10 bg-zinc-900 bottom-8 right-4 sm:bottom-10 sm:right-4 sm:w-10 sm:h-12"></div>
        <div className="absolute rounded-full w-10 h-4 bg-zinc-900 top-2 right-16 sm:top-3 sm:right-36 sm:w-14"></div>
        <div className="absolute rounded-full w-4 h-10 bg-zinc-900 top-32 left-2 sm:top-40 sm:left-0 sm:w-10 sm:h-14"></div>
        <div className="absolute rounded-full w-4 h-10 bg-zinc-900 top-8 right-4 sm:top-12 sm:right-4 sm:w-10 sm:h-14"></div>
        <div className="absolute rounded-full w-10 h-6 bg-zinc-900 bottom-0 left-20 sm:left-32 sm:w-20 sm:h-7"></div>
      </div>
    </div>
  );
};

export default PhotoBorder;
