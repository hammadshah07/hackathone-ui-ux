import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='w-full h-[80px] bg-[#FBEBB5] flex items-center justify-between px-4'>
      {/* Navigation Links */}
      <div className='flex justify-center items-center flex-1 pl-[50px]'>
        <ul className='flex space-x-5 w-[66px] h-[24px]'>
          <li className='text-lg'><Link href="/">Home</Link></li>
          <li className='text-lg'><Link href="/shop">Shop</Link></li>
          <li className='text-lg'><Link href="/about">About</Link></li>
          <li className='text-lg'><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      {/* Icons */}
      <div className='flex items-center gap-5 pr-[50px]'>
      <Link href="/MyAccount">
        <i className="bi bi-person-exclamation text-2xl"></i>
        </Link>
        <i className="bi bi-search text-lg"></i>
        <i className="bi bi-heart text-lg"></i>
        <Link href="/cart">
        <i className="bi bi-cart3 text-lg"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
