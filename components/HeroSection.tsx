
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import DishOrbit from './DishOrbit'
import CoffeeOrbit from './CoffeeOrbit'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark/10 to-cream-warm/20" />
      
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center px-6">
        {/* Left content */}
        <div className="md:w-1/2 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading leading-tight mb-6"
          >
            Where Gourmet Food Meets Signature Brew
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 max-w-lg"
          >
            A premium fusion of rich flavors, handcrafted dishes, and unforgettable coffee moments — all in one place.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            <button className="bg-accent-saffron text-cream-light px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
              Explore Menu
            </button>
            <button className="border-2 border-coffee-dark px-6 py-3 rounded-full font-medium hover:bg-coffee-dark hover:text-cream-light transition-all">
              Reserve a Table
            </button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-sm text-coffee-dark/70"
          >
            Freshly brewed • Chef-crafted • Premium experience
          </motion.p>
        </div>
        
        {/* Right side - 3D orbits */}
        <div className="md:w-1/2 h-full relative">
          <Canvas className="absolute inset-0">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <DishOrbit />
            <CoffeeOrbit />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
  
