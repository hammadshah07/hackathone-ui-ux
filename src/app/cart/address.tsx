import React from 'react'
import Image from "next/image";
import shop from "../../../images/heroSec/shop-sec.png";
import Link from "next/link";
import logo from "../../../images/heroSec/Meubel House_Logos-05.png";

const Account = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image */}
      <Image src={shop} alt="picture" className="w-full h-auto" />
      <div className="absolute inset-0 flex flex-col justify-center items-center mb-20">
        {/* Logo */}
        <Image src={logo} alt="logo" className="w-16 h-16" />
        {/* Shop Heading */}
        <h2 className="text-black text-4xl font-bold">Cart</h2>
        {/* Breadcrumb Navigation */}
        <div className="flex text-black text-[15px] mt-2 space-x-2 pt-5">
          <Link href="/">Home</Link>
          <span>{'>'}</span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  )
}

export default Account

