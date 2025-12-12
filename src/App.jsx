import Accueil from "./Accueil"
import Footer from "./Footer"
import Navbar from "./Navbar"
import React, { useEffect, useState } from 'react'
import Test from './Test'



function App() {
const [Loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])
   
    if(Loading) return <div className='flex flex-col justify-center items-center z-[10000] fixed top-0 right-0 left-0 w-[100%] h-[100%] Load'><h1 className='sm:text-[64px] p-[40px] font-black text-[35px] title background-text Load-text' >TAFARAY Maths-Info</h1> <br /> <img src="barre.jpg" className="w-[250px]" alt="" /> <br />
        <figure className="content-end pt-5">
            <img src="planet.svg" className="w-full" alt="" />
        </figure>
        </div>


  return (
    <div className='sm:px-[15%] px-[15px]'>
        <Navbar/>
        <Test/>
        <Accueil/>
        <Footer/> 

    </div>
  )
}

export default App
