import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import trenton from "../../../images/heroSec/Trenton sofa.png";
import xyz from "../../../images/heroSec/Outdoor bar table and stool 1.png";
import etc from "../../../images/heroSec/Granite dining table with dining chair 1.png";
import mask from "../../../images/heroSec/Mask group.png";

const Related_products = () => {
  return (
    <div className='w-full h-[550px] my-8 flex justify-between'>
      <div>
        <h1 className='flex justify-center pt-5 text-[24px]'>Related Products</h1>  
        <div className='flex justify-between py-[44px] mx-5'>
          <div>
            <Image src={trenton} alt='modular' className='w-[287px] h-[287px]' />
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
        <div className='flex justify-center text-center py-[10px]'>
        <Link href="/shop">
          <p className='text-[20px] underline underline-offset-8'>View More</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Related_products;
