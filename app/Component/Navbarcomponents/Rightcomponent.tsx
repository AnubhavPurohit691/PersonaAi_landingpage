import Link from "next/link"
import { FaArrowCircleRight } from "react-icons/fa"

export const Rightcomponent = () => {
  const linkClasses = "cursor-pointer hidden md:block relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full";

  return (
    <>
      <div className=" flex gap-6 text-sm  items-center">
        <Link href="#" className={linkClasses}>
          About
        </Link>
        <Link href="#" className={linkClasses}>
          Pricing
        </Link>
        <Link href="#" className={linkClasses}>
          Contact
        </Link>
        <button className="bg-black pl-4 flex items-center  text-sm cursor-pointer  px-1 py-1 hidden md:flex gap-1 text-white rounded-4xl">
          <div className="">
            Get started
          </div>
          <div className="pl-1">
            <FaArrowCircleRight color="white" size={26} />
          </div>
        </button>
      </div>
    </>
  )
}

