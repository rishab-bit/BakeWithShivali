import React, { useEffect, useState } from 'react'

import Herosection from './herosection'
import Card from './card'
import Reviews from './reviews'
import './index.css'
function Home(){
  return (
    <div>
        <div className='animate-left pt-[100px]'>
          <section id='home'>
        <Herosection/>
          </section>
        </div>
        <Card />
        <section id='reviews'>
        <Reviews></Reviews>
        </section>
        <section id='Aboutus'>
        <img src="/images/owner.png"className='h-[80vh] w-full'  alt="" />
        </section>
        <section id='contact'>
        </section>
    </div>
  )
}

export default Home
