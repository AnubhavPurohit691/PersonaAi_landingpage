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
  const CARD_WIDTH = 220 
  // Further increased radius to create more gap between images
  const RADIUS = 700 

  useEffect(() => {
    // Infinite loop animation 0 -> 360
    const controls = animate(rotation, 360, {
      ease: "linear",
      duration: 35, // Slower for elegance
      repeat: Infinity,
      repeatType: "loop", 
      from: 0
    })

    return () => controls.stop()
  }, [rotation])

  return (
    <div 
      className="h-80 w-full overflow-hidden flex items-center justify-center relative bg-transparent"
      style={{ 
        perspective: "1000px", // Stronger perspective for clearer curvature
         maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
      }}
    >
      {/* 3D Scene Container */}
      <div className="relative flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
        
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
                radius={RADIUS}
                cardWidth={CARD_WIDTH}
              />
            )
          })}
        </motion.div>
      </div>

       {/* Blur Overlays */}
       <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none backdrop-blur-[2px]" style={{ maskImage: "linear-gradient(to right, black, transparent)" }}></div>
       <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none backdrop-blur-[2px]" style={{ maskImage: "linear-gradient(to left, black, transparent)" }}></div>
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

