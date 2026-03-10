"use client"

import { useGLTF } from "@react-three/drei"
import { useRef, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

export default function EyeModel({ hovered }: any) {

const { scene } = useGLTF("/models/eye.glb")

const pivot = useRef<any>(null)
const beamCore = useRef<any>(null)
const beamHalo = useRef<any>(null)
const mouseNDC = useRef(new THREE.Vector2(0, 0))
const originRef = useRef(new THREE.Vector3())
const targetRef = useRef(new THREE.Vector3())
const raycasterRef = useRef(new THREE.Raycaster())

const { camera } = useThree()

useEffect(() => {
  const onMouseMove = (e: MouseEvent) => {
    mouseNDC.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouseNDC.current.y = -(e.clientY / window.innerHeight) * 2 + 1
  }
  const onTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0]
    if (!touch) return
    mouseNDC.current.x = (touch.clientX / window.innerWidth) * 2 - 1
    mouseNDC.current.y = -(touch.clientY / window.innerHeight) * 2 + 1
  }
  window.addEventListener("mousemove", onMouseMove)
  window.addEventListener("touchmove", onTouchMove)
  return () => {
    window.removeEventListener("mousemove", onMouseMove)
    window.removeEventListener("touchmove", onTouchMove)
  }
}, [])

useFrame(() => {

if (!pivot.current || !beamCore.current || !beamHalo.current) return

const mouse = mouseNDC.current
const origin = originRef.current
const target = targetRef.current
const raycaster = raycasterRef.current

const yaw = mouse.x * 0.7
const pitch = -mouse.y * 0.45

pivot.current.rotation.y += (yaw - pivot.current.rotation.y) * 0.95
pivot.current.rotation.x += (pitch - pivot.current.rotation.x) * 0.95
pivot.current.rotation.z = 0


const showBeam = hovered !== null
beamCore.current.visible = showBeam
beamHalo.current.visible = showBeam
if (!showBeam) return


pivot.current.getWorldPosition(origin)

const eyeForward = new THREE.Vector3(0, 0, 1).applyQuaternion(pivot.current.quaternion)
origin.addScaledVector(eyeForward, 2)
origin.x -= 0.15
origin.y -= 0.4
origin.z += 0

raycaster.setFromCamera(mouse, camera)

const plane = new THREE.Plane(new THREE.Vector3(0,0,1), 5)
const intersectPoint = new THREE.Vector3()

raycaster.ray.intersectPlane(plane, intersectPoint)
target.copy(intersectPoint)

const dir = target.clone().sub(origin)
const length = dir.length()

const mid = origin.clone().add(dir.clone().multiplyScalar(0.5))

beamCore.current.position.copy(mid)
beamHalo.current.position.copy(mid)

const beamQuat = new THREE.Quaternion().setFromUnitVectors(
new THREE.Vector3(0,1,0),
dir.clone().normalize()
)
beamCore.current.quaternion.copy(beamQuat)
beamHalo.current.quaternion.copy(beamQuat)

beamCore.current.scale.set(0.1, length, 0.1)
beamHalo.current.scale.set(0.24, length, 0.24)

})

return (

<>

<group ref={pivot}>
<group rotation={[0,-Math.PI/2,0]}>
<primitive object={scene} scale={0.02} />
</group>
</group>

<mesh ref={beamHalo} visible={false} frustumCulled={false}>
<cylinderGeometry args={[1,1,1,16]} />
<meshBasicMaterial
color="#f8fafc"
transparent
opacity={0.45}
blending={THREE.AdditiveBlending}
depthWrite={false}
toneMapped={false}
/>
</mesh>

<mesh ref={beamCore} visible={false} frustumCulled={false}>
<cylinderGeometry args={[1,1,1,16]} />
<meshBasicMaterial
color="#cbd5e1"
transparent
opacity={1}
blending={THREE.AdditiveBlending}
depthWrite={false}
toneMapped={false}
/>
</mesh>

</>

)

}