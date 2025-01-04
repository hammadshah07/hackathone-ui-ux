import React from 'react'
import Nav from './Nav'
import SingleProduct from './product'
import Additional_INFO from './additonal_info'
import Related_products from './related'


const Page = () => {
  return (
    <div>
      <Nav/> 
      <SingleProduct/>
      <Additional_INFO/>
      <Related_products/>
    </div>
  )
}

export default Page
