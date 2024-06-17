import React from 'react'

const PhotoBorder = () => {
  return (
    <div className="line relative   p-2 w-fit h-fit rounded-full overflow-hidden bg-transparent">
      <div className=" w-[240px] h-[240px]  sm:w-[340px] sm:h-[340px] border-4  border-green-500 rounded-full ">
        <div className="absolute  w-10 h-4 bg-zinc-900 top-10 left-10"></div>
        <div className="absolute  w-10 h-14 bg-zinc-900 top-1/3 right-0"></div>
        <div className="absolute  w-10 h-4 bg-zinc-900 top-1/4 left-0"></div>
        <div className="absolute  w-10 h-4 bg-zinc-900 top-0 right-40"></div>
        <div className="absolute  w-10 h-7 bg-zinc-900 top-60 left-6"></div>
        <div className="absolute  w-10 h-14 bg-zinc-900 top-40 left-0"></div>
        <div className="absolute  w-10 h-8 bg-zinc-900 top-60 right-6"></div>
        <div className="absolute  w-10 h-8 bg-zinc-900 top-10 right-10"></div>
        <div className="absolute  w-20 h-7 bg-zinc-900 bottom-0 left-32"></div>
      </div>
    </div>
  );
}

export default PhotoBorder
