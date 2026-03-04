"use client"

export default function CornerBoxes({
  hovered,
  setHovered,
  active,
  setActive
}:any){

  const Box=({id,className}:any)=>{

    const isActive=active===id

    return(
      <div
        onMouseEnter={()=>!active && setHovered(id)}
        onMouseLeave={()=>setHovered(null)}
        onClick={()=>setActive(id)}
        className={`pointer-events-auto fixed bg-white text-black flex items-center justify-center
        transition-all duration-500 cursor-pointer
        ${className}
        ${isActive ? "w-screen h-screen top-0 left-0 z-50" : "w-40 h-40"}
        ${hovered===id ? "shadow-[0_0_40px_white] brightness-125" : ""}
        `}
      >

        {isActive ? (
          <>
            <button
              onClick={(e)=>{
                e.stopPropagation()
                setActive(null)
              }}
              className="absolute top-5 right-5 text-xl"
            >
              X
            </button>

            <div className="text-4xl">
              CONTENT {id}
            </div>
          </>
        ):(
          <div>BOX {id}</div>
        )}

      </div>
    )
  }

  return(
    <>
      <Box id={1} className="top-0 left-0"/>
      <Box id={2} className="top-0 right-0"/>
      <Box id={3} className="bottom-0 left-0"/>
      <Box id={4} className="bottom-0 right-0"/>
    </>
  )
}