import Link from "next/link"

export const Leftcomponent = () => {
  const linkClasses = "cursor-pointer hidden md:block relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full";
  
  return (
    <>
      <Link href="#" className={linkClasses}>
        Services
      </Link>
      <Link href="#" className={linkClasses}>
        Blog
      </Link>
      <Link href="#" className={linkClasses}>
        Product
      </Link>
      <Link href="#" className={linkClasses}>
        Services
      </Link>
    </>
  )
}

