import React from 'react'
import Header from './Header'
const Layout = ({children}) => {
  return (
    <>
    <Header />
        <h1>Layout</h1>
        {children}
    </>
  )
}

export default Layout