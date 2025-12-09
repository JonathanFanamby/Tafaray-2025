import React, { useEffect } from 'react'
import Lenis from "@studio-freight/lenis"

function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
         smooth: true,
         direction:'horizontal',
         easing: (t)=>t*t*t,
         duration:1.5
        });
        
         return ()=>{
            lenis.destroy()
         }
    }, [])
}

export default useLenis