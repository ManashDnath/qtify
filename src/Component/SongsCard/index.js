import './card.css';


export default function SongsCard({imgSrc,label,followersCount}){
    return(
        <div class="card-wrapper">
            <div class="card">
                <div class="card-img-frame">
                    <img class="card-img" src={imgSrc} alt="Albhum-pic"/>
                </div>
            <div class="card-content">
                <span class="card-content-pill">
                    {followersCount} Likes
                </span>
            </div>
        </div>
            <p class="card-label">{label}</p>       
        </div>
            
    )
}