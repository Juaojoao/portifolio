import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { tecs } from "../../data/data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export const Tecnologias = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2">
        <div className="w-11 h-1 bg-yellow-600"></div>
        <h1 className="text-yellow-600">TECNOLOGIAS</h1>
        <div className="w-11 h-1 bg-yellow-600"></div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {tecs.map((tec) => (
          <SwiperSlide key={tec.id}>
            <div className="h-full">
              <img className="w-96" src={tec.src} alt={tec.alt} />
              <h1 className="text-center text-yellow-600">{tec.alt}</h1>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
