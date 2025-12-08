import React from 'react'
import bottom from "./assets/bottom.svg"
import ask from "./assets/ask.svg"


function Accueil() {
  return (
    <div className='accueil'>
    <section className='relative h-[100vh]'>
        <p className='text-[17px]'>Bonjour, nous sommes le groupe </p>
        <h1 className='sm:text-[64px] font-black text-[40px] title background-text'>TAFARAY Maths-Info</h1>
        <p className='text-[#f8f8f84d] text-[17px]'>Chez groupe Tafaray, notre objectif est de réussir ensemble. Nous travaillons en collaboration pour atteindre nos objectifs communs et nous entraider mutuellement pour créer des expériences positives et enrichissantes pour tous. Parfois nous faisons une pause ensemble à l'air libre... </p>
        <h4 style={{paddingBlock:'10px'}} className='text-[17px] font-medium'>En savoir plus </h4>
       <figure className='flex justify-center '>
        <img src={ask}  alt="" className='w-[100px] sm:w-[190px]' />
       </figure>
        <figure className='absolute bottom-0 right-0 -z-30'>
            <img src={bottom} className='w-[100px]' alt="" />
        </figure>
    </section>
    <section  className=' grid w-[80%] sm:grid-cols-2 grid-cols-1 justify-self-center gap-10 '>

        <div className='cadre-accueil p-4 '>
            <h2 className='text-[40px] font-bold'>Maths-Info</h2>
            <p>Notre mention </p>
        </div>

        <div className='cadre-accueil p-4 '>
            <h2 className='text-[40px] font-bold'>Membres</h2>
            <p>plus de 12 membres</p>
        </div>
    </section>


    <section>
        <h1 className='font-bold text-[70px] text-center background-text' style={{paddingBottom:'50px'}}># Profils</h1>
        <div className='grid grid-cols-1 gap-16 justify-items-center content-start'>
            <div className='text-center font-semibold background-profil' >
            <figure className='w-full'>
                <img src="Esperan.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RAMANANA Eli Brudo Espéran</h4>
                <p className='text-left text-[#c5c5c5]'> Président <br /> De : Vondrozo</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>

        <div className='text-center font-semibold background-profil' >
            <figure className='w-full'>
                <img src="Fitiavana.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RODIASY Nomena Fitiavana</h4>
                <p className='text-left text-[#c5c5c5]'> Présidente <br /> De : Ambatondrazaka</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>

        <div className='text-center font-semibold background-profil' >
            <figure className='w-full'>
                <img src="Fidelice.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >BIZARA Fidelice</h4>
                <p className='text-left text-[#c5c5c5]'> Organisateur & Coordinateur <br /> De : Fenerive-Est</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - Fonda</p>
        </div>

        <div className='text-center font-semibold background-profil' >
            <figure className='w-full'>
                <img src="Voaharitiana.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RAFANTATRARIMANDIMBY Voaharitiana</h4>
                <p className='text-left text-[#c5c5c5]'> Communication <br /> De : Ambatondrazaka</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - Fonda</p>
        </div>

        <div className='text-center font-semibold background-profil' >
            <figure className='w-full'>
                <img src="Zidia.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RAZANANDRASOA Zidia Hortence</h4>
                <p className='text-left text-[#c5c5c5]'> Communication <br /> De : Tamatave ⅠⅠ</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - Fonda</p>
        </div>

        <div className='text-center font-semibold background-profil' >
            <figure className='w-full'>
                <img src="Willida.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RASAMIHANTA Marie Willida</h4>
                <p className='text-left text-[#c5c5c5]'> Animatrice & Danceuse <br /> De : Mananara - Nord</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - Fonda</p>
        </div>

        <div className='text-center font-semibold background-profil' >
            <figure className='w-full'>
                <img src="Zico.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RANDRIANANTENAINA Zico</h4>
                <p className='text-left text-[#c5c5c5]'> Logistique <br /> De : Vangaindrano</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - Fonda</p>
        </div>

        <div className='text-center font-semibold background-profil' >
            <figure className='w-full'>
                <img src="Sarah.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RAZAFIMALALA Sarah</h4>
                <p className='text-left text-[#c5c5c5]'> Logistique <br /> De : Vavatenina</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>

        <div className='text-center font-semibold background-profil' >
            <figure className='w-full'>
                <img src="Tsito.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >ANDRIANAVAHINDRABE Tsitohaina Sarobidy</h4>
                <p className='text-left text-[#c5c5c5]'> Logistique & Photographe <br /> De : Ambositra</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>

        <div className='text-center font-semibold background-profil' >
            <figure className='w-full'>
                <img src="Annah.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RASAMIHANTA Marie Willida</h4>
                <p className='text-left text-[#c5c5c5]'> Trésorière & Passionnée de la cuisine <br /> De : Ambatondrazaka</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>

        <div className='text-center font-semibold background-profil' >
            <figure className='w-full'>
                <img src="Jonathan.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >VITASOA Fanamby Jonathan</h4>
                <p className='text-left text-[#c5c5c5]'> Animateur  <br /> De : Vohipeno - Fitovinany</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>
        </div>

    </section>





    <section>
        <h1 className='font-medium text-[70px] text-center background-text' style={{paddingBottom:'80px',lineHeight:'70px'}}>Explorer plus à propos de Tafaray</h1>
       
        <div className='grid grid-cols-1 text-[#f8f8f881] md:grid-cols-2 justify-self-center gap-10 '>

        <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/1.jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2024 - Premier évènement</p>
        </div>

        <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/5.jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2024 - Premier évènement</p>
        </div>

         <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/thumb (8).jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2024 - Premier évènement</p>
        </div>

        <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/Miray.jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2024 - Premier évènement</p>
        </div>

        <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/4.jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Mars 2025 - Deuscième évènement</p>
        </div>

        <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/7.jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Mars 2025 - Deuscième évènement</p>
        </div>

        <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/thumb (4).jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Mars 2025 - Deuscième évènement</p>
        </div>

        <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/6.jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Mai 2025 - Troisième évènement</p>
        </div>

        <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/8.jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Mai 2025 - Troisième évènement</p>
        </div>

        <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/thumb (1).jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2025 - Quatrième évènement</p>
        </div>

       <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/thumb (2).jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2025 - Quatrième évènement</p>
        </div>

        <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/thumb (5).jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2025 - Quatrième évènement</p>
        </div>

         <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/thumb (6).jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2025 - Quatrième évènement</p>
        </div>

         <div className='w-[320px] carte-content'>
            <figure className='w-full'>
                <img src="src/assets/thumb (7).jpg" className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2025 - Quatrième évènement</p>
        </div>

        </div>
    </section>

    <section>
        <h1 className='font-medium text-[70px] text-center background-text ' style={{paddingBlock:'70px',lineHeight:'60px'}}>Ce que nous faisons</h1>
        <div  className=' overflow-slog '>
        <div className='w-[100%] md:justify-center gap-4 my-10 flex'> {/*grid w-[80%]  grid-cols-1 justify-items-center gap-5 */}
        <div className='cadre-slogan w-fit px-4   '>
            <h2 className='text-[25px]  text-center font-bold'>Etudier</h2>
        </div>
        <div className='cadre-slogan w-fit px-4 '>
            <h2 className='text-[25px]  text-center font-bold'>Collaborer</h2>
        </div>
        <div className='cadre-slogan w-fit px-4 '>
            <h2 className='text-[25px]  text-center font-bold'>S'entraider</h2>
        </div>
        <div className='cadre-slogan w-fit px-4 '>
            <h2 className='text-[25px]  text-center font-bold'>Coopérer</h2>
        </div>
        <div className='cadre-slogan w-fit px-4 '>
            <h2 className='text-[25px]  text-center font-bold'>Soutenir</h2>
        </div>
        </div>
    </div>
    </section>
        


    </div>
  )
}

export default Accueil