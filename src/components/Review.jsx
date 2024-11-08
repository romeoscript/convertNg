import React from "react";
import SliderCarousel from "./SliderCarousel";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const reviewInfo = [
    {
      Name: "John Doe",
      reviewText:
        "There are many variations of passages of Lorem Ipsum available, but the majority have are many variations of passages of Lorem Ipsum available, but the majority have there are many variations of passages of Lorem yhere are many variations of passages of Lorem.",
      date: "12/12/2021",
      rating: 5,
    },
    {
      Name: "John Doe",
      reviewText:
        "There are many variations of passages of Lorem Ipsum available, but the majority have are many variations of passages of Lorem Ipsum available, but the majority have there are many variations of passages of Lorem yhere are many variations of passages of Lorem.",
      date: "12/12/2021",
      rating: 5,
    },
    {
      Name: "John Doe",
      reviewText:
        "There are many variations of passages of Lorem Ipsum available, but the majority have are many variations of passages of Lorem Ipsum available, but the majority have there are many variations of passages of Lorem yhere are many variations of passages of Lorem.",
      date: "12/12/2021",
      rating: 3,
    },
    {
      Name: "John Doe",
      reviewText:
        "There are many variations of passages of Lorem Ipsum available, but the majority have are many variations of passages of Lorem Ipsum available, but the majority have there are many variations of passages of Lorem yhere are many variations of passages of Lorem.",
      date: "12/12/2021",
      rating: 2,
    },
  ];
  return (
    <div className="my-[2rem]">
      <SliderCarousel>
        {reviewInfo.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.Name}
            date={review.date}
            rating={review.rating}
            reviewText={review.reviewText}
          />
        ))}
      </SliderCarousel>
    </div>
  );
};

export default Review;
