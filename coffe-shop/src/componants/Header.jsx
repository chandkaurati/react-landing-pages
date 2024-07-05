import React from 'react'
import haderiamge from '../../public/header.jpeg'
function Header() {
  return (
    <div className='w-full border '>
    <img className='w-full' src={haderiamge} alt="" />
    <h1 className='bg-zinc-600'>heider</h1>   
    </div>
  )
}

export default Header
