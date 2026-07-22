import React,{useState} from 'react'

export default function ourCakes() {
  const items = [{
   image: "/images/product1.png",
   text:'Pineapple cake',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },{
   image: "/images/product2.png",
   text:'Chocolate cake',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },{
   image: "/images/product 3.png",
   text:'Chocolate cake',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },{
   image: "/images/product4.png",
   text:'Australian Lamington',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },{
   image: "/images/product5.png",
   text:'Chocolate cake',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product6.png",
   text:'Espresso Delight (Tiramisu)',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product7.png",
   text:'Espresso Delight (Tiramisu)',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product8.png",
   text:'Espresso Delight (Tiramisu)',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product9.png",
   text:'Espresso Delight (Tiramisu)',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product10.png",
   text:'Biscoff',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product12.png",
   text:'Black Forest pastries',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product13.png",
   text:'Cold biscoff cheese cake',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product14.png",
   text:'Stawbery pasteries',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product15.png",
   text:'Chocolate pastries',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product16.png",
   text:'Rasmalai Cake',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product17.png",
   text:'Hampers',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  },
  {
   image: "/images/product18.png",
   text:'Bento Truffle Cake',
   infomation:"Delicious choclate like never taste before",
   price:'₹899'
  }]
  const [search,setSearch]=useState("");
  const filteredItems = items.filter((item) =>
  item.text.toLowerCase().includes(search.toLowerCase())
);
  return (
    <>
<div className="relative h-[55vh] sm:h-[50vh] lg:h-[40vh]">

  <img
    src="/images/ourCake.png"
    className="absolute inset-0 w-full h-full object-cover"
    alt=""
  />

  <div className="absolute inset-0 flex">

    {/* Left Side */}
    <div className="w-full lg:w-3/5 flex flex-col justify-center px-6 sm:px-10 lg:pl-24 lg:pr-0">

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4b2d2d] animate-fadeUp">
        Our Cakes
      </h2>

      <p className="mt-3 text-gray-700 text-sm sm:text-base max-w-md">
        Freshly baked with love, just for you.
      </p>

      <div className="flex mt-8 max-w-xl  gap-3 sm:gap-0 sm:flex-row">
        <input
          type="text"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search for cakes..."
          className="flex-1 rounded-full sm:rounded-l-full sm:rounded-r-none px-6 py-3 shadow-md outline-none"
        />

        <button className="bg-rose-400 text-white px-8 py-3 rounded-full sm:rounded-l-none sm:rounded-r-full hover:bg-rose-500 transition">
          Search
        </button>
        </div>
      </div>
  </div >
</div>
  <div className="max-w-7xl mx-auto px-6 py-12">
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
  {filteredItems.map((item,index)=>(
    <div className="group w-64">
  <div className="min-h-[420px] bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-5 flex flex-col">

    {/* Image */}
    <div className="h-52 flex items-center justify-center lg:items-start">
      <img
        src={item.image}
        alt="Chocolate Cake"
        className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col gap-2 mt-4 text-center flex-1">
      <h3 className="text-xl font-semibold text-gray-800">
        {item.text}
      </h3>

      <p className="text-sm text-gray-500 leading-6">
        {item.infomation}
      </p>

      {/* Price */}
      <p className="mt-auto text-xl font-bold text-rose-500">
        {item.price}
      </p>
    </div>
    </div>
  </div>
  ))}
  </div>
</div>
</>
  )
}
