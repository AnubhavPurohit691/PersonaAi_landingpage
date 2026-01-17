import { FaArrowCircleRight } from "react-icons/fa"

export const Rightcomponent = () => {
  return (
    <>
   <div className=" flex gap-6  items-center">
      <div className="cursor-pointer">
        About
      </div>
      <div className="cursor-pointer">
        Pricing
      </div>
      <div className="cursor-pointer">
        Contact
      </div>
        <button className="bg-black px-3 cursor-pointer  py-2 flex gap-1  text-white rounded-4xl">
          Get started
          <div className="pl-1">
          <FaArrowCircleRight color="grey" size={24} />
          </div>
        </button>
    </div> 
    </>
  )
}

