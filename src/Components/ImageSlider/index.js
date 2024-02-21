import React from "react";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCube } from 'swiper/modules';
import { Navigation, Pagination, Scrollbar, A11y, } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ImageSlider = ({ images }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // effect="cube"
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {images?.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={imageUrl}
              alt={`Slide ${index}`}
              style={{ width: "90%", height:"100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
