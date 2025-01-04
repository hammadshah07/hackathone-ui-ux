import React from 'react'
import Image from 'next/image'
import mayaS from "../../../images/heroSec/Asgaard sofa 1.png"
import { AiOutlineDelete } from "react-icons/ai";
import Link from 'next/link';

const AddCart = () => {
  return (
    <div className='w-full h-[345px] mt-10 flex justify-between px-10'>
      <div className='flex flex-col space-y-5'>
        <div className='flex ml-20 pl-24 gap-x-16 mb-4 w-[700px] h-[55px] bg-[#FFF9E5] items-center'>
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div>
        {/* Product Row */}
        <div className='flex items-center gap-x-10 w-[700px] h-[100px]'>
          <Image src={mayaS} alt='Maya Sofa' className='w-[90px] h-[90px] border rounded-md bg-[#FBEBB5]' />
          <p className='text-[15px] text-[#9F9F9F] ml-3'>Asgaard Sofa</p>
          <p className='text-[#9F9F9F] text-[15px]'>Rs. 250,000.00</p>
          <button className='w-[40px] h-[40px] border border-[#9F9F9F] rounded'>1</button>
          <p>Rs. 250,000.00</p>
          <p className='text-[24px] text-[#b09334]'><AiOutlineDelete /></p>
        </div>
      </div>
      {/* Cart Totals */}
      <div className='w-[300px] h-[290px] bg-[#FFF9E5] p-4 rounded-2xl shadow-md mx-auto'>
        <h1 className='text-[24px] text-center mb-6'>Cart Totals</h1>
        <div className='flex flex-col space-y-4'>
          <div className='flex justify-between pl-3'>
            <p>Subtotal</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className='flex justify-between pl-3'>
            <p>Total</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className='flex justify-center pt-7'>
            <Link href='/checkout'>
          <button className='w-[100px] h-[40px] border border-black text-black rounded-2xl mt-mx-auto'>Checkout</button></Link></div>
        </div>
      </div>
    </div>


  )
}

export default AddCart
