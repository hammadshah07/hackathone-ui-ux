import React from 'react';
import Image from 'next/image';
import picture_1 from '../../../images/blogs_Image/Rectangle 68 (2).png';
import picture_2 from '../../../images/blogs_Image/Rectangle 68 (1).png';
import picture_ from '../../../images/blogs_Image/Rectangle 68 (2).png';
import { IoPerson } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"; // Importing search icon
import image1 from "../../../images/blogs_Image/Rectangle 69 (1).png";
import image2 from "../../../images/blogs_Image/Rectangle 69 (2).png";
import image3 from "../../../images/blogs_Image/Rectangle 69 (3).png";
import image4 from "../../../images/blogs_Image/Rectangle 69 (4).png";

const Section1 = () => {
  return (
    <div className='flex justify-between w-full h-auto px-10 pt-10'>
      <div className='w-[650px] h-[1650px] space-y-5'>

        {/* First Image and Details */}
        <Image src={picture_} alt='Blog Image 1' className='w-[490px] h-[300px]' />
        <div className="flex items-center text-[#9F9F9F] space-x-3 text-[15px]">
          <IoPerson /><span>Admin</span>
          <FaCalendar /><span className='pl-1'>14 Oct 2022</span>
          <FaTag /><span className='pl-1'>Wood</span>
        </div>
        <h1>Going all-in with Millennial</h1>
        <p className='text-[13px] text-[#9F9F9F]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis tenetur expedita adipisci praesentium.
          Repudiandae aspernatur commodi nesciunt dolorum similique voluptate tempora explicabo quae, dolorem ipsum quibusdam
          sit eaque maiores quas neque aliquam, quis sed!
        </p>
        <p className='underline underline-offset-8 text-[14px]'>Read More</p>

        {/* Second Image and Details */}
        <Image src={picture_2} alt='Blog Image 2' className='w-[490px] h-[300px]' />
        <div className="flex items-center text-[#9F9F9F] space-x-3 text-[15px]">
          <IoPerson /><span className='pl-1'>Admin</span>
          <FaCalendar /><span className='pl-1'>14 Oct 2022</span>
          <FaTag /><span className='pl-1'>Wood</span>
        </div>
        <h1>Going all-in with Millennial</h1>
        <p className='text-[13px] text-[#9F9F9F]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis tenetur expedita adipisci praesentium.
          Repudiandae aspernatur commodi nesciunt dolorum similique voluptate tempora explicabo quae, dolorem ipsum quibusdam
          sit eaque maiores quas neque aliquam, quis sed!
        </p>
        <p className='underline underline-offset-8 text-[14px]'>Read More</p>

        {/* Third Image and Details */}
        <Image src={picture_1} alt='Blog Image 3' className='w-[490px] h-[300px]' />
        <div className="flex items-center text-[#9F9F9F] space-x-3 text-[15px]">
          <IoPerson /><span className='pl-1'>Admin</span>
          <FaCalendar /><span className='pl-1'>14 Oct 2022</span>
          <FaTag /><span className='pl-1'>Wood</span>
        </div>
        <h1>Going all-in with Millennial</h1>
        <p className='text-[13px] text-[#9F9F9F]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis tenetur expedita adipisci praesentium.
          Repudiandae aspernatur commodi nesciunt dolorum similique voluptate tempora explicabo quae, dolorem ipsum quibusdam
          sit eaque maiores quas neque aliquam, quis sed!
        </p>
        <p className='underline underline-offset-8 text-[14px]'>Read More</p>
        <div className='flex justify-center items-center space-x-5 mt-10 mb-10'>
        <button className='w-10 h-10 bg-[#FBEBB5] text-black] border'>1</button>
        <button className='w-10 h-10 bg-[#FFF9E5] text-black border'>2</button>
        <button className='w-10 h-10 bg-[#FFF9E5] text-black border'>3</button>
        <button className='w-16 h-10 bg-[#FFF9E5] text-black border rounded-md font-mono'>Next</button>
      </div>
      </div>

      {/* Sidebar Section */}
      <div className='w-[300px] h-auto flex flex-col'>
        <div className='pt-10 flex justify-center'>
          <div className='relative'>
            <input
              type="text"
              className='border w-[280px] h-[40px] rounded-lg border-black pl-10 pr-10'
            />
            <FaSearch
              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9F9F9F]'
            />
          </div>
        </div>

        <div className='pt-5 flex justify-center'>
          <h1>Categories</h1>
        </div>

        <div className='flex justify-between px-4'>
          <ul className='space-y-10 text-[#9F9F9F]'>
            <li>Craft</li>
            <li>Design</li>
            <li>Handmade</li>
            <li>Interior</li>
            <li>Wood</li>
          </ul>
          <ul className='space-y-10 text-[#9F9F9F]'>
            <li>2</li>
            <li>8</li>
            <li>7</li>
            <li>1</li>
            <li>6</li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div className='flex flex-col mt-10 w-[300px]'>
          <h1 className='text-center text-[20px]'>Recent Posts</h1>
          <div className='flex flex-col space-y-6 mt-5 px-5'>
            <div className='flex items-center space-x-3'>
              <Image src={image1} alt='Recent Post 1' className='w-[80px] h-[70px]' />
              <div>
                <p className='text-[13px]'>Going all-in with millennial design</p>
                <p className='text-[#9F9F9F] text-[12px]'>03 Aug 2022</p>
              </div>
            </div>
            <div className='flex items-center space-x-3'>
              <Image src={image2} alt='Recent Post 2' className='w-[80px] h-[70px]' />
              <div>
                <p className='text-[13px]'>Exploring new ways of decorating</p>
                <p className='text-[#9F9F9F] text-[12px]'>03 Aug 2022</p>
              </div>
            </div>
            <div className='flex items-center space-x-3'>
              <Image src={image3} alt='Recent Post 3' className='w-[80px] h-[70px]' />
              <div>
                <p className='text-[13px]'>Handmade pieces that took time to make</p>
                <p className='text-[#9F9F9F]  text-[12px]'>03 Aug 2022</p>
              </div>
            </div>
            <div className='flex items-center space-x-3'>
              <Image src={image4} alt='Recent Post 4' className='w-[70px] h-[70px]' />
              <div>
                <p className='text-[13px]'>Modern home in Milan</p>
                <p className='text-[#9F9F9F] text-[12px]'>03 Aug 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
