import React from 'react'
import { Check } from 'lucide-react'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950" >
        <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                <h1 className="uppercase text-white mb-6 font-bold">
                Flexible & Affordable
                </h1>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white">
                Our Pricing Plans
                </h1>
                <p className="text-white font-medium text-opacity-75 mb-6">
                We offer a range of pricing plans designed to meet your needs, whether you're an individual or a business. Our flexible and affordable options ensure you get the best value for the services you need. Choose a plan that fits your goals and start creating with AI-powered tools at your fingertips.
                </p>
                <p className="text-white font-medium text-opacity-75 mb-6">
                From basic access to premium features, each plan is designed to provide maximum value with a focus on quality and customer satisfaction. Our pricing ensures that you only pay for what you need, with no hidden fees or surprises.
                </p>

                <div className='mt-8'>
                    <div className='flex items-center space-x-3 mb-3'>
                        <Check className='w-6 h-6 text-green-600' />
                        <p className='text-lg text-white font-semibold text-opacity-60'>
                        High Quality Service
                        </p>
                    </div>
                    <div className='flex items-center space-x-3 mb-3'>
                        <Check className='w-6 h-6 text-green-600' />
                        <p className='text-lg text-white font-semibold text-opacity-60'>
                        24/7 Customer Support
                        </p>
                    </div>
                    <div className='flex items-center space-x-3 mb-3'>
                        <Check className='w-6 h-6 text-green-600' />
                        <p className='text-lg text-white font-semibold text-opacity-60'>
                        Access to Exclusive Features
                        </p>
                    </div>
                    <div className='flex items-center space-x-3 mb-3'>
                        <Check className='w-6 h-6 text-green-600' />
                        <p className='text-lg text-white font-semibold text-opacity-60'>
                        Flexible Payment Options
                        </p>
                    </div>
                </div>

                {/* Price card content */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 ' >
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                        <PriceCard price="4" user="1" type="Silver Pack" />
                    </div>
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                        <PriceCard price="8" user="3" type="Golden Pack" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Price;
