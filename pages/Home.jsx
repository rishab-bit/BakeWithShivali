import React, { useEffect, useState } from 'react'
import Herosection from './herosection'
import Card from './card'
import Reviews from './reviews'
import { useLocation } from "react-router-dom";
import './index.css'
import { Link } from 'react-router-dom'
function Home(){
  return (
    <div>
        <div className='animate-left'>
          <section id='home'>
        <Herosection/>
          </section>
        </div>
        <Card />
        <section id='reviews'>
        <Reviews></Reviews>
        </section>
        <section id='Aboutus'>
          <picture>
             <source 
          media="(max-width:736px)"
          srcSet='/images/chef_mobile_v2.png' />
        <img src="/images/owner.png"className='h-[80vh] w-full'  alt="" />
          </picture>
        </section>
        <section id='contact'>
        </section>
    </div>
  )
}

export default Home
