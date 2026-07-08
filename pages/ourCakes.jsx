import React from 'react'

export default function ourCakes() {
  return (
<div className="relative h-[40vh]">

  <img
    src="/images/ourCake.png"
    className="absolute inset-0 w-full h-full object-cover"
    alt=""
  />

  <div className="absolute inset-0 flex">

    {/* Left Side */}
    <div className="w-[60%] flex flex-col justify-center pl-24">

      <h2 className="text-5xl font-bold text-[#4b2d2d] animate-fadeUp">
        Our Cakes
      </h2>

      <p className="mt-3 text-gray-700">
        Freshly baked with love, just for you.
      </p>

      <div className="flex mt-8 max-w-xl">
        <input
          type="text"
          placeholder="Search for cakes..."
          className="flex-1 rounded-l-full px-6 py-3 shadow-md outline-none"
        />

        <button className="bg-rose-400 text-white px-8 rounded-r-full hover:bg-rose-500 transition">
          Search
        </button>
      </div>

    </div>

  </div>
</div>
  )
}
