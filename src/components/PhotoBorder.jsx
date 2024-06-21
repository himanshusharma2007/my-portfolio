import React from 'react'

const PhotoBorder = () => {
  return (
    <div className="line relative   p-2 w-fit h-fit rounded-full overflow-hidden bg-transparent">
      <div className=" w-[240px] h-[240px]  sm:w-[290px] sm:h-[290px] border-4  border-green-500 rounded-full ">
        <div className="absolute rounded-full  w-6 h-10 bg-zinc-900 top-5 left-12"></div>
     
        <div className="absolute rounded-full  w-10 h-14 bg-zinc-900 top-32 right-0"></div>
        <div className="absolute rounded-full  w-10 h-12 bg-zinc-900 top-20 left-0"></div>
        <div className="absolute rounded-full  w-10 h-12 bg-zinc-900 bottom-10 right-4"></div>
        <div className="absolute rounded-full  w-14 h-4 bg-zinc-900 top-2 right-36"></div>
        {/* <div className="absolute rounded-full  w-10 h-7 bg-zinc-900 top-60 left-10"></div> */}
        <div className="absolute rounded-full  w-10 h-14 bg-zinc-900 top-40 left-0"></div>
      
        <div className="absolute rounded-full  w-10 h-14 bg-zinc-900 top-12 right-4"></div>
        <div className="absolute rounded-full  w-20 h-7 bg-zinc-900 bottom-0 left-32"></div>
      </div>
    </div>
  );
}

export default PhotoBorder
