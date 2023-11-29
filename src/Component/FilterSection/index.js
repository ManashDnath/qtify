import Carousel from "../SongsCarousel";
import './filter.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";

export default function Filter({title, data, genres, executeFilter}){

    
const[index,setIndex]=useState(0); 

return <div class="container-section">  
                <h1 className="title">{title}</h1>
    <Tabs
        value={index}
        onChange={(e,value)=>{
            executeFilter(genres[value].key);
            setIndex(value); 
        }}
        className="filter-btn"
        TabIndicatorProps={{
            style:{
                backgroundColor:"var(--css-primary)"
            }
        }}>
        {genres.map(f => <Tab className="tab" key={f.key} label={f.label}/>)}
    </Tabs>
        <Carousel image={data}/>   
</div> 
    
}