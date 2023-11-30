import "./index.css";
import Card from '../Card';
import { useState } from "react";
import Carousel from "../Carousel";


export default function Section({title,data}){

    const[isClick, setIsClick]=useState(false);

    return(     
        <div class="container-section">
            <div class='section'>
                <div class="title">
                    <h1>{title}</h1>
                </div>
                <div class="container-section-btn" onClick={()=>{setIsClick(!isClick)}}>{isClick ?'Show all':'Collapse'}</div>
            </div>
            <div class="Albhum">
                {isClick ? <Carousel image={data}/> : data.map(res => <Card key={res.id} songs={res.songs.length} imgSrc={res.image} label={res.title} followersCount={res.follows}/>)}
            </div>
        </div>   
    )
}