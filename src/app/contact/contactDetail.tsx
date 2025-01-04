import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";

const ContactDetail = () => {
  return (
    <div className='w-full h-[700px] flex justify-between p-10'>
      <div className='flex flex-col items-center w-full'>
        {/* Centered Heading and Paragraph */}
        <div className='text-center mb-10'>
          <h1 className='font-semibold text-[24px]'>Get In Touch With Us</h1>
          <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero dicta temporibus nulla, impedit officia.</p>
        </div>
        

          <div className='w-full h-[700px] flex justify-between p-10'>
             <div className='flex flex-col w-full'>
             {/* Address Section */} 
            <div className='w-[200px] mt-3'><FaLocationDot className='mr-2' />
           <h2 className='text-[20px] font-semibold'>Address</h2> 
           <p>236 5th SE Avenue, New York NY10000, United States</p> 
          </div>
           {/* Phone Section */} 
          <div className='w-[200px] mt-3'> <FaPhoneAlt />
           <h2 className='text-[20px] font-semibold'>Phone</h2> 
          <p>Mobile: +(84) 546-6789</p>
           <p>Hotline: +(84) 456-6789</p> 
          </div> {/* Working Time Section */}
           <div className='w-[200px] mt-3'> <GoClockFill /> 
          <h2 className='text-[20px] font-semibold'>Working Time</h2>
           <p>Monday-Friday: 9:00 - 22:00</p>
           <p>Saturday-Sunday: 9:00 - 21:00</p> </div> </div> {/* Input Section */} <div className='flex-col'>
             <div className='w-[300px]'> 
            <p className='text-[13px] my-1'>Your name</p>
           <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Your Name' />
           <p className='text-[13px] my-1'>Email Address</p> 
          <input type='email' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Email Address' /> 
          <p className='text-[13px] my-1'>Subject</p> 
          <input type='text' className='w-full h-[40px] my-2 border border-black rounded px-2' placeholder='Subject (Optional)' />
           <p className='text-[13px] my-1'>Message</p> 
          <textarea className='w-full h-[60px] my-2 border border-black rounded px-2' placeholder='Hi, I\d like to ask about...'></textarea>
           <button className='w-full h-[40px] bg-black text-white rounded-2xl mt-4'>Submit</button> 
          </div>
           </div>
           </div>
           </div>
      </div>
    
  );
}

export default ContactDetail;
