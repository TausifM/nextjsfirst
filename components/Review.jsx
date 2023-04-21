import { Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper";
import { IMAGES } from "../asset";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
const Review = () => {
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  const paginationProp={
    el:".swiper-pagination",
    clickable:true
  }
  const navigationProps={
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
  }
  return (
  <section className="bg-dark pt-6 border-lg-top">
    <div className="container">
      <div className="col-md-6">
        <h1 className="text-white fs-lg-5 fs-md-3 fs-2">An enterprise template to ramp up your company website</h1>
      </div>
         <Swiper className="swiper-container swiper-theme mt-7 z-index-0"
          slidesPerView={1}
          breakpoints={breakpoints}
          spaceBetween={10}
          grabCursor={true}
          freeMode={true}
          loopedSlides={3}
          modules={[Pagination, Navigation, FreeMode]}
          pagination={paginationProp}
          navigation={navigationProps}
          loop={true}
          >
            <div className="swiper-wrapper" id="swiper-wrapper" aria-live="polite">
                <SwiperSlide className="bg-white p-5 rounded-3 h-auto swiper-slide-duplicate swiper-slide-duplicate-next" role="group" aria-label="2 / 4" style={{width: "362.667px", marginRight: "40px"}} data-swiper-slide-index="1">
                  <div className="d-flex flex-column justify-content-between h-100">
                    <h4 className="text-black">“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</h4>
                    <div className="d-flex align-items-center gap-3 mt-5"><Image src={IMAGES.Review2} alt="" width="auto" height="auto" className="review-img"/>
                      <div className="text-black">
                        <p className="mb-0 fw-bold text-dark">Severus Snape</p><small>Manager @ Slytherin</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white p-5 rounded-3 h-auto swiper-slide-duplicate" role="group" aria-label="3 / 4" style={{width: "362.667px", marginRight: "40px"}}>
                  <div className="d-flex flex-column justify-content-between h-100">
                    <h4 className="text-black">“Release facebook responsive web design business model canvas seed money monetization.”</h4>
                    <div className="d-flex align-items-center gap-3 mt-5"><Image src={IMAGES.Review1} alt="" width="auto" height="auto" className="review-img" />
                      <div className="text-black">
                        <p className="mb-0 fw-bold text-dark">Harry Potter</p><small>Team Leader @ Gryffindor</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white p-5 rounded-3 h-auto swiper-slide-duplicate swiper-slide-prev" role="group" aria-label="4 / 4" 
                style={{width: "362.667px", marginRight: "40px"}} data-swiper-slide-index="3">
                  <div className="d-flex flex-column justify-content-between h-100">
                    <h4 className="text-black">“Buyer buzz partner network disruptive non-disclosure agreement business”</h4>
                    <div className="d-flex align-items-center gap-3 mt-5"><Image src={IMAGES.Review3} alt="" width="auto" height="auto" className="review-img"/>
                      <div className="text-black">
                        <p className="mb-0 fw-bold text-dark">Albus Dumbledore</p><small>Manager @ Howarts</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white p-5 rounded-3 h-auto swiper-slide-active" role="group" aria-label="1 / 4" style={{width: "362.667px", marginRight: "40px"}} data-swiper-slide-index="0">
                  <div className="d-flex flex-column justify-content-between h-100">
                    <h4 className="text-black">“Buyer buzz partner network disruptive non-disclosure agreement business”</h4>
                    <div className="d-flex align-items-center gap-3 mt-5"><Image src={IMAGES.Review3} alt="" width="auto" height="auto" className="review-img"/>
                      <div className="text-black">
                        <p className="mb-0 fw-bold text-dark">Albus Dumbledore</p><small>Manager @ Howarts</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white p-5 rounded-3 h-auto swiper-slide-next" role="group" aria-label="2 / 4" style={{width: "362.667px", marginRight: "40px"}} data-swiper-slide-index="1">
                  <div className="d-flex flex-column justify-content-between h-100">
                    <h4 className="text-black">“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</h4>
                    <div className="d-flex align-items-center gap-3 mt-5"><Image src={IMAGES.Review2} alt="" width="auto" height="auto" className="review-img"/>
                      <div className="text-black">
                        <p className="mb-0 fw-bold text-dark">Severus Snape</p><small>Manager @ Slytherin</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            </div>          
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            <div className="swiper-button-next" style={{color: "black"}} tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper"><svg className="svg-inline--fa fa-arrow-right fs-lg-3 fs-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg> </div>
            <div className="swiper-button-prev" style={{color: "black"}} tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper"><svg className="svg-inline--fa fa-arrow-left fs-lg-3 fs-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path></svg></div>
        </Swiper>
      </div>
      </section>
  )
}

export default Review;
