
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const coffees = [
  { name: 'Espresso', color: '#3B2416' },
  { name: 'Cappuccino', color: '#F6E7D8' },
  { name: 'Mocha', color: '#8C4F24' },
  { name: 'Latte', color: '#EBD3B1' },
  { name: 'Caramel Macchiato', color: '#C98A3D' },
  { name: 'Hazelnut Brew', color: '#8C4F24' }
]

export default function CoffeeOrbit() {
  const groupRef = useRef<any>(null)
  
  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += 0.002
  })

  return (
    <group ref={groupRef}>
      {coffees.map((coffee, i) => (
        <Coffee key={i} index={i} {...coffee} />
      ))}
    </group>
  )
}

function Coffee({ index, color, name }: { index: number, color: string, name: string }) {
  const ref = useRef<any>(null)
  const angle = (index / coffees.length) * Math.PI * 2
  const radius = 4
  
  useFrame(() => {
    if (!ref.current) return
    ref.current.position.x = Math.cos(angle) * radius
    ref.current.position.z = Math.sin(angle) * radius
    ref.current.position.y = Math.cos(Date.now() * 0.001 + index) * 0.3
  })

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
  
