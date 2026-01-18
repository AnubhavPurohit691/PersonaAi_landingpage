"use client"
import Image from "next/image"
import { motion, useMotionValue, animate, useTransform } from "motion/react"
import { useEffect, useState } from "react"

const imageMap = [
  { id: 1, image_url: "/photo/1.png" },
  { id: 2, image_url: "/photo/2.png" },
  { id: 3, image_url: "/photo/2.png" },
  { id: 4, image_url: "/photo/1.png" },
  { id: 5, image_url: "/photo/1.png" },
  { id: 6, image_url: "/photo/2.png" },
]

// Triple the images for a denser circle and smoother infinite loop
const images = [...imageMap, ...imageMap, ...imageMap]

const ImageSection = () => {
  const rotation = useMotionValue(0)

  // Configure the carousel
  const [cardWidth, setCardWidth] = useState(140)
  const [radius, setRadius] = useState(300)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setRadius(1200) // Adjusted for 400px cards to keep gaps small
        setCardWidth(400) // Much larger images
        setIsMobile(false)
      } else if (window.innerWidth >= 768) {
        setRadius(800)
        setCardWidth(250)
        setIsMobile(false)
      } else {
        setRadius(400)
        setCardWidth(200) 
        setIsMobile(true)
      }
    }

    // Set initial values
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []) 

  useEffect(() => {
    if (isMobile) return;

    // Slow motion: 80s duration
    const controls = animate(rotation, 360, {
      ease: "linear",
      duration: 80, 
      repeat: Infinity,
      repeatType: "loop", 
      from: 0
    })

    return () => controls.stop()
  }, [rotation, isMobile])

  if (isMobile) {
    return (
      <div className="h-80 w-full overflow-hidden flex items-center bg-transparent relative">
         <motion.div 
           className="flex gap-4"
           animate={{
             x: ["0%", "-50%"] // Move halfway because we duplicated list for seamless loop
           }}
           transition={{
             ease: "linear",
             duration: 120,
             repeat: Infinity,
           }}
         >
           {[...images, ...images].map((item, index) => (
             <div 
               key={`mobile-${index}`}
               className="relative shrink-0 rounded-2xl overflow-hidden border border-white/10"
               style={{
                 width: cardWidth,
                 height: cardWidth * 1.4,
               }}
             >
                <div className="relative w-full h-full bg-black/80">
                  <Image
                    src={item.image_url}
                    alt="image"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                </div>
             </div>
           ))}
         </motion.div>
         
         {/* Blur Overlays for Mobile */}
         <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none backdrop-blur-[1px]" style={{ maskImage: "linear-gradient(to right, black, transparent)" }}></div>
         <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none backdrop-blur-[1px]" style={{ maskImage: "linear-gradient(to left, black, transparent)" }}></div>
      </div>
    )
  }

  return (
    <div 
      className="h-80 w-full overflow-hidden flex items-center justify-center relative bg-transparent"
      style={{ 
        perspective: "400px", 
         maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
      }}
    >
      {/* 3D Scene Container */}
      <div 
        className="relative flex items-center justify-center" 
        style={{ 
          transform: "translateZ(400px)", // Very close for massive side-scale effect
          transformStyle: "preserve-3d" 
        }}
      >
        
        {/* Rotating Carousel */}
        <motion.div 
          className="relative flex items-center justify-center"
          style={{ 
            rotateY: rotation,
            transformStyle: "preserve-3d" 
          }}
        >
          {images.map((item, index) => {
            const angle = (360 / images.length) * index
            
            return (
              <Card 
                key={`${item.id}-${index}`} 
                item={item} 
                angle={angle}
                radius={radius}
                cardWidth={cardWidth}
              />
            )
          })}
        </motion.div>
      </div>

       {/* Blur Overlays */}
       <div className="absolute left-0 top-0 bottom-0 w-60 z-10 pointer-events-none backdrop-blur-[4px]" style={{ maskImage: "linear-gradient(to right, black, transparent)" }}></div>
       <div className="absolute right-0 top-0 bottom-0 w-60 z-10 pointer-events-none backdrop-blur-[4px]" style={{ maskImage: "linear-gradient(to left, black, transparent)" }}></div>
    </div>
  )
}

const Card = ({ 
  item, 
  angle, 
  radius,
  cardWidth
}: { 
  item: typeof imageMap[0], 
  angle: number, 
  radius: number,
  cardWidth: number
}) => {
  return (
    <div
      className="absolute flex items-center justify-center rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10"
      style={{
        width: cardWidth,
        height: cardWidth * 1.4, // Aspect ratio
        // Position on the circle - Negative Z for Inner/Concave curve
        transform: `rotateY(${angle}deg) translateZ(-${radius}px)`,
        // Hide the backface so we don't see the return path (front of cylinder)
        backfaceVisibility: "hidden", 
      }}
    >
      <div className="relative w-full h-full bg-black/80">
        <Image
          src={item.image_url}
          alt="image"
          fill
          className="object-cover"
        />
        {/* Optional Overlay for depth or shine */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>
    </div>
  )
}

export default ImageSection