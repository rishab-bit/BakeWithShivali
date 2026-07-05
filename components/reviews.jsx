import React from "react";

const reviews = [
  { name: "Priya", text: "The cake was absolutely delicious!" },
  { name: "Rahul", text: "Perfect taste and amazing service." },
  { name: "Neha", text: "Beautiful custom cake!" },
  { name: "Simran", text: "Fresh and very tasty." },
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
              <ReviewCard
                key={`first-${index}`}
                review={review}
              />
            ))}
          </div>

          {/* SECOND IDENTICAL COPY */}
          <div className="flex gap-6 pr-6">
            {reviews.map((review, index) => (
              <ReviewCard
                key={`second-${index}`}
                review={review}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div
      className="
        w-[300px]
        shrink-0
        rounded-2xl
        border
        border-rose-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="text-yellow-400 mb-3">
        ★★★★★
      </div>

      <p className="text-gray-600">
        “{review.text}”
      </p>

      <p className="mt-4 font-semibold">
        — {review.name}
      </p>
    </div>
  );
}

export default Reviews;