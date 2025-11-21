import { useDispatch, useSelector } from "react-redux"
import { ActionSlider } from "../Store/Store"
import { useEffect } from "react"


export default function SliderHeader({SliderData}){
    const Dispatch=useDispatch()
    const slider=useSelector((store)=>store.slider.SHeader)
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            Dispatch(ActionSlider.Increase(SliderData.length-1))
        },5000)
        return ()=>{clearTimeout(timeout)}
    },[Dispatch,SliderData.length,slider])
    function handelDecrease(){
        Dispatch(ActionSlider.Decrease(SliderData.length-1))
        
    }
    function handelIncrease(){
        Dispatch(ActionSlider.Increase(SliderData.length-1))
        
    }
    return(
        <div className="btnSlid">
            <button className='decrease' onClick={()=> handelDecrease()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M560.67-240 320-480.67l240.67-240.66L608-674 414.67-480.67 608-287.33 560.67-240Z"/></svg>
            </button>
            
            <button className='increase' onClick={()=> handelIncrease()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z"/></svg> 
            </button>
        </div>
    )
}