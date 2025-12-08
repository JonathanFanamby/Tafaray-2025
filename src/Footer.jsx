import React from 'react'
import heart from "./assets/heart.svg"

function Footer() {
  return (
    <div className='flex font-medium justify-center h-[56px] bg-[#040404] items-center text-[#c5c5c58c] text-[15px]'>
        Make with <img src={heart} style={{marginInline:"4px"}} className='w-[25px]' alt="" /> by Fanamby Jonathan
    </div>
  )
}

export default Footer