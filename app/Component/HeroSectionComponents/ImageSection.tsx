"use client"
import Image from "next/image"
import {motion} from "motion/react"
const imageMap =[
  { id:1,
    image_url:"/photo/1.png"
  },
  { id:2,
    image_url:"/photo/2.png"
  },
{ id:3,
    image_url:"/photo/2.png"
  },
{ id:4,
    image_url:"/photo/1.png"
  },
{ id:5,
    image_url:"/photo/1.png"
  },
  { id:6,
    image_url:"/photo/2.png"
  },
]
const ImageSection = () => {
  const getCenterIndex =Math.floor(imageMap.length/2)
  function getScale (index:number){
const distance = Math.abs(index-getCenterIndex)
return Math.max(0.6,1-distance*1.5)
  }
  return (
   <div 
   
   className="h-60 w-full    flex gap-2">
      {imageMap.map((p) => (
        <motion.div
        key={p.id} className="relative h-full w-full">
          <Image
            src={p.image_url}
            alt="image"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageSection
