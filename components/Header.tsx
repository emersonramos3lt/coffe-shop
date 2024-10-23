"use client";

import Image from 'next/image'
import React from 'react'
import { RevealWrapper } from "next-reveal"; // RevealWrapper = false

const Header = () => {
  return (
    <header>
        <nav>
            <a href="/" className="logo text-xl cursor-pointer hover:underline hover:underline-offset-8">COFFESHOP</a>
        </nav>

        <div className="text-header">
            <div>
                <h1 className='text-7xl'>Enjoy a <br/> moment of <br/> simplicity <br/>with every sip.</h1>
            </div>

            <RevealWrapper delay={700} origin='bottom'>
            <div>
                <Image src="/header-img.jpg" alt='header image' 
            width={800} height={800}/>
            </div>
            </RevealWrapper>

           
           <div>
                <button className='bg-gray-900 p-5 hover:bg-black'>ORDER NOW</button>
            </div>

            <div className='address gap-20 text-2xl'>
                <p>Everyday 7 am – 6 pm <br/>
                (555) 123-4567</p>

                <p>123 Willow Lane<br/>
                Sunnyvale, TX 75001
                </p>
            </div>
           </div>
    </header>
  )
}

export default Header