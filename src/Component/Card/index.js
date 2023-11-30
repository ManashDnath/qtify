import './index.css';
import { Tooltip } from "@mui/material";


export default function Card({songs, imgSrc, followersCount, label}){

    return(
        
            <div class="card-wrapper">
                <div class="card">
                
                    <div class="card-img-frame">
                    <Tooltip title={`${songs} songs`} placement="top" arrow>
                        <img class="card-img" src={imgSrc} alt="Albhum-pic"/>
                        </Tooltip>
                    </div>
                   
                <div class="card-content">
                    <span class="card-content-pill">
                        {followersCount} Follows
                    </span>
                </div>
            </div>
                <p class="card-label">{label}</p>       
            </div>
        
    )
}