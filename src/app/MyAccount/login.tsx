import React from 'react'
import Link from 'next/link'

const LoginInfo = () => {
  return (
    <div className='w-full h-[400px] flex my-10 justify-center'>
        <div className='flex flex-col w-[500px] h-[520px]'>
            <h1 className='text-[24px] font-semibold'>Log In</h1>
            <p className='text-[13px] mt-4'>Username or Email address</p>
            <input type='text' className='w-[244px] h-[40px] my-2 border border-black rounded px-2' placeholder='email or userName' />
            <p className='text-[13px] my-1'>Password</p>
            <input type='text' className='w-[244px] h-[40px] my-2 border border-black rounded px-2' placeholder='password' />
            <div className='flex space-x-3'>
            <button className='w-[25px] h-7 border border-black rounded'></button>
            <p className='text-[13px] flex items-center'>Remember</p>
            </div>
            <div className='flex space-x-3 mt-5'>
              <Link href="/checkout">
            <button className='w-[100px] h-[40px] border border-black rounded-lg'>Login</button>
            </Link>
            <p className='text-[13px] flex items-center'>Lost your password</p>
            </div>
        </div>
        <div className='flex flex-col w-[244px] h-[520px]'>
            <h1 className='text-[24px] font-semibold'>Register</h1>
            <p className='text-[13px] mt-4'>Username or Email address</p>
            <input type='text' className='w-[244px] h-[40px] my-2 border border-black rounded px-2' placeholder='username or email' />
            <p className='text-[10px] my-3'>A link to set a new password will be sent to your email address.</p>
            <p className='text-[10px] my-3'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
            <Link href="/checkout">
            <button className='w-[100px] h-[40px] border border-black rounded-lg mt-3'>Register</button>
            </Link>
        </div>
        </div>
  )
}

export default LoginInfo
