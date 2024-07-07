import React from 'react'

function Offercard({image, name, text}) {
  return (
    <div className='flex flex-col items-center text-center w-[300px]'>
      <img  className='w-1/2' src={image} alt="" />
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  )
}

export default Offercard
