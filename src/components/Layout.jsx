import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="px-3 md:px-32 bg-zinc-900 ">{children}</div>
    </>
  );
}

export default Layout
