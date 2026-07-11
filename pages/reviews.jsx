import React from "react";

const reviews = [
'/images/review1.png','/images/review2.png','/images/review3.png','/images/review4.png','/images/review5.png','/images/review6.png'
];

function Reviews() {
  return (
    <section className="overflow-hidden bg-[#fffaf8] py-12">

      <h2 className="text-center text-3xl font-serif mb-8">
        What Our Customers Say
      </h2>

      <div className="overflow-hidden w-full">

        <div className="review-slider flex w-max">

          {/* FIRST COPY */}
           <div className="flex gap-6 pr-6">
            {reviews.map((review, index) => (
              <img
                key={index}
                src={review}
                alt="customer review"
                className="w-[300px] h-auto object-contain"
              />
            ))}
          </div> <div className="flex gap-6 pr-6">
            {reviews.map((review, index) => (
              <img
                key={index}
                src={review}
                alt="customer review"
                className="w-[300px] h-auto object-contain"
              />
            ))}
          </div>
          
          </div>

        </div>
    </section>
  );
}



export default Reviews;