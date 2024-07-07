import React from 'react'
import Header from '../componants/Header'
import Navbar from '../componants/Navbar'
import Offercard from '../componants/OfferCard'
import coffee from '../../public/cup.png'
function Home() {
  return (
    <div className='px-6'>
     <header>
      <Navbar/>
      <Header/>
     </header>

     <div className='offers  lg:py-24'>
      <span className='text-center border'>
        <h1 className='text-5xl font-semibold'>OUR DELICIOUS OFFER</h1>
        <p>Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Amet reprehenderit sint,
         nulla facilis beatae alias!</p>
      </span>

      <div className='offer_card lg:py-10 lg:flex lg:justify-between'>
      <Offercard image={coffee} name={"TYPES OF COFFE"} text={"it amet consectetur adipisicing elit. Amet reprehenderit sint"}/>
      <Offercard image={coffee} name={"TYPES OF COFFE"} text={"it amet consectetur adipisicing elit. Amet reprehenderit sint"}/>
      <Offercard image={coffee} name={"TYPES OF COFFE"} text={"it amet consectetur adipisicing elit. Amet reprehenderit sint"}/>
      </div>
     </div>
    </div>
  )
}

export default Home
