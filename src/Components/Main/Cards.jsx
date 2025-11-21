import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom";


export default function Cards({data}){
    const container=useRef()
    const Slider=useRef()
    gsap.registerPlugin(ScrollTrigger) 
    gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
    useGSAP(()=>{
        const t=gsap.timeline({
            scrollTrigger:{
                trigger:".Cards",
                // markers:true,
                start:"top-=300px , end",
                end:"end+=600px , end",
                toggleActions:"play restart pause reverse",
            }
        })
        t.from(".Cards",{
            y:-500,
            duration:1,
            stagger:0.1,
        })
    },{scope : container})
    function handelClick(leftOrRight){
        if(Slider.current){
            Slider.current.scrollBy({
                left:leftOrRight, // مقدار اسکرول افقی
                behavior: 'smooth' // اسکرول روان
            })
        }
    }

    return(
         <div className="Slider" ref={container}>
                <button className='Next-slider' onClick={()=>handelClick(-1000)} >
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF">
                        <path d="M560.67-240 320-480.67l240.67-240.66L608-674 414.67-480.67 608-287.33 560.67-240Z"/>
                    </svg>
                </button>
            
            <div className="box-Cards" ref={Slider}>
            {data.map((item,index)=>{
                return(
                    <>
                        <div key={index} className="Cards">
                            <a href={`/${item.title}`}>
                                    <img src={item.poster} />
                                    <div className="genres-box">
                                        {
                                            item.genres.map((genres , index)=>{
                                                return(
                                                    <p className="genres"  key={index}><span>{genres}</span></p>
                                                )
                                            })
                                        }
                                    
                                    </div>
                                    <div className="rating-Cards">
                                        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                                            <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                                        </svg>
                                        <h4>{item.rating}</h4>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <button className="btn-Download">
                                        Download
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5985E1">
                                            <path d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z"/>
                                        </svg> 
                                    </button>
                            </a>
                        </div>
                    </>
                ) 
            })}
            </div>
                <button className='Previous-slider' onClick={()=> handelClick(1000)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF">
                        <path d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z"/>
                    </svg> 
                </button>
        </div>
    )
}