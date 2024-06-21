import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
    <div className="wraper h-[8vh] md:h-[12vh]">

      <Header />
    </div>
      <div className="px-3 md:px-32  bg-zinc-900 h-auto ">
        {children}
      </div>
    </>
  );
}

export default Layout
