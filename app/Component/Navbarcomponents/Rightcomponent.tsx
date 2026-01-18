import { FaArrowCircleRight } from "react-icons/fa"

export const Rightcomponent = () => {
  return (
    <>
      <div className=" flex gap-6 text-sm  items-center">
        <div className="cursor-pointer hidden md:block">
          About
        </div>
        <div className="cursor-pointer hidden md:block">
          Pricing
        </div>
        <div className="cursor-pointer hidden md:block">
          Contact
        </div>
        <button className="bg-black pl-4 pr-1 text-sm cursor-pointer  py-1 hidden md:flex gap-1   text-white rounded-4xl">
          <div className="pt-1">
          Get started
          </div>
          <div className="pl-1">
            <FaArrowCircleRight color="grey" size={26} />
          </div>
        </button>
      </div>
    </>
  )
}

