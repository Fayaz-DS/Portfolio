"use client"

import { useEffect, useState } from "react"

export default function LaserOverlay({ hovered }: any) {

  const [size,setSize]=useState({w:0,h:0})
  const [eye,setEye]=useState({x:0,y:0})

  useEffect(()=>{

    const update=()=>{

      const canvas=document.querySelector("canvas")
      if(!canvas) return

      const rect=canvas.getBoundingClientRect()

      setSize({
        w:window.innerWidth,
        h:window.innerHeight
      })

      setEye({
        x:rect.left + rect.width/2,
        y:rect.top + rect.height/2
      })
    }

    update()
    window.addEventListener("resize",update)
    return()=>window.removeEventListener("resize",update)

  },[])

  if(hovered===null) return null

  const corners=[
    {x:0,y:0},
    {x:size.w,y:0},
    {x:0,y:size.h},
    {x:size.w,y:size.h}
  ]

  const target=corners[hovered-1]

  return(
    <svg
      style={{
        position:"absolute",
        inset:0,
        zIndex:10,
        pointerEvents:"none"
      }}
      width="100%"
      height="100%"
    >
      <line
        x1={eye.x}
        y1={eye.y}
        x2={target.x}
        y2={target.y}
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        style={{
          filter:"drop-shadow(0 0 12px white)"
        }}
      />
    </svg>
  )
}