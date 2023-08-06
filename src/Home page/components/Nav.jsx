import React from 'react'
import Profile from '../../components/Profile'
import NavItems from './NavItems'

const Nav = () => {
  return (
    <div className="flex flex-col basis-[23%] pl-3 sticky min-h-screen">
        <Profile/>
        <NavItems/>


    </div>

  )
}

export default Nav