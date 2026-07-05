import React from 'react'

function Footer() {
  return (
    <>
    <footer className='bg-[#fffaf8] px-8 md:px-12 lg:px-20 py-14'>
        <div className="         
         max-w-[1500px]
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-[1.15fr_0.8fr_0.9fr_1.2fr]
          gap-12
          lg:gap-16
          items-start">

        <div className="section1">
      <img src="/images/logo.png" alt="" className='h-[95px] w-auto object-contain mb-6' />
      <p className='text-[#5f4038] leading-8 text-[17px]'>
      Homemade cakes baked with love,
      <br />
      perfect for every celebration
      <br />
      and every sweet movement
      </p>
      <img src="/images/heart.png" alt="" className='h-6 w-6 object-contain my-5' />
<div className="flex items-center gap-4">
  <a className="w-12 h-12 rounded-full border border-rose-200 flex items-center justify-center">
    <img
      src="/images/instagram.png"
      alt="instagram"
      className="w-6 h-6 object-contain"
    />
  </a>

  <a className="w-12 h-12 rounded-full border border-rose-200 flex items-center justify-center">
    <img
      src="/images/facebook.png"
      alt="facebook"
      className="w-6 h-6 object-contain"
    />
  </a>

  <a className="w-12 h-12 rounded-full border border-rose-200 flex items-center justify-center">
    <img
      src="/images/whatsapp.png"
      alt="whatsapp"
      className="w-6 h-6 object-contain"
    />
  </a>

  <a className="w-12 h-12 rounded-full border border-rose-200 flex items-center justify-center">
    <img
      src="/images/pinterest.png"
      alt="pinterest"
      className="w-6 h-6 object-contain"
    />
  </a>
</div>
        </div>
<div className='lg:border-l lg:border-rose-100 lg:pl-10'>
        <h3 className="
              text-[25px]
              font-serif
              font-semibold
              text-[#5f4038]
              mb-3
            ">
              Quick Links
            </h3>
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Our Cakes</li>
        <li>Reviews</li>
        <li>Contact</li>
    </ul>
</div>
          <div className="lg:border-l lg:border-rose-100 lg:pl-10">

            <h3 className="
              text-[25px]
              font-serif
              font-semibold
              text-[#5f4038]
              mb-3
            ">
              Contact Us
            </h3>

            <div className="flex items-center gap-2 mb-7">
              <span className="w-12 h-px bg-rose-300"></span>
              <span className="text-rose-400">♥</span>
              <span className="w-12 h-px bg-rose-300"></span>
            </div>

            <ul className="space-y-4 text-[#60443d]">

              <li className="flex items-center gap-3">
                <span className="
                  w-10 h-10
                  shrink-0
                  rounded-full
                  border border-rose-200
                  flex items-center justify-center
                ">
                  📍
                </span>
                Hisar, Haryana
              </li>

              <li className="flex items-center gap-3">
                <span className="
                  w-10 h-10
                  shrink-0
                  rounded-full
                  border border-rose-200
                  flex items-center justify-center
                ">
                  ☎
                </span>
                +91 99999 99999
              </li>

              <li className="flex items-center gap-3">
                <span className="
                  w-10 h-10
                  shrink-0
                  rounded-full
                  border border-rose-200
                  flex items-center justify-center
                ">
                  <img
                    src="/images/whatsapp.png"
                    className="w-5 h-5 object-contain"
                    alt=""
                  />
                </span>
                WhatsApp Us
              </li>

              <li className="flex items-center gap-3">
                <span className="
                  w-10 h-10
                  shrink-0
                  rounded-full
                  border border-rose-200
                  flex items-center justify-center
                ">
                  <img
                    src="/images/instagram.png"
                    className="w-5 h-5 object-contain"
                    alt=""
                  />
                </span>
                @bakewithshivali
              </li>

            </ul>
          </div>

          <div className="
            relative
            overflow-hidden
            min-h-[390px]
            rounded-[24px]
            border border-rose-200
            bg-[#fff5f2]
            p-8
          ">

            <h3 className="
              text-[28px]
              font-serif
              font-semibold
              text-rose-400
            ">
              Planning a Celebration? ♡
            </h3>

            <p className="
              mt-4
              text-[#60443d]
              leading-7
            ">
              Share your cake idea with us and
              let&apos;s make your celebration
              extra special.
            </p>

            <button className="
              mt-6
              w-full
              rounded-xl
              bg-rose-400
              px-6 py-3
              text-white
              font-medium
              transition-all duration-300
              hover:bg-rose-500
              hover:-translate-y-0.5
            ">
              WhatsApp Us ♡
            </button>

            <img
              src="/images/pastery.png"
              alt="Pastry"
              className="
                absolute
                -bottom-4
                left-1/2
                -translate-x-1/2
                w-[230px]
                object-contain
              "
            />

          </div>

        </div>
    </footer>
    <img src="/images/footer.png" alt="" className='w-full block object-cover' />
    </>
  )
}

export default Footer
