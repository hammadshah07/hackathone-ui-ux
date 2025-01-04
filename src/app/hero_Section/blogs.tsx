import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import rectangle from "../../../images/heroSec/Rectangle 13.png"
import rectangleOne from "../../../images/heroSec/Rectangle 14.png"
import rectangleTwo from "../../../images/heroSec/Rectangle 15.png"

const Blogs = () => {
  return (
    <div className='w-full h-[600px] flex items-center pt-10 flex-col'>
      <div>
        <h3 className='text-[34px] font-bold text-center pb-5'>Our Blogs</h3>
        <p className='text-[16px] text-[#9F9F9F] text-center'>Find a bright ideal to suit your taste with our great selection</p>
      </div>
      <div className='flex justify-between'>
        <div>
        <Link href="/blog">
          <Image src={rectangle} alt='picture' className='w-[240px] h-[240px] mx-5 pt-10' />
          </Link>
          <p className=' pt-5 text-[13px] ml-6'>Going all-in with millennial design</p>
          <Link href="/blog">
          <p className='font-bold text-center pt-3 underline underline-offset-8'>Read More</p>
          </Link>
          <p className='text-[#9F9F9F] text-[10px] text-center pt-4'>5 min 12 Oct 2022</p>
        </div>
        <div>
        <Link href="/blog">
          <Image src={rectangleOne} alt='picture' className='w-[240px] h-[240px] mx-5 pt-10' />
          </Link>
          <p className=' pt-5 text-[13px] ml-6'>Going all-in with millennial design</p>
          <Link href="/blog">
          <p className='font-bold text-center pt-3 underline underline-offset-8'>Read More</p>
          </Link>
          <p className='text-[#9F9F9F] text-[10px] text-center pt-4'>5 min 12 Oct 2022</p>
        </div>
        <div>
        <Link href="/blog">
          <Image src={rectangleTwo} alt='picture' className='w-[240px] h-[240px] mx-5 pt-10' />
          </Link>
          <p className=' pt-5 text-[13px] ml-6'>Going all-in with millennial design</p>
          <Link href="/blog">
          <p className='font-bold text-center pt-3 underline underline-offset-8'>Read More</p>
          </Link>
          <p className='text-[#9F9F9F] text-[10px] text-center pt-4'>5 min 12 Oct 2022</p>
        </div>
      </div>
      <div className='flex justify-center items-center pt-8'>
        <Link href="/blog">
        <p className='underline underline-offset-8 text-[14px] font-semibold'>View All Post</p>
        </Link>
      </div>
    </div>
  )
}

export default Blogs
