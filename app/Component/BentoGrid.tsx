import Image from 'next/image'
import React from 'react'

const BentoGrid = () => {
  return (
    <div className='max-w-7xl mx-auto py-10 px-0 md:px-4 lg:px-12 w-full'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='relative md:col-span-2 h-64 rounded-2xl overflow-hidden'>
              <Image src={"/photo/1.png"} alt="image" fill className='object-cover'/>
          </div>
          <div className='relative md:col-span-1 h-64 rounded-2xl overflow-hidden'>
              <Image src={"/photo/2.png"} alt='image2' fill className='object-cover'/>      
          </div>
          <div className='relative md:col-span-1 h-64 rounded-2xl overflow-hidden'>
              <Image src={"/photo/1.png"} alt='image3' fill className='object-cover'/>
          </div>
          <div className='relative md:col-span-2 h-64 rounded-2xl overflow-hidden'>
              <Image src={"/photo/2.png"} alt='image4' fill className='object-cover'/>
          </div>
      </div>
    </div>
  )
}

export default BentoGrid
