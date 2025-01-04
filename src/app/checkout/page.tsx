import React from 'react'
import Checkout from './checkout'
import Billing from './billing'
import Pricing from './pricing'
import FeautureBanners from '@/components/feautureBanners'

const Check = () => {
  return (
    <div>
      <Checkout/>
      <div className='flex justify-between my-10'>
      <Billing/>
      <Pricing/>
      </div>
      <FeautureBanners/>
    </div>
  )
}

export default Check
