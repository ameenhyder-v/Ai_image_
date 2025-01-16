"use client"
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import Image from 'next/image'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ImageSlider = () => {
  return (
    <Carousel
      // swipeable={false}
      // draggable={false}
      // showDots={true}
      arrows={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
    >
      {['r1.jpg', 'r2.jpg', 'r4.jpg', 'r5.jpg', 'r6.jpg'].map((image, index) => {
        return (
          <div key={index} className="p-4">
            <div className="h-[400px] relative ">
              <Image src={`/images/${image}`} alt='recent image' className='object-cover rounded-md' fill />
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default ImageSlider
