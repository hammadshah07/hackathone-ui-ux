import React from 'react';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { BsViewList } from 'react-icons/bs';

const FilterSection = () => {
  return (
    <div className='w-full h-[80px] flex justify-between bg-[#FAF4F4] mt-10 mb-10 px-5'>
      {/* Filter and View Icons */}
      <div className='flex justify-center items-center space-x-5 ml-10'>
        <p className='flex items-center text-2xl'>
          <HiOutlineAdjustmentsHorizontal />
        </p>
        <p className='text-lg'>Filter</p>
        <p className='text-2xl'>
          <BsViewList />
        </p>
        {/* Vertical Line */}
        <div className='border-l-2 border-gray-500 h-10 mx-4'></div>
        <p>Showing 1–16 of 32 results</p>
      </div>
      {/* Show and Sort Options */}
      <div className='flex justify-center items-center space-x-3'>
        <p>Show</p>
        <button className='border w-10 h-10 bg-white text-[#9F9F9F]'>16</button>
        {/* Sort By Options */}
        <div className='flex justify-center items-center space-x-3'>
          <p>Sort by</p>
          <button className='border w-40 h-10 bg-white text-[#9F9F9F]'>Default</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
