"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import RecentImage from './RecentImage/RecentImage'
import About from './About/About'
import Price from './Price/Price'
import Review from './Review/Review'
import AOS from 'aos';
import 'aos/dist/aos.css';

const  Home = () => {

    useEffect(() => {
        const initAos = async () => {
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom"
            })
        }
        initAos();
    }, [])

  return (
    <div className="overfllow-hidden">
        <Hero />
        <RecentImage />
        <About />
        <Price />
        <Review />
    </div>
  )
}

export default  Home