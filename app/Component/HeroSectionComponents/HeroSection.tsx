import { FaArrowCircleRight } from 'react-icons/fa'
import { imbue } from '../../layout'

const Hero_first_Section = () => {
  return (
    <div className=' flex flex-col gap-10 items-center pt-20 md:pt-32'>
      <div className='gap-4 items-center flex flex-col text-center'>
        <div className={`text-4xl md:text-6xl ${imbue.className} `}  >Steamline Your Team,</div>
        <div className='font-bold  text-5xl md:text-7xl '>Super Charge Your Workflow</div>
      </div>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-1 items-center text-center'>
          <div className='text-base md:text-lg text-gray-500'>All-in-one platform to plan, collaborate.
          </div>
          <div className='text-base md:text-lg text-gray-500'>and deliver -- faster and smarter.</div>
        </div>
        <div className=' flex items-center text-center justify-center'>
          <button className='bg-black  cursor-pointer flex gap-2 text-white py-1   rounded-4xl'>
            <div className='pl-6 pt-2 '>
              Get started for Free
            </div>
            <FaArrowCircleRight color="grey" size={40} className='pr-1' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero_first_Section
