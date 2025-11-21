import { useState } from "react";
import { generatePath, Link } from "react-router-dom";

const ganre=[
    {
        name:"فیلم ایرانی",
        ganre:["جنگی" , "عاشقانه" , "درام" ,"تاریخی"] ,
    },
    {
        name:"انیمیشن",
        ganre:[]
    },
    {   
        name:"فیلم خارجی",
        ganre:["اکشن" , "ترسناک" , "درام","جنایی" , "جنگی" , "عاشقانه" ,"ماجراجویی" , "رازآلود" , "کمدی" , "علمی تخیلی"] ,
        
    },
    {
        name:"سریال خارجی",
        ganre:["اکشن" , "ترسناک" , "درام","جنایی" , "جنگی" , "عاشقانه" ,"ماجراجویی" , "رازآلود" , "کمدی" , "علمی تخیلی" ] ,
    },

]
export default function Navigation(){
   const [hover , sethover]=useState([false , ])
    function handelHover(i){
        sethover(prev=> [!prev, i])
    }
    return(
        <> 
            <div className="navigation">
                    <div className="searchBtn">
                        <button>
                            جستجو
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="36px" fill="#000000"><path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z"/></svg>
                        </button>
                    </div>
                <div className="navButton">
                    <ul>
                        <li><Link href="">ارتباط با ما</Link></li>
                        {ganre.map((item,i)=>{
                            console.log(item)
                            return(
                                <li key={i} onMouseEnter={()=>handelHover(i)} onMouseLeave={()=>sethover(false)}>
                                    <Link href="Home">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360 280-560h400L480-360Z"/></svg>
                                        {item.name}
                                    </Link>
                                    {(hover && i === hover[1])&&
                                        <ul key={item.name} className="ganre-box">
                                            {item.ganre.map((ganre , i )=>{
                                                // const paths=path.filter(prev=>prev.name===ganre)
                                                
                                                return(
                                                    <a href={""} >
                                                        <li key={i}>
                                                                {ganre}
                                                        </li>
                                                    </a>
                                                        
                                                )
                                            })}
                                        </ul>
                                    }
                                </li>
                            )
                        })}
                        
                    </ul>
                    <button><h1 className="Name">Logo</h1></button>
                </div>

            </div>
        </>
    )
}