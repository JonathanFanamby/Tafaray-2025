import React from 'react'
import heart from "./assets/heart.svg"

function Footer() {
  return (
    <div className='flex font-medium justify-center h-[56px] bg-[#040404] items-center text-[#c5c5c58c] text-[15px]'>
        Made with <img src={heart} style={{marginInline:"4px"}} className='w-[25px]' alt="" /> by <a href="https://jonavitasoa.netlify.app" className='underline' style={{marginInline:'4px', fontStyle:'underline'}}>Fanamby Jonathan</a>
    </div>
  )
}

export default Footer