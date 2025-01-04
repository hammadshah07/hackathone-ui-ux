import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full h-[300px] flex flex-col items-center'>
      <div className='w-full max-w-6xl flex justify-between p-5'>
        {/* Address Section */}
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-[#9F9F9F] text-[16px]'>400 University Drive Suite 200 Coral Gables,</p>
          <p className='text-[#9F9F9F] text-[16px]'>FL33134 USA</p>
        </div>
        
        {/* Links Section */}
        <div className='flex flex-col items-center space-y-3'>
          <h3 className='text-[#9F9F9F] text-[20px]'>Links</h3>
          <ul className='space-y-3'>
            <li className='text-[13px]'><Link href="/">Home</Link></li>
            <li className='text-[13px]'><Link href="/shop">Shop</Link></li>
            <li className='text-[13px]'><Link href="/about">About</Link></li>
            <li className='text-[13px]'><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        
        {/* Help Section */}
        <div className='flex flex-col items-center space-y-3'>
          <h3 className='text-[#9F9F9F] text-[20px]'>Help</h3>
          <ul className='space-y-3'>
            <li className='text-[13px]'><Link href="/checkout">Payment Option</Link></li>
            <li className='text-[13px]'>Returns</li>
            <li className='text-[13px]'>Privacy Policies</li>
          </ul>
        </div>
        
        {/* Newsletter Section */}
        <div className='flex flex-col items-center space-y-3'>
          <h2 className='text-[#9F9F9F] text-[20px]'>Newsletters</h2>
          <div className='flex items-center space-x-3'>
            <input
              type='email'
              placeholder=' Enter Your email address'
              className='border-0 border-b border-gray-500 p-2 w-[200px] text-[13px] focus:ring-0 focus:outline-none'
            />
            <p className='font-semibold underline underline-offset-4'>Subscribe</p>
          </div>
        </div>
      </div>
      {/* Horizontal Line */}
      <hr className='w-[1100px] border-t-2 border-gray-300 mt-10' />
      <div className='w-full max-w-6xl px-5'> 
        <p className='pt-5 text-left'>2022 Meubel House. All rights reserved.</p> </div>
    </div>
  );
};

export default Footer;
