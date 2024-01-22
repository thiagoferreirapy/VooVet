import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
// Import Swiper effects
import { EffectFade } from 'swiper/modules';
// Import Images slider
import img1 from '../../images/sliderIMG/slider1.svg'
import img2 from '../../images/sliderIMG/slider5.svg'
import img3 from '../../images/sliderIMG/slider3.svg'


// Import style components
import style from '../../styles/Slider/Slider.module.css';






function Slider (){
  
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      effect='fade'
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      
        
      <SwiperSlide>
        <div className={style.content_slider}>
          <img src={img1}
          alt="slider"
          className={style.img_slider}/>
          <div className={style.content_text_slider}>
            <h2>VooVet</h2>
            <p>Dê o melhor para o seu melhor amigo!</p>
            <p>Veterinarios de confiança e procedimentos desenvolvidos com carinho, tudo de melhor para o bem-estar do seu pet através do atendimento domiciliar.</p>

            <button className={style.button}>
            Agende seu atendimento
            </button>
          </div>
          
        </div>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.content_slider}>
          <img src={img2}
          alt="slider"
          className={style.img_slider}/>
          <div className={style.content_text_slider}>
            <h3>Janeiro Branco</h3>
            <h3>Proteja o seu pet</h3>
            <p><span>Chegou o tempo das vacinas e é importante que seu pet esteja com a saúde em dia, acompanhe e veja nosso atendiumento</span></p>

            <button className={style.button}>
            Agende seu atendimento
            </button>
          </div>
          
        </div>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.content_slider}>
          <img src={img3}
          alt="slider"
          className={style.img_slider_shopping}/>
          <div className={style.content_shopping}>
            <div className={style.content_text_shopping}>
              <h2>VooVet</h2>
              <h3>Pet Shop</h3>
              <p>Nossa nova loja</p>
              <button className={style.button}>
              Ir para a loja
              </button>
            </div>
            <div className={style.content_text_shopping}>
            
              <h3>Veja o que à de melhor!</h3>
              <p>Nossa nova loja conta com os mais variados acessórios para pets, desde coleiras, potes para alimentação até a ração.</p>
              <p>Até mesmo encontrar o seu pet e levar para casa, temos os filhotes mais lindos que você já viu!</p>

            </div>
          </div>
          
        </div>
        
      </SwiperSlide>
      
      

    </Swiper>
  );
};

export default Slider;