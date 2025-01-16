"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Slider = () => {
  return (
    <Carousel
      arrows={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
    >
      <div>
        <ReviewCard image="/images/u1.jpg" name="Faheem Ismail" role="Web Developer" />
      </div>
      <div>
        <ReviewCard image="/images/u2.jpg" name="Athira Rose" role="Engineer" />
      </div>
      <div>
        <ReviewCard image="/images/u3.jpg" name="Fayis T" role="Content Creator" />
      </div>
    </Carousel>
  );
};

export default Slider;
