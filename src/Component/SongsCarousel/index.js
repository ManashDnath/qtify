import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from '../SongsCard';
import './carousel.css';

export default function SongsCarousel({image}){

    return <div className='carousel-container'>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={30}
        navigation={{nextEl:'.next-button', prevEl:'.prev-button'}}
        
      >
       {image.map(res => <SwiperSlide  key={res.id}> 
            <Card imgSrc={res.image} 
                  label={res.title} 
                  followersCount={res.likes}/> </SwiperSlide>)}             
      </Swiper>
          <div className='next-button arrow'><img src="/rightarr.png" alt='imagelogo'/></div>
          <div className='prev-button arrow'><img src="/leftIcon.png" alt='imagelogo'/></div>
       
      </div>
    
      
}