import React, { useEffect, useState } from 'react'

const Herosection = () => {
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
              <section className='relative'>
          <picture>
          <source 
          media="(max-width:736px)"
          srcSet={images[currentImage].Mobile} />
           <img src={images[currentImage].desktop} alt="cake of love" className='object-center h-[84vh] w-full object-cover' />
          </picture>
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
