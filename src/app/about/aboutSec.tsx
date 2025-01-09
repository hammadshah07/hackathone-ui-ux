// pages/about.js
import React from 'react';
import Image from 'next/image';
import sofaImage from "../../../images/About/a picture of a sofa and seaters.png"

const AboutSec = () => {
  return (
    <div className="bg-gray-100 p-6 lg:p-12">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg leading-relaxed mb-6">
        Welcome to <span className="font-semibold">[ComfyCorner]</span>, where comfort meets style! We specialize in offering a wide range of exquisite sofas and seaters that are designed to elevate your living spaces. Our mission is to provide you with furniture that not only adds elegance to your home but also offers unparalleled comfort and durability.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        At <span className="font-semibold">[ComfyCorner]</span>, we believe that every home tells a story, and our carefully curated collection of sofas and seaters helps you tell yours. Whether you are looking for a contemporary piece to make a bold statement or a classic design to add a touch of timeless charm, we have something for everyone.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Our team is dedicated to ensuring that you find the perfect fit for your home. We source the finest materials and work with skilled artisans to bring you furniture that is both beautiful and functional. Customer satisfaction is at the heart of everything we do, and we strive to make your shopping experience seamless and enjoyable.
      </p>
      <p className="text-lg leading-relaxed">
        Thank you for choosing <span className="font-semibold">[ComfyCorner]</span>. We look forward to helping you create a home that you love.
      </p>
      <Image src={sofaImage} alt="Sofa and Seaters" className="mt-6 rounded-lg shadow-lg" />
    </div>
  );
};

export default AboutSec;
