import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { IMAGES } from "../asset";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const LogoSlider = () => {
    const breakpoints = {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1025: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      };
      const paginationProp={
        el:".swiper-pagination",
        clickable:true
      }
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      slidesPerView={2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      grabCursor={true}
      breakpoints={breakpoints}
      freeMode={true}
      // loop={true}
      pagination={paginationProp}
      modules={[Autoplay, Pagination, Navigation]}
      className="swiper-container swiper-shadow swiper-theme"
      effect="fade"
    >
       <SwiperSlide><div className=" text-center"><Image src={IMAGES.Logo1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="text-center"><Image src={IMAGES.Logo2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className=" text-center"><Image src={IMAGES.Logo1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="text-center"><Image src={IMAGES.Logo2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="text-center"><Image src={IMAGES.Logo1} alt="" /></div></SwiperSlide>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span> 
    </Swiper>
  )
}

export default LogoSlider;
