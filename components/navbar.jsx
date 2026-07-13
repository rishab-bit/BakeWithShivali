import React,{useState} from 'react'
import NavItem from './navItem'
import { Link } from 'react-router-dom';
function Navbar() {
  const [openNav,setopenNav]=useState(false);
  const scrolltosection=(id)=>{
    const section=document.getElementById(id);
    if(section){
      section.scrollIntoView({
        behavior:'smooth',
      });
    }
}
  return (
    <div>
       <header className='flex items-center top-0 left-0 w-full z-50 px-8 py-3 sticky top-0 bg-white' >
      <img src="/images/hamburger.png" className='min-[736px]:hidden h-12' onClick={()=>setopenNav(!openNav)} />
      <Link to='/'><img src="/images/logo.png" alt="bakeWithShivali" className='h-[76px] w-auto object-contain mr-10 absolute left-1/2 -translate-x-1/2 min-[736px]:static min-[736px]:translate-x-0' /></Link>
      <ul className='  hidden min-[736px]:flex items-center gap-8 ml-auto text-[17px] font-medium'>
        <NavItem onClick={()=>scrolltosection("home")}>Home</NavItem>
      <NavItem onClick={()=>scrolltosection("Aboutus")}>About us</NavItem>
      <NavItem onClick={()=>setopenNav(false)}><Link to='/ourCakes'>Our Cakes</Link></NavItem>
      <NavItem onClick={()=>scrolltosection("reviews")}>Reviews</NavItem>
      <NavItem onClick={()=>scrolltosection("contact")}>Contact</NavItem>
      
      </ul>
      <div className={`
      w-[80%] bg-white h-[100vh] left-0 top-0 fixed min-[736px]:hidden border border-rose-200 ${openNav?"translate-x-0":"-translate-x-full"}`}>
        <ul className='pt-10 px-9 space-y-8 text-[17px] text-[#b47a18]' id='hide'>
          <li className='flex justify-between items-center' onClick={()=>{scrolltosection("home");setopenNav(false); }}>Home</li>
          <li className='flex justify-between items-center' onClick={()=>{scrolltosection("Aboutus");setopenNav(false);}}>About us</li>
          <li className="flex justify-between items-center"><Link to="/ourCakes" onClick={() => setopenNav(false)}>Our Cakes</Link></li>
          <li className='flex justify-between items-center' onClick={()=>{scrolltosection("reviews");setopenNav(false);}}>Reviews</li>
          <li className='flex justify-between items-center'>Contact</li>
        </ul>
      <button className='absolute w-full bottom-0 gap-5 h-[50px]flex items-center justify-center bg-rose-200 text-white' onClick={()=>setopenNav(false)}>close</button>
     </div>

     
      <div className='flex static items-center ml-auto gap-3'>
      <button className='RoundedNav max-[735px]:hidden ' id="mediaquery">Hisar,Harayana</button>
      <a
  href="https://wa.me/c/919306117358"
  target="_blank"
  rel="noopener noreferrer"
  className="RoundedNav flex items-center gap-2 max-[736px]:hidden"
>
  <img
    src="/images/whatsapp.png"
    alt="WhatsApp"
    className="w-5 h-5"
  />
  Order Now
</a>
      <a
  href="https://wa.me/c/919306117358"
  target="_blank"
  rel="noopener noreferrer"
  className="RoundedNav flex items-center gap-2 min-[736px]:hidden"
>
  <img
    src="/images/whatsapp.png"
    alt="WhatsApp"
    className="w-5 h-5"
  />
</a>
      </div>
        </header>
    </div>
  )
}
export default Navbar;