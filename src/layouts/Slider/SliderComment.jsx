import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
// Import Swiper effects
import { EffectFade } from 'swiper/modules';

// Import style components
import { ContentSlider, TitleSlider } from "./styleSliderComments";
import CommentsSlider from './components/CommentsSlider';

import imagemDeFundo from '../../images/sliderIMG/backgroundSlider.svg'




function SliderComment ({data}){
  
  return (
    <Swiper

      // install Swiper modules
      modules={[ Pagination, EffectFade, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      style={{
        '--swiper-pagination-color': '#fff',
      }}
      effect='fade'
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
   
    >
      
        
      {data.map((item, index) => (
        <SwiperSlide key={index}>
            <ContentSlider imagemDeFundo={imagemDeFundo}>
                <TitleSlider>Veja os comentários dos nossos clientes</TitleSlider>
                
                <CommentsSlider nameowner={item.nameowner} namepet={item.namepet} typepet={item.typepet} msguser={item.msguser}/>
            </ContentSlider>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};


export default SliderComment;