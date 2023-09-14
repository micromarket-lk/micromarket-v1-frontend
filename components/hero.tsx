"use client"

import React from 'react'
import CustomButton from "./custombtn";
import Image from 'next/image'

const Hero = () => {
    const handleScroll = () => {}
    return (
        <div className='hero flex flex-col md:flex-row md:justify-center md:items-center pt-8 pb-4 md:py-8'>
            <div className='hero-text w-full md:w-1/2'>
                <h1 className='hero-title text-4xl md:text-5xl font-extrabold'>
                    The best way to showcase your business
                </h1>
                <p className='hero-subtitle mt-4 md:mt-8 font-medium'>
                    Say hello to MicroMarket, the ultimate web marketplace just for you!
                    It's a game-changer that lets you showcase and sell your products online hassle-free.
                    No more struggles, just pure empowerment and success
                </p>
            </div>
            <div className='hero-image w-full md:w-1/4 mt-2 md:mt-0'>
                <Image className='object-contain' src="/hero.png" alt="hero" width={600} height={600} />
            </div>
        </div>
    );
}

export default Hero