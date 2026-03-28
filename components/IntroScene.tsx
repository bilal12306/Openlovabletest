
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useSessionStorage } from '@/lib/hooks'

export default function IntroScene() {
  const [hasSeenIntro, setHasSeenIntro] = useSessionStorage('hasSeenIntro', false)
  const introRef = useRef<HTMLDivElement>(null)
  const skipRef = useRef<HTMLButtonElement>(null)
  const timeline = useRef<gsap.core.Timeline>()

  useEffect(() => {
    if (hasSeenIntro) return

    timeline.current = gsap.timeline({
      onComplete: () => setHasSeenIntro(true)
    })

    // Scene 1: Biryani Reveal
    timeline.current.fromTo('.biryani', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    )

    // Scene 2: Camera Move + Coffee Transformation
    timeline.current.to('.biryani', {
      y: -100,
      duration: 2,
      ease: 'power2.inOut'
    }, '+=1')

    // Scene 3: Logo Emergence
    timeline.current.fromTo('.logo-text', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: 'back.out' }
    , '-=0.5')

    // Scene 4: Hyphen Split Animation
    timeline.current.to('.hyphen', {
      scaleX: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    }, '+=0.5')

    // Scene 5: Transition to Main Site
    timeline.current.to(introRef.current, {
      opacity: 0,
      pointerEvents: 'none',
      duration: 1,
      ease: 'power2.inOut'
    })

    // Skip intro button
    gsap.to(skipRef.current, {
      opacity: 1,
      delay: 2,
      duration: 0.5
    })

    return () => {
      timeline.current?.kill()
    }
  }, [hasSeenIntro, setHasSeenIntro])

  if (hasSeenIntro) return null

  return (
    <div ref={introRef} className="fixed inset-0 z-50 bg-coffee-dark flex items-center justify-center">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <BiryaniModel />
      </Canvas>
      
      <div className="relative z-10 text-center">
        <h1 className="logo-text text-cream-light text-6xl font-heading tracking-wider">
          FOOD<span className="hyphen">-</span>BREW
        </h1>
      </div>

      <button 
        ref={skipRef}
        onClick={() => timeline.current?.progress(1)}
        className="absolute bottom-8 right-8 text-cream-light opacity-0 hover:text-accent-saffron transition-colors"
      >
        Skip Intro
      </button>
    </div>
  )
}

function BiryaniModel() {
  // Placeholder implementation - replace with actual GLB model
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 0.5, 2]} />
      <meshStandardMaterial color="#C98A3D" />
    </mesh>
  )
}
  
