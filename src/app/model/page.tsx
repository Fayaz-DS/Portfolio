"use client"

import { Canvas } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useState } from "react"
import EyeModel from "../components/EyeModel"
import CornerBoxes from "../components/CornerBoxes"

export default function Page(){

const [hovered,setHovered]=useState<number|null>(null)
const [active,setActive]=useState<number|null>(null)

return(

<div className="relative w-screen h-screen bg-black overflow-hidden">

<Canvas
camera={{position:[0,0,10],fov:50}}
className="absolute inset-0"
>

<ambientLight intensity={1.5}/>
<directionalLight position={[5,5,5]} intensity={2}/>

<EyeModel hovered={hovered}/>

<EffectComposer>
<Bloom
luminanceThreshold={0}
luminanceSmoothing={0.8}
intensity={2}
/>
</EffectComposer>

</Canvas>

<div className="absolute inset-0 pointer-events-none z-10">
<CornerBoxes
hovered={hovered}
setHovered={setHovered}
active={active}
setActive={setActive}
/>
</div>

</div>

)
}