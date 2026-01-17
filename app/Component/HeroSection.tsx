import { FaArrowCircleRight } from 'react-icons/fa'
import { imbue } from '../layout'

const HeroSection = () => {
  return (
    <div className=' flex flex-col gap-4 items-center pt-16'>
    <div className='gap-2 items-center flex flex-col'>
     <div className={`text-6xl ${imbue.className} `}  >Steamline Your Team,</div> 
     <div className='font-bold  text-4xl'>Super Charge Your Workflow</div>
    </div>
    <div className='flex flex-col gap-4'>
    <div className='flex flex-col gap-1 items-center'>
     <div className='text-md text-gray-500'>All-in-one platform to plan, collaborate.
     </div>
     <div className='text-md text-gray-500'>and deliver -- faster and smarter</div>
    </div>
    <div className=' flex items-center text-center justify-center'>
        <button className='bg-black   flex gap-2 text-white py-1   rounded-4xl'>
            <div className='pl-6 pt-2 '>
            Get started for Free
            </div>
        <FaArrowCircleRight color="grey" size={40} className='pr-1'/> 
        </button>
    </div>
    </div>
    </div>
  )
}

export default HeroSection
