import React from 'react'
import Header from '../componants/Header'
import Navbar from '../componants/Navbar'
import Offercard from '../componants/OfferCard'
import coffee from '../../public/cup.png'
import cup from '../../public/cup2.png'
import beans from '../../public/coffeBeans.png'
import Pastry from  '../../public/Pastry.png'
import Papercup  from  '../../public/papercup.png'
function Home() {
  return (
    <div className='px-6'>
     <header>
      <Navbar/>
      <Header/>
     </header>

     <div className='offers  lg:py-24 flex flex-col gap-6'>
      <span className='text-center borer flex flex-col  gap-6'>
        <h1 className='text-5xl font-semibold'>OUR DELICIOUS OFFER</h1>
        <p>Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Amet reprehenderit sint,
         nulla facilis beatae alias!</p>
      </span>

      <div className='offer_card lg:py-10 lg:flex lg:justify-between'>
      <Offercard image={cup} name={"TYPES OF COFFE"} text={"it amet consectetur adipisicing elit. Amet reprehenderit sint"}/>
      <Offercard image={beans} name={"BEAN VARIETIES"} text={"it amet consectetur adipisicing elit. Amet reprehenderit sint"}/>
      <Offercard image={Pastry} name={"COFFE & PASTRY"} text={"it amet consectetur adipisicing elit. Amet reprehenderit sint"}/>
      <Offercard image={Papercup} name={"COFFE TO GO"} text={"it amet consectetur adipisicing elit. Amet reprehenderit sint"}/>
      </div>

     </div>

    </div>
  )
}

export default Home
