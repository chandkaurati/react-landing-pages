import React from 'react'

function Navbar() {
  return (
     <nav className='flex py-6 justify-between'>
        <div className="logo w-28 text-lg"><h1>Coffe</h1></div>
        <div className="nav_items hidden lg:flex lg:gap-16 text-lg text-gray-800">
            <span>Home</span>
            <span>Shop</span>
            <span>About us</span>
            <span>Contact</span>
        </div>
        <div className="right_nav text-lg">
         <p>login</p>
        </div>
     </nav>
  )
}

export default Navbar
