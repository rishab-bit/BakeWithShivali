import React, { useEffect, useState } from 'react'
import Herosection from './herosection'
import Card from './card'
import Reviews from './reviews'
import './index.css'
import { Link } from 'react-router-dom'
function Home(){
  return (
    <div>
        <div className='animate-left'>
          <section id='home'>
            <Link to="/ourCakes">
        <Herosection/>
            </Link>
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
