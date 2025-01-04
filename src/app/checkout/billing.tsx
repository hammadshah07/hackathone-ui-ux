import React from 'react';

const Billing = () => {
  return (
    <div className='w-[400px] h-auto flex flex-col items-center p-4 mx-auto'>
      {/* Header */}
      <div className='flex justify-center mb-4'>
        <h1 className='text-[24px]'>Billing Detail</h1>
      </div>

      {/* First Name and Last Name */}
      <div className='flex space-x-4 mb-4 w-full'>
        <div className='flex flex-col w-1/2'>
          <p>First Name</p>
          <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='First Name' />
        </div>
        <div className='flex flex-col w-1/2'>
          <p>Last Name</p>
          <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Last Name' />
        </div>
      </div>

      {/* Other Billing Details */}
      <div className='flex flex-col w-full'>
        <p className='text-[13px] my-1'>Company Name (optional)</p>
        <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Company Name' />
        <p className='text-[13px] my-1'>Country / Region</p>
        <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Country / Region' />
        <p className='text-[13px] my-1'>Street Address</p>
        <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Street Address' />
        <p className='text-[13px] my-1'>Town / City</p>
        <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Town / City' />
        <p className='text-[13px] my-1'>Province</p>
        <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Province' />
        <p className='text-[13px] my-1'>Zip Code</p>
        <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Zip Code' />
        <p className='text-[13px] my-1'>Phone</p>
        <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Phone' />
        <p className='text-[13px] my-1'>Email Address</p>
        <input type='email' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Email Address' />
      </div>
    </div>
  );
}

export default Billing;
