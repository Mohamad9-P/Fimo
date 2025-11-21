
import { SliderData } from '../SliderData';
import SliderHeader from './SliderHeader';


export default function Header(){
    /////////////////////////////////////////
    return(
        <div className='headerDiv'>
                    <img className="AnimImg" id={`AnimImg-${"slider"}`} src={"/BLACK-PHONE-2.jpg"} />
            <header>
                    <SliderHeader SliderData={SliderData}  />
                    <div className="Header-slider">
                        <div>
                            <h1 id={`h1-${"slider"}`}>{SliderData["slider"]}</h1>
                            <h1>Collection</h1>
                        </div>
                        <span><button className='viewbtn'>View</button></span>
                    </div>
            </header>
        </div>
    )
}