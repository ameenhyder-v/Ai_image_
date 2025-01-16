import React from 'react'
import { Check } from 'lucide-react'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <section className="pt-16 pb-16 bg-gray-950">
      <div className="w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="uppercase text-white mb-4 text-lg font-bold tracking-wide">
            Flexible & Affordable
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Pricing Plans
          </h2>
          <p className="text-white font-medium text-opacity-75 mb-4">
            We offer a range of pricing plans designed to meet your needs, whether you're an individual or a business. Choose a plan that fits your goals and start creating with AI-powered tools at your fingertips.
          </p>
          <p className="text-white font-medium text-opacity-75">
            From basic access to premium features, each plan provides value and customer satisfaction. Pay only for what you need—no hidden fees.
          </p>

          {/* Benefits List */}
          <div className="mt-8 space-y-3">
            {[
              'High Quality Service',
              '24/7 Customer Support',
              'Access to Exclusive Features',
              'Flexible Payment Options',
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-green-600" />
                <p className="text-lg text-white font-semibold text-opacity-60">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <PriceCard price="4" user="1" type="Silver Pack" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <PriceCard price="8" user="3" type="Golden Pack" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Price
