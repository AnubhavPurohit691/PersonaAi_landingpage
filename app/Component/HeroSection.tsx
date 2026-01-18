import React from 'react'
import Hero_first_Section from './HeroSectionComponents/HeroSection'
import ImageSection from './HeroSectionComponents/ImageSection'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-32 '>
      <Hero_first_Section />
      <ImageSection/>
    </div>
  )
}

export default HeroSection
