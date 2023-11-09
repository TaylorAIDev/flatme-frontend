import React from 'react';
import '../App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

function City() {
    // const Cities = ["Auckland", "Dunedin", "Christchurch", "Wellington", "Tauranga", "Queenstown", "Hastings", "Hamilton"];
    return (
        <>
            <h2 style={{ textAlign: 'left' }} className='m-3'>Top Cities</h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"4"}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]} className="mySwiper swiper effect-coverflow-swiper rounded pb-5"
            >
                <div >
                    <SwiperSlide> <img src="assets/img/Auckland.jpg" alt="" className="img-fluid" style={{width:'500px',height:'300px'}} /> </SwiperSlide>
                    <SwiperSlide> <img src="assets/img/Dunedin.jpg" alt="" className="img-fluid" style={{width:'500px',height:'300px'}}/> </SwiperSlide>
                    <SwiperSlide> <img src="assets/img/Christchurch.jpg" alt="" className="img-fluid" style={{width:'500px',height:'300px'}}/> </SwiperSlide>
                    <SwiperSlide> <img src="assets/img/Wellington.jpg" alt="" className="img-fluid" style={{width:'500px',height:'300px'}}/> </SwiperSlide>
                    <SwiperSlide> <img src="assets/img/Tauranga.jpg" alt="" className="img-fluid" style={{width:'500px',height:'300px'}}/> </SwiperSlide>
                    <SwiperSlide> <img src="assets/img/Queenstown.jpg" alt="" className="img-fluid"style={{width:'500px',height:'300px'}} /> </SwiperSlide>
                    <SwiperSlide> <img src="assets/img/Hastings.jpg" alt="" className="img-fluid"style={{width:'500px',height:'300px'}} /> </SwiperSlide>
                    <SwiperSlide> <img src="assets/img/Hamilton.jpg" alt="" className="img-fluid" style={{width:'500px',height:'300px'}}    /> </SwiperSlide>
                </div>
                <div className="swiper-pagination swiper-pagination-dark"></div>
            </Swiper>
        </>
    )
}
export default City


