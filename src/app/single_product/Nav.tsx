import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className='w-full h-auto px-5'>
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-[#9F9F9F] text-[15px] mt-2 space-x-2 pt-5">
        <Link href="/">Home</Link>
        <span className='text-black'>{'>'}</span>
        <span>Shop</span>
        <span className='text-black'>{'>'}</span>
        <div className='border-l-2 border-gray-500 h-6 mx-2'></div>
        <p className='text-[20px] text-black px-3'>Asgaard Sofa</p>
      </div>
    </div>
  );
}

export default Nav;
