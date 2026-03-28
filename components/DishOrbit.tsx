
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const dishes = [
  { name: 'Biryani', color: '#D98C2B' },
  { name: 'Burger', color: '#A93F2D' },
  { name: 'Pasta', color: '#8FAF6A' },
  { name: 'Pizza', color: '#C98A3D' },
  { name: 'Grilled Platter', color: '#8C4F24' },
  { name: 'Dessert Plate', color: '#EBD3B1' }
]

export default function DishOrbit() {
  const groupRef = useRef<any>(null)
  
  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y -= 0.002
  })

  return (
    <group ref={groupRef}>
      {dishes.map((dish, i) => (
        <Dish key={i} index={i} {...dish} />
      ))}
    </group>
  )
}

function Dish({ index, color, name }: { index: number, color: string, name: string }) {
  const ref = useRef<any>(null)
  const angle = (index / dishes.length) * Math.PI * 2
  const radius = 5
  
  useFrame(() => {
    if (!ref.current) return
    ref.current.position.x = Math.cos(angle) * radius
    ref.current.position.z = Math.sin(angle) * radius
    ref.current.position.y = Math.sin(Date.now() * 0.001 + index) * 0.3
  })

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1, 0.3, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
  
