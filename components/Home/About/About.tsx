import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className='w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
        {/* Image */}
        <div className="order-2 xl:order-1" data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image 
            src="/images/about.jpg" 
            alt="About Image" 
            width={600} 
            height={600} 
            className="rounded-lg w-full object-cover"
            quality={100}
          />
        </div>

        {/* Content */}
        <div className="order-1 xl:order-2">
          <h1 className="text-gray-300 mb-4 font-semibold text-lg capitalize">What We Do</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Create Your Own AI Images Easily
          </h1>
          <p className="text-gray-200 mb-8 text-base">
            We provide a simple and fast platform to generate beautiful AI-powered images. Whether you’re creating art or enhancing visuals, our AI tools make it easy to bring your ideas to life.
          </p>
          <Button className="px-6 py-2 bg-rose-500 hover:bg-purple-700 text-white rounded-md taxt-base" size={"lg"}>
            About Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default About
