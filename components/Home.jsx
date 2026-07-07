import React, { useEffect, useState } from 'react'
import NavItem from './navItem'
import Herosection from './herosection'
import Card from './card'
import Footer from './footer'
import Reviews from './reviews'
import './index.css'
const Home = () => {
  const [openNav,setopenNav]=useState(false);
  return (
    <div>
        <header className='flex items-centertop-0 left-0 w-full z-50 px-8 py-3 fixed bg-white' >
      <img src="/images/hamburger.png" className='min-[736px]:hidden h-12' onClick={()=>setopenNav(!openNav)} />
      <img src="/images/logo.png" alt="bakeWithShivali" className='h-[76px] w-auto object-contain mr-10 absolute left-1/2 -translate-x-1/2 min-[736px]:static min-[736px]:translate-x-0' />
      <ul className='  hidden min-[736px]:flex items-center gap-8 ml-auto text-[17px] font-medium'>
      <NavItem>Home</NavItem>
      <NavItem>About us</NavItem>
      <NavItem>Our Cakes</NavItem>
      <NavItem>Reviews</NavItem>
      <NavItem>Contact</NavItem>
      </ul>
      <div className={`
      w-[80%] bg-white h-[100vh] left-0 top-0 fixed min-[736px]:hidden border border-rose-200 ${openNav?"translate-x-0":"-translate-x-full"}`}>
        <ul className='pt-10 px-9 space-y-8 text-[17px] text-[#b47a18]'>
          <li className='flex justify-between items-center'>Home</li>
          <li className='flex justify-between items-center'>About us</li>
          <li className='flex justify-between items-center'>Our Cakes</li>
          <li className='flex justify-between items-center'>Reviews</li>
          <li className='flex justify-between items-center'>Contact</li>
        </ul>
      <button className='absolute w-full bottom-0 gap-5 h-[50px]flex items-center justify-center bg-rose-200 text-white' onClick={()=>setopenNav(false)}>close</button>
     </div>

     
      <div className='flex static items-center ml-auto gap-3'>
      <button className='RoundedNav ' id="mediaquery">Hisar,Harayana</button>
      <button className='RoundedNav' id="mediaquery"><a href ='https://wa.me/c/919306117358'>Order Now</a></button>
      </div>
        </header>
        <div className='animate-left pt-[100px]'>
        <Herosection/>
        </div>
        <div className="animate-left">
        <Card />
        </div>
        <Reviews></Reviews>
        <img src="/images/owner.png"className='h-[80vh] w-full'  alt="" />
        <Footer></Footer>
    </div>
  )
}

export default Home
