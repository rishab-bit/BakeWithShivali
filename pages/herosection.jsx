import React, { useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom';

const Herosection = () => {
  const touchStartX = useRef(0);
const touchEndX = useRef(0);
  const handletostart=(e)=>{
    touchStartX.current = e.touches[0].clientX;
  }
  const handletoend=(e)=>{
    touchEndX.current = e.touches[0].clientX;
  }
  const images = [
    {
      Mobile : '/images/hero-mobile1.png',
      desktop: '/images/herosection1.png'
    },
    {
      Mobile : '/images/Hero-section-mobile.png',
      desktop: '/images/herosection2.png'
    },
    {
      Mobile : '/images/hero-mobile2.png',
      desktop: '/images/herosection3.png'
    }
  ];
  const [currentImage, setCurrentImage]= useState(0);
  const touchtoHandle=()=>{
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < 50) return;
    if(distance>0){
      setCurrentImage((prev)=>(prev +1) % images.length);
    }else{
      setCurrentImage((prev)=>(prev -1 + images.length)% images.length);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (previousImage) => (previousImage + 1) % images.length
      );
    }, 5000);

  return () => clearInterval(interval);
}, []);
  return (
    <div>
              <section className='relative h-[700px] overflow-hidden' onTouchStart={handletostart}
              onTouchMove={handletoend} onTouchEnd={touchtoHandle}>
                <Link to='/ourCakes'>
          <picture>
          <source 
          media="(max-width:736px)"
          srcSet={images[currentImage].Mobile} />
           <img src={images[currentImage].desktop} alt="cake of love" className='absolute inset-0 w-full h-full object-cover' />
          </picture>
          </Link>
        <div className="absolute bottom-5
            left-1/2
            -translate-x-1/2
            flex
            gap-2">
       {images.map((_, index) => (
  <button
    key={index}
    onClick={() => setCurrentImage(index)}
    className={`w-3 h-3 rounded-full ${
      currentImage ===index
        ? "bg-white"
        : "bg-white/50"
    }`}
  />
))}
        </div>
        </section>
    </div>
  )
}

export default Herosection
