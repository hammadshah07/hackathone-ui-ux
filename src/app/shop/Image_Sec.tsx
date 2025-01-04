import React from 'react';
import Image from 'next/image';
// first row
import trenton from "../../../images/heroSec/Trenton sofa.png";
import xyz from "../../../images/heroSec/Outdoor bar table and stool 1.png";
import etc from "../../../images/heroSec/Granite dining table with dining chair 1.png";
import mask from "../../../images/heroSec/Mask group.png";
// second row
import grain from "../../../images/newsec/Grain coffee table 1.png";
import kent from "../../../images/newsec/Kent coffee table 1.png";
import teak from "../../../images/newsec/Reclaimed teak coffee table 1.png";
import round from "../../../images/newsec/Round coffee table_color 2 1.png";
// third row 
import bella from "../../../images/newsec/Bella chair and table 1.png"
import plain from "../../../images/newsec/Plain console_ 1.png"
import side from "../../../images/newsec/Reclaimed teak Sideboard 1.png"
import sjp from "../../../images/newsec/SJP_0825  1.png"
// fourth row
import Asgaard from "../../../images/heroSec/Asgaard sofa 1.png"
import table from "../../../images/heroSec/tabel.png"
import maya from "../../../images/newsec/Maya sofa three seater 1.png"
import outdoor from "../../../images/newsec/Outdoor sofa set 1.png"


const Another = () => {
  return (
    <div className='w-full h-auto px-4'>
      {/* First Row */}
      <div className='flex justify-between py-4'>
        <div>
          <Image src={trenton} alt='modular sofa' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Trenton modular sofa_3</p>
          <p className='text-[24px]'>Rs. 25,000.00</p>
        </div>
        <div>
          <Image src={etc} alt='dining table' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Granite dining table with dining chair</p>
          <p className='text-[24px]'>Rs. 25,000.00</p>
        </div>
        <div>
          <Image src={xyz} alt='bar table' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Outdoor bar table and stool</p>
          <p className='text-[24px]'>Rs. 25,000.00</p>
        </div>
        <div>
          <Image src={mask} alt='console' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Plain console with teak mirror</p>
          <p className='text-[24px]'>Rs. 25,000.00</p>
        </div>
      </div>
      {/* Second Row */}
      <div className='flex justify-between py-4'>
        <div>
          <Image src={grain} alt='grain' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Grain coffee table</p>
          <p className='text-[24px]'>Rs. 15,000.00</p>
        </div>
        <div>
          <Image src={kent} alt='kent' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Kent coffee table</p>
          <p className='text-[24px]'>Rs. 225,000.00</p>
        </div>
        <div>
          <Image src={teak} alt='teak' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Reclaimed teak coffee table</p>
          <p className='text-[24px]'>Rs. 25,200.00</p>
        </div>
        <div>
          <Image src={round} alt='coffee table' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Round coffee table</p>
          <p className='text-[24px]'>Rs. 251,000.00</p>
        </div>
      </div>
      {/* Third Row   */}
      <div className='flex justify-between py-4'>
        <div>
          <Image src={bella} alt='bella' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>bella chair and table</p>
          <p className='text-[24px]'>Rs. 100,000.00</p>
        </div>
        <div>
          <Image src={plain} alt='plain' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>plain console</p>
          <p className='text-[24px]'>Rs. 258,200.00</p>
        </div>
        <div>
          <Image src={side} alt='side' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Reclaimed teak Sideboard</p>
          <p className='text-[24px]'>Rs. 20,000.00</p>
        </div>
        <div>
          <Image src={sjp} alt='sjp' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>SJP_0825</p>
          <p className='text-[24px]'>Rs. 200,000.00</p>
        </div>
      </div>
      {/* fourth row  */}
      <div className='flex justify-between py-4'>
        <div>
          <Image src={Asgaard} alt='bella' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Asgard sofa</p>
          <p className='text-[24px]'>Rs. 250,000.00</p>
        </div>
        <div>
          <Image src={table} alt='plain' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Granite square side table</p>
          <p className='text-[24px]'>Rs. 258,200.00</p>
        </div>
        <div>
          <Image src={maya} alt='side' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Maya sofa three seater</p>
          <p className='text-[24px]'>Rs. 115,000.00</p>
        </div>
        <div>
          <Image src={outdoor} alt='sjp' className='w-[287px] h-[287px]' />
          <p className='text-[16px]'>Outdoor sofa seat</p>
          <p className='text-[24px]'>Rs. 244,000.00</p>
        </div>
      </div>
      <div className='flex justify-center items-center space-x-5 mt-10 mb-10'>
        <button className='w-10 h-10 bg-[#FBEBB5] text-black] border'>1</button>
        <button className='w-10 h-10 bg-[#FFF9E5] text-black border'>2</button>
        <button className='w-10 h-10 bg-[#FFF9E5] text-black border'>3</button>
        <button className='w-16 h-10 bg-[#FFF9E5] text-black border rounded-md font-mono'>Next</button>
      </div>
    </div>
  );
}

export default Another;
