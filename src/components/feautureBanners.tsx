import React from 'react'

const FeautureBanners = () => {
  return (
    <div>
       <div className='w-full h-[200px] bg-[#FAF4F4] flex justify-between'>
        <div className='flex flex-col  justify-center items-center space-y-3'>
          <h1 className='text-[24px]'>Free Delivery</h1>
          <p className='text-[13px] text-[#9F9F9F]'>For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className='flex flex-col  justify-center items-center space-y-3'>
          <h1 className='text-[24px]'>90 Days Returns</h1>
          <p className='text-[13px] text-[#9F9F9F]'>If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div className='flex flex-col  justify-center items-center space-y-3'>
          <h1 className='text-[24px]'>Secure Payment</h1>
          <p className='text-[13px] text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default FeautureBanners
