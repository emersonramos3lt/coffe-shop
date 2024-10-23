"use client";

import Image from 'next/image'
import { RevealWrapper } from 'next-reveal';

const CenterContent = () => {
  return (
    <div className='content-container'>
        <h1 className='text-5xl text-center'>Start your day with a perfect cup. We're here to make your coffee moment special.</h1>

        <div className="column">

          <RevealWrapper duration={1000} origin='right'>
            <Image src="/center-img1.jpg" alt="Center Image 1" width={500} height={500}/>
          </RevealWrapper>

            <RevealWrapper duration={1000} origin='left'>
              <Image src="/center-img2.jpg" alt="Center Image 1" width={500} height={500}/>
            </RevealWrapper>
        </div>
    </div>
  )
}

export default CenterContent