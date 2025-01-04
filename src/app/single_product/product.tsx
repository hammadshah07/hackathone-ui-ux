import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mayaS from "../../../images/singleProduct/Maya sofa three seater (1) 1.png";
import outdoor from "../../../images/singleProduct/Outdoor sofa set 1.png";
import outdoor2 from "../../../images/singleProduct/Outdoor sofa set 2 (1).png";
import outdoor3 from "../../../images/singleProduct/Outdoor sofa set_2 1.png";
import asgaard from "../../../images/heroSec/Asgaard sofa 1.png";
import { RiStarSFill } from "react-icons/ri";
import { FaStarHalfStroke } from "react-icons/fa6";
import { SheetDemo } from './sheet';

const SingleProduct = () => {
  return (
    <div className='flex flex-col w-full h-auto my-10'>
      <div className='flex w-full'>
        {/* Small Images Column */}
        <div className='flex flex-col space-y-5 ml-10'>
          <div className='flex flex-col w-[100px] h-[100px] border rounded-lg bg-[#FFF9E5]'>
            <Image src={mayaS} alt='Maya Sofa' className='w-[90px] h-[90px]' />
          </div>
          <div className='flex flex-col w-[100px] h-[100px] border rounded-lg bg-[#FFF9E5]'>
            <Image src={outdoor} alt='Outdoor Sofa 1' className='w-[90px] h-[90px]' />
          </div>
          <div className='flex flex-col w-[100px] h-[100px] border rounded-lg bg-[#FFF9E5]'>
            <Image src={outdoor2} alt='Outdoor Sofa 2' className='w-[90px] h-[90px]' />
          </div>
          <div className='flex flex-col w-[100px] h-[100px] border rounded-lg bg-[#FFF9E5]'>
            <Image src={outdoor3} alt='Outdoor Sofa 3' className='w-[90px] h-[90px]' />
          </div>
        </div>
        {/* Main Product Image */}
        <div className='flex justify-center items-center border rounded-2xl bg-[#FFF9E5] w-[345px] h-[400px] mx-6'>
          <Image src={asgaard} alt='Asgaard Sofa' className='w-[323px] h-[350px]' />
        </div>
        {/* Product Details */}
        <div className='flex flex-col'>
          <h1 className='text-[24px]'>Asgaard Sofa</h1>
          <p className='text-[#9F9F9F]'>Rs. 250,000.00</p>
          {/* Star Rating and Vertical Line */}
          <div className='flex items-center space-x-2'>
            <RiStarSFill style={{ color: '#FFD700' }} />
            <RiStarSFill style={{ color: '#FFD700' }} />
            <RiStarSFill style={{ color: '#FFD700' }} />
            <RiStarSFill style={{ color: '#FFD700' }} />
            <FaStarHalfStroke style={{ color: '#FFD700' }} />
            <div className='border-l-2 border-gray-500 h-10 mx-4'></div>
            <p className='text-[#9F9F9F]'>5 customers reviews</p>
          </div>
          {/* Product Description */}
          <div className='w-[420px] h-[80px] pt-3'>
            <p className='text-[13px]'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
          </div>
          {/* Size Options */}
          <div className='flex flex-col my-5'>
            <p className='text-[#9F9F9F]'>Size</p>
            <div className='flex space-x-3 mt-2'>
              <button className='w-7 h-7 border rounded bg-[#FBEBB5]'>L</button>
              <button className='w-7 h-7 border rounded bg-[#FAF4F4]'>XL</button>
              <button className='w-7 h-7 border rounded bg-[#FAF4F4]'>XS</button>
            </div>
          </div>
          {/* Color Options */}
          <div className='flex flex-col'>
            <p className='text-[#9F9F9F]'>Color</p>
            <div className='flex space-x-3 mt-2'>
              <button className='w-6 h-6 border rounded-full bg-[#816DFA]'></button>
              <button className='w-6 h-6 border rounded-full bg-[#000]'></button>
              <button className='w-6 h-6 border rounded-full bg-[#CDBA7B]'></button>
            </div>
            {/* Quantity */}
            <div className='flex space-x-3 mt-5'>
              <Link href="/cart">
                <div className='border rounded border-[#9F9F9F] w-[80px] h-[40px] flex justify-center items-center'>- 1 +</div>
              </Link>
              <SheetDemo/>
            </div>
          </div>
          {/* Horizontal Line */}
          <hr className='w-[420px] mt-10 border-gray-500' />
          {/* Additional Details */}
          <div className='flex justify-between w-[250px] h-auto mt-5'>
            <div className='flex flex-col space-y-3'>
              <p className='text-[#9F9F9F] text-[14px]'>SKU</p>
              <p className='text-[#9F9F9F] text-[14px]'>Category</p>
              <p className='text-[#9F9F9F] text-[14px]'>Tags</p>
              <p className='text-[#9F9F9F] text-[14px]'>Share</p>
            </div>
            <div className='flex flex-col space-y-3'>
              <p className='text-[#9F9F9F] text-[14px]'>: SS001</p>
              <p className='text-[#9F9F9F] text-[14px]'>: Sofas</p>
              <p className='text-[#9F9F9F] text-[14px]'>: Sofa,chair,Home,Shop</p>
              <p className='flex space-x-4'>: <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-twitter"></i></p>
            </div>
          </div>
        </div>
      </div>
      {/* Full-Width Horizontal Line */}
      <hr className='w-full mt-10 border-gray-500' />
    </div>
  );
}

export default SingleProduct;
