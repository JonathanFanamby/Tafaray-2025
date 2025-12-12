
import bottom from "./assets/bottom.svg"
import ask from "./assets/ask.svg"
import carte1 from "./assets/1.jpg"
import carte2 from "./assets/5.jpg"
import carte3 from "./assets/thumb (8).jpg"
import carte4 from "./assets/Miray.jpg"
import carte5 from "./assets/4.jpg"
import carte6 from "./assets/7.jpg"
import carte7 from "./assets/thumb (4).jpg"
import carte8 from "./assets/6.jpg"
import carte9 from "./assets/8.jpg"
import carte10 from "./assets/thumb (1).jpg"
import carte11 from "./assets/thumb (2).jpg"
import carte12 from "./assets/thumb (5).jpg"
import carte13 from "./assets/thumb (6).jpg"
import carte14 from "./assets/thumb (7).jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

'use client';
import { ReactLenis } from 'lenis/react';

function Accueil() {

  return (
    <ReactLenis root>
    <div className='accueil'>
    <section className='  relative h-[100vh]'>
        <p className='text-[17px]'>Bonjour, nous sommes le groupe </p>
        <h1 className='sm:text-[64px] font-black text-[40px] title background-text'>TAFARAY Maths-Info</h1>
        <p className='text-[#f8f8f84d] text-[17px]'>Chez groupe Tafaray, notre objectif est de réussir ensemble. Nous travaillons en collaboration pour atteindre nos objectifs communs et nous entraider mutuellement pour créer des expériences positives et enrichissantes pour tous. Parfois nous faisons une pause ensemble à l'air libre... </p>
        <a href="#savoir"   className='text-[17px] font-medium'>En savoir plus </a>
       <figure className='flex justify-center '>
        <img src={ask}  alt="" className='w-[100px] sm:w-[190px]' />
       </figure>
        <figure className='absolute bottom-0 right-0 -z-30'>
            <img src={bottom} className='w-[100px] ' alt="" />
        </figure>

    </section>
    <section  className='grid w-[80%]  sm:grid-cols-2 grid-cols-1 justify-self-center gap-10 '>

        <div className='cadre-accueil p-4 scaler'>
            <h2 className='text-[40px] font-bold '>Maths-Info</h2>
            <p>Notre mention </p>
        </div>

        <div className='cadre-accueil p-4 scaler'>
            <h2 className='text-[40px] font-bold'>Membres</h2>
            <p>+12 membres</p>
        </div>
    </section>

    <section id="savoir">
        <Swiper
                className=" h-full py-2  my-5 w-[380px]  justify-self-center" style={{margin: "0 auto",aspectRatio:3/4}} 
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide niova")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="w-full">
                  <img src="news (4).jpg" className='py-2 w-[360px] rounded-[4px]' style={{aspectRatio:3/4, objectFit:'cover'}}  alt="" />
                </SwiperSlide>

                <SwiperSlide className="w-full">
                  <img src="news (5).jpg" className='py-2 w-[360px] rounded-[4px]' style={{aspectRatio:3/4, objectFit:'cover'}}  alt="" />
                </SwiperSlide>

                <SwiperSlide className="w-full">
                  <img src="news (2).jpg" className='py-2 w-[360px] rounded-[4px]' style={{aspectRatio:3/4, objectFit:'cover'}}  alt="" />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                  <img src="news (3).jpg" className='py-2 w-[360px] rounded-[4px]' style={{aspectRatio:3/4, objectFit:'cover'}}   alt="" />
                </SwiperSlide>
               <SwiperSlide className="w-full">
                    <img src="news (6).jpg" className='py-2 w-[360px] rounded-[4px]' style={{aspectRatio:3/4, objectFit:'cover'}}   alt="" />
                </SwiperSlide>
                <SwiperSlide className="w-full py-4">
                    <img src="news (7).jpg" className='py-2 w-[360px] rounded-[4px]' style={{aspectRatio:3/4, objectFit:'cover'}}  alt="" />
                </SwiperSlide>
                 <SwiperSlide className="w-full py-4">
                    <img src="news (9).jpg" className='py-2 w-[360px] rounded-[4px]' style={{aspectRatio:3/4, objectFit:'cover'}}  alt="" />
                </SwiperSlide>
                <SwiperSlide className="w-full py-4">
                    <img src="news (10).jpg" className='py-2 w-[360px] rounded-[4px]'style={{aspectRatio:3/4, objectFit:'cover'}}   alt="" />
                </SwiperSlide>
              </Swiper>
    </section>
    <section className="flex justify-center">
        <img src="meet.svg" className="w-[400px]" alt="" />
    </section>
        <ReactLenis root>
    <section>
        <h1 className='font-bold text-[70px] text-center background-text' style={{paddingBottom:'50px'}}># Profils</h1>

        <div className='grid grid-cols-1 gap-20 justify-items-center content-start'>
            <div className='sticky top-[60px] left-0 right-0 text-center font-semibold background-profil scaler' >
            <figure className='w-full '>
                <img src="Esperan.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RAMANANA Eli Brudo Espéran</h4>
                <p className='text-left text-[#c5c5c5]'> Président <br /> De : Vondrozo</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
            </div>

        <div className='sticky top-[60px] left-0 right-0 text-center font-semibold background-profil scaler' >
            <figure className='w-full'>
                <img src="Fitiavana.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RODIASY Nomena Fitiavana</h4>
                <p className='text-left text-[#c5c5c5]'> Présidente <br /> De : Ambatondrazaka</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>

        <div className='sticky top-[60px] left-0 right-0 text-center font-semibold background-profil scaler' >
            <figure className='w-full'>
                <img src="Fidelice.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >BIZARA Fidelice</h4>
                <p className='text-left text-[#c5c5c5]'> Organisateur & Coordinateur <br /> De : Fenerive-Est</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - Fonda</p>
        </div>

        <div className='sticky top-[60px] left-0 right-0 text-center font-semibold background-profil scaler' >
            <figure className='w-full'>
                <img src="Voaharitiana.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RAFANTATRARIMANDIMBY Voaharitiana</h4>
                <p className='text-left text-[#c5c5c5]'> Communication <br /> De : Ambatondrazaka</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - Fonda</p>
        </div>

        <div className='sticky top-[60px] left-0 right-0 text-center font-semibold background-profil scaler' >
            <figure className='w-full'>
                <img src="Zidia.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RAZANADRASOA Zidia Hortence</h4>
                <p className='text-left text-[#c5c5c5]'> Communication <br /> De : Tamatave ⅠⅠ</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - Fonda</p>
        </div>

        <div className='sticky top-[60px] left-0 right-0 text-center font-semibold background-profil scaler' >
            <figure className='w-full'>
                <img src="Willida.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RASAMIHANTA Marie Willida</h4>
                <p className='text-left text-[#c5c5c5]'> Animatrice & Danceuse <br /> De : Mananara - Nord</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>

        <div className='sticky top-[60px] left-0 right-0 text-center font-semibold background-profil scaler' >
            <figure className='w-full'>
                <img src="Zico.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RANDRIANANTENAINA Zico</h4>
                <p className='text-left text-[#c5c5c5]'> Logistique <br /> De : Vangaindrano</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - Fonda</p>
        </div>

        <div className='sticky top-[60px] left-0 right-0 text-center font-semibold background-profil scaler' >
            <figure className='w-full'>
                <img src="Sarah.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >RAZAFIMALALA Sarah</h4>
                <p className='text-left text-[#c5c5c5]'> Logistique <br /> De : Vavatenina</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>

        <div className='sticky top-[60px] left-0 right-0 text-center font-semibold background-profil scaler' >
            <figure className='w-full'>
                <img src="Tsito.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >ANDRIANAVAHINDRABE Tsitohaina Sarobidy</h4>
                <p className='text-left text-[#c5c5c5]'> Logistique & Photographe <br /> De : Ambositra</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>

        <div className='sticky top-[60px] left-0 right-0 text-center font-semibold background-profil scaler' >
            <figure className='w-full'>
                <img src="Annah.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >	RAKOTOARIVONY Fanilonomena Annah</h4>
                <p className='text-left text-[#c5c5c5]'> Trésorière & Passionnée de la cuisine <br /> De : Ambatondrazaka</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>

        <div className='sticky top-[60px] left-0 right-0 text-center font-semibold background-profil scaler' >
            <figure className='w-full'>
                <img src="Jonathan.jpg" className='rounded-[4px]' alt="" />
            </figure>
                <h4 className='font-medium text-[25px] text-[#f8f8f8] text-left px-[10px] line-clamp-2' >VITASOA Fanamby Jonathan</h4>
                <p className='text-left text-[#c5c5c5]'> Animateur  <br /> De : Vohipeno - Fitovinany</p>
                <p className='text-left text-[#c5c5c5]'> Parcours : Maths - State - Info</p>
        </div>
        </div>
    </section>
    </ReactLenis>

    <section className="flex justify-center">
        <img src="blog.svg" className="w-[400px]" alt="" />
    </section>

    <section>
        <h1 className='font-medium text-[70px] text-center background-text' style={{paddingBottom:'80px',lineHeight:'70px'}}>Explorer plus à propos de Tafaray</h1>
       
        <div className='grid grid-cols-1 text-[#f8f8f881] md:grid-cols-2 justify-self-center gap-10 '>
        
        <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte1} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2024 - Premier évènement</p>
        </div>

        <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte2} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2024 - Premier évènement</p>
        </div>

         <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte3} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2024 - Premier évènement</p>
        </div>

        <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte4} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2024 - Premier évènement</p>
        </div>

        <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte5} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Mars 2025 - Deuscième évènement</p>
        </div>

        <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte6} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Mars 2025 - Deuscième évènement</p>
        </div>

        <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte7} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Mars 2025 - Deuscième évènement</p>
        </div>

        <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte8} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Mai 2025 - Troisième évènement</p>
        </div>

        <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte9} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Mai 2025 - Troisième évènement</p>
        </div>

        <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte10} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2025 - Quatrième évènement</p>
        </div>

       <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte11} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2025 - Quatrième évènement</p>
        </div>

        <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte12} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2025 - Quatrième évènement</p>
        </div>

         <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte13} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2025 - Quatrième évènement</p>
        </div>

         <div className='w-[320px] carte-content scaler'>
            <figure className='w-full'>
                <img src={carte14} className='carte' alt="" />
            </figure>
            <p style={{padding:'10px', fontWeight:'500'}}>Septembre 2025 - Quatrième évènement</p>
        </div>
        
        </div>
    </section>


    <section className="flex  justify-center" >
        <img src="team.svg" className="w-[400px]" alt="" />
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
    </ReactLenis>
  )
}

export default Accueil