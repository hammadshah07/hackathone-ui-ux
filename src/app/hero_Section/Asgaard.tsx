import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Asgaard from "../../../images/heroSec/Asgaard sofa 1.png";

const AsgaardSofa = () => {
  return (
    <div className='w-full h-[639px] bg-[#FFF9E5] flex justify-between items-center'>
      <Image src={Asgaard} alt='Asgaard' className='h-[599px] w-[763px]' />
      <div className='flex flex-col items-center'>
        <p className='text-[24px] text-center'>New Arrival</p>
        <h2 className='font-bold text-[48px] pb-5 pr-10'>Asgaard Sofa</h2>
        <Link href="/single_product">
          <button className='border border-black w-[155px] h-[34px]'>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default AsgaardSofa;
