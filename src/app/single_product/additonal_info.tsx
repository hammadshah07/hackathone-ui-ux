import React from 'react';
import cloud from "../../../images/singleProduct/Cloud sofa three seater + ottoman_1 1.png";
import cloud2 from "../../../images/singleProduct/Cloud sofa three seater + ottoman_2 1.png";
import Image from 'next/image';

const Additional_INFO = () => {
  return (
    <div className=''>
      {/* Navigation Tabs */}
      <div className='flex justify-center space-x-5 mx-10'>
        <h1>Description</h1>
        <h1 className='text-[#9F9F9F]'>Additional Information</h1>
        <h1 className='text-[#9F9F9F]'>Reviews [5]</h1>
      </div>
      {/* Description Text */}
      <div className='flex flex-col w-full max-w-[1000px] mx-auto h-auto mt-5 text-[13px] text-[#9F9F9F] text-center'>
        <p className='my-6 mx-4'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p className='mt-3 mx-4'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      </div>
      {/* Images Section */}
      <div className='flex space-x-5 h-[290px] justify-center items-center'>
        <div className='w-[420px] h-[260px] bg-[#FFF9E5] flex justify-center items-center'>
          <Image src={cloud2} alt='three seater' className='w-[400px] h-[250px]' />
        </div>
        <div className='w-[420px] h-[260px] bg-[#FFF9E5] flex justify-center items-center'>
          <Image src={cloud} alt='three seater' className='w-[400px] h-[250px]' />
        </div>
      </div>
    </div>
  );
}

export default Additional_INFO;
