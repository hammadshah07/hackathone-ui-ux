import React from 'react';
import Image from 'next/image';
import Group from "../../../images/heroSec/Group 43.png";

const Instagram = () => {
  return (
    <div className='relative w-full'>
      <Image src={Group} alt='picture' className='w-full h-auto' />
      <div className='absolute inset-0 flex items-center justify-center flex-col'>
        <p className='text-black text-4xl font-bold'>Our Instagram</p>
        <p className='text-black pt-3'>Follow our store on Instagram</p>
        <button className='border rounded-full h-[40px] w-[150px] bg-white shadow-lg shadow-gray-500/50 mt-4'>
          Follow us
        </button>
      </div>
    </div>
  );
}

export default Instagram;
