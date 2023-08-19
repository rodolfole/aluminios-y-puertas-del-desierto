import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  slides: {
    img: string;
    title: string;
  }[];
};
export const Slider: FC<Props> = ({ slides }) => {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
      loop
      modules={[Navigation, Pagination]}
      navigation
      pagination
      slidesPerView={1}
      spaceBetween={30}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.img} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
