import React from 'react';

const Pricing = () => {
    return (
        <div className='w-[400px] h-auto flex flex-col items-center p-4 mx-auto'>
            <div className='flex justify-between w-full mb-4'>
                <h1 className='text-[24px] mb-5'>Product</h1>
                <h1 className='text-[24px] mb-5'>Subtotal</h1>
            </div>
            <div className='flex justify-between w-full mb-4'>
                <div className='flex flex-col w-1/2 space-y-3'>
                    <p className='text-[#9F9F9F]'>Asgaard Sofa * 1</p>
                    <p>Subtotal</p>
                    <p>Total</p>
                </div>
                <div className='flex flex-col w-1/2 text-right space-y-3'>
                    <p className='text-[#9F9F9F]'>Rs: 250,000.00</p>
                    <p className='text-[#9F9F9F]'>Rs: 250,000.00</p>
                    <p className='text-[20px] text-[#B88E2F] font-semibold'>Rs: 250,000.00</p>
                </div>
            </div>
            {/* Horizontal Line */} <hr className='w-[90%] mt-4 border-gray-300' /> {/* Additional Text */} <div className='w-full mt-4 space-y-2'>

                <form className="flex flex-col space-y-2">
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio text-blue-600" name="bank" value="price" />
                        <span className="ml-2 ">Direct bank transfer</span>
                    </label>
                </form>
                <p className='text-[13px] mb-5 text-[#9F9F9F] '> Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account..</p>
                <form className="flex flex-col space-y-2">
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio text-blue-600" name="bank" value="price" />
                        <span className="ml-2 text-[14px] text-[#9F9F9F]">direct bank transfer</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio text-blue-600" name="bank" value="price" />
                        <span className="ml-2 text-[14px] text-[#9F9F9F]">cash on delivery</span>
                    </label>
                </form>
                <p className='text-[12px] mt-5'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='text-[15px] font-semibold'>privacy policy.</span></p>
                <div className='flex justify-center items-center pt-10'>

       <button className='w-[200px] h-[40px] border rounded-2xl border-black'>place order </button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
