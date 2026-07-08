import React from 'react'
const images = [
  {image:'/images/cake.png',message:'Birthday'},{image:'/images/cake.png',message:'Anniversay'},{image:'/images/cake.png',message:'Half Birthday'},{image:'/images/cake.png',message:'Baby Shower'},{image:'/images/cake.png',message:'Engagement'},
  {image:'/images/cake.png',message:'All Ocassions'}
]

function card({message}) {
  return (
    <section className="w-full px-6 py-5 bg-[#fffaf8]">

  <div className="text-center mb-5 py-10">
    <p className="text-rose-400 text-sm italic">
      Made for every moment
    </p>
    <h2 className="text-2xl font-semibold text-gray-800">
      Cakes for Every Celebration
    <p className='flex items-center justify-center min-[735px]:hidden text-[#b47a18] text-xl font-bold italic '>Only In Hisar,Harayana</p>
    </h2>
  </div>
    <div className='w-full px-6 py-4 '>
      <div className='flex gap-5 overflow-x-auto min-[1200px]:justify-center'>
      {images.map((item,index) => (
        <div key = {index}className='min-w-[180px] overflow-hidden 
        rounded-2xl border border-rose-100 bg-white shadow-sm'><img src={item.image} className='w-full 
        h-[220px] object-cover'alt="showcase" />
        <p className='py-3
              text-center
              font-medium
              text-gray-700'>{item.message}</p></div>
      ))}
      </div>
    </div>
    </section>
  )
}

export default card
