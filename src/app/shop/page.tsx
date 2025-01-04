import React from 'react'
import FilterSection from './filterSection'
import Another from './Image_Sec'
import Shop from './page2'
import FeautureBanners from '@/components/feautureBanners'


const Page = () => {
  return (
    <div>
      <Shop/>
      {/* Filter Section with margin adjustments */}
      <div className="relative mt-10 mb-10">
        <FilterSection />
      </div>
      <Another />
      <FeautureBanners/>
    </div>
  )
}

export default Page
