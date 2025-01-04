import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import tabel from "../../../images/heroSec/tabel.png";
import sofa from "../../../images/heroSec/sofa.png";

const Tabel = () => {
  return (
    <div className='bg-[#FAF4F4] h-[672px] w-full flex justify-center items-center'>
      <div className='flex space-x-10'>
        <div className='relative'>
          <Image src={tabel} alt='side table' className='w-[580px] h-[550px]' />
          <div className='absolute bottom-0 left-0 mb-2 ml-2'>
            <p className='text-[36px] mb-2'>Side Table</p>
            <Link href="/shop">
            <p className="text-[24px] underline underline-offset-4">View More</p>
            </Link>
          </div>
        </div>
        <div className='relative'>
          <Image src={sofa} alt='sofa' className='w-[580px] h-[550px] px-5' />
          <div className='absolute bottom-0 left-0 mb-2 ml-2'>
            <p className='text-[36px] mb-2'>Sofa</p>
            <Link href="/shop">
            <p className="text-[24px] underline underline-offset-4">View More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabel;
