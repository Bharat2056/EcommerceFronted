import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const HomeSlider = () => {
  return (
    <>
      <div className="homeslider py-4">
        <div className="container">
          <Swiper
            navigation={true}
            modules={[Navigation ,Autoplay]}
            autoplay={{
              delay:2500,
              disableOnInteraction:false,
            }}
            className="sliderHome"
          >
            
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://eshopweb.store/uploads/media/2023/cloth_offer.jpg"
                  alt="Banner Slide"
                  className="w-full p-50"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://eshopweb.store/uploads/media/2023/cloth_offer1.jpg"
                  alt="Banner Slide"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
