"use client"

import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

export default function EyeModel({ hovered }: any) {

const { scene } = useGLTF("/models/eye.glb")

const pivot = useRef<any>()
const beam = useRef<any>()

const { mouse, camera } = useThree()

const origin = new THREE.Vector3()
const target = new THREE.Vector3()

const raycaster = new THREE.Raycaster()

useFrame(() => {

if (!pivot.current || !beam.current) return


const yaw = mouse.x * 0.7
const pitch = -mouse.y * 0.45

pivot.current.rotation.y += (yaw - pivot.current.rotation.y) * 0.12
pivot.current.rotation.x += (pitch - pivot.current.rotation.x) * 0.12
pivot.current.rotation.z = 0


beam.current.visible = hovered !== null
if (!beam.current.visible) return


pivot.current.getWorldPosition(origin)


raycaster.setFromCamera(mouse, camera)

const plane = new THREE.Plane(new THREE.Vector3(0,0,1), -10)

raycaster.ray.intersectPlane(plane, target)

const dir = target.clone().sub(origin)
const length = dir.length()

const mid = origin.clone().add(dir.clone().multiplyScalar(0.5))

beam.current.position.copy(mid)

beam.current.quaternion.setFromUnitVectors(
new THREE.Vector3(0,1,0),
dir.clone().normalize()
)

beam.current.scale.set(0.15, length, 0.15)

})

return (

<group ref={pivot}>

<group rotation={[0,-Math.PI/2,0]}>
<primitive object={scene} scale={0.02} />
</group>

<mesh ref={beam} visible={false}>
<cylinderGeometry args={[1,1,1,16]} />
<meshBasicMaterial color="white" toneMapped={false}/>
</mesh>

</group>

)

}