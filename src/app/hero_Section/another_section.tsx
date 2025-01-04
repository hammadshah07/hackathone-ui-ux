import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import trenton from "../../../images/heroSec/Trenton sofa.png"
import xyz from "../../../images/heroSec/Outdoor bar table and stool 1.png"
import etc from "../../../images/heroSec/Granite dining table with dining chair 1.png"
import mask from "../../../images/heroSec/Mask group.png"

const Another_section = () => {
  return (
    <div className='w-full h-[677px]'>
      <h1 className='flex justify-center pt-10 text-[36px]'>Top Picks For You</h1>
      <p className='flex justify-center text-[16px] h-[24px] pt-3 text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      
      <div className='flex justify-between py-[44px] mx-3 '>
        <div>
          <Image src={trenton} alt='mdular' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Trenton modular sofa_3</p>
          <p className='text-[24px]'>Rs. 25,000.00</p>
        </div>

        <div>
          <Image src={etc} alt='picture' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Granite dining table with dining chair</p>
          <p className='text-[24px]'>Rs. 25,000.00</p>
        </div>

        <div>
          <Image src={xyz} alt='picture' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Outdoor bar table and stool</p>
          <p className='text-[24px]'>Rs. 25,000.00</p>
        </div>

        <div>
          <Image src={mask} alt='mask' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Plain console with teak mirror</p>
          <p className='text-[24px]'>Rs. 25,000.00</p>
        </div>
      </div>
      <div className='flex justify-center text-center py-[30px]'>
         <Link href="/shop">
        <p className='text-[20px] underline underline-offset-8'>View More</p>
        </Link>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Another_section
