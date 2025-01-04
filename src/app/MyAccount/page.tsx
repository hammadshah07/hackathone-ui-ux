import React from 'react'
import LoginInfo from './login'
import Account from './address'
import FeautureBanners from '@/components/feautureBanners'

const page = () => {
  return (
    <div>
       <Account/> 
      <LoginInfo/>
      <FeautureBanners/>
    </div>
  )
}

export default page
