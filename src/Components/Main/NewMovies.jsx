
import { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
export default function NewMovies(){
    // const NewMoviesData=data.filter(prev=>prev.year===2025);
    const [data2 , setdata] =useState([])
    useEffect(()=>{
        async function fetchData(){
        const res = await fetch(`https://fimo-eta.vercel.app/api/tmdb?path=movie/popular&query=language=en-US&page=1`)
        const data = await res.json();
        console.log(data);
        setdata(data)
        };
        fetchData()
    }, [] )
    console.log(data2)
    
    return (
        <>
        <div className="NewMovies">
            <h1>تازها</h1>
            <div></div>
        </div>
        {/* <Cards data={NewMoviesData}/> */}
        
        </>
    )
}
