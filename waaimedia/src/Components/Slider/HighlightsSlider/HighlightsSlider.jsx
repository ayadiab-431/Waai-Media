import './HighlightsSlider.css';
import ExploreButton from '../../ExploreButton/ExploreButton';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function HighlightsSlider() {

    return (
        <main 
            className='highlights-container position-relative d-flex align-items-center justify-content-center'>
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                loop = {true}
                autoplay = {{delay: 5000,
                    disableOnInteraction: false
                }}
                allowTouchMove = {true}
            >
                <SwiperSlide><img src={`${import.meta.env.BASE_URL}assets/images/Background.jpg`} alt="" /></SwiperSlide>
                <SwiperSlide><img src={`${import.meta.env.BASE_URL}assets/images/photo.png`} alt="" /></SwiperSlide>
            </Swiper>
            <div className="highlights-news p-4 position-absolute text-center gap-3" style={{zIndex: 99}}>
                <div className="news gap-3">
                    <h2 className="highlight-head">Waai Media Highlights</h2>
                    <p className="news-content">Waai Media proudly participated in Futon Media Expo in Turkey, strengthening its regional presence and building partnerships with top media</p>
                </div>
                <ExploreButton btnText={'Explore'}/>
            </div>
        </main>
    );
}