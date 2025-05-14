import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Button from "@mui/material/Button";

const HomeSliderV2 = () => {
  return (
    <>
      <Swiper
         loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay:2500,
          disableOnInteraction:false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />
            <div className="info absolute top-0 -right-[100%] z-50 h-[100%] opacity-0 w-[50%] p-8 flex items-center flex-col justify-center transition-all duration-500">
              <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0 ">
                Women Solid Round Green T-Shirt
              </h2>
              <h3 className="text-[18px] w-full flex items-center gap-3 text-left font-[500] mt-3 mb-3">
                Starting at only{" "}
                <span className="text-primary text-[30px] font-[600] ">
                  $50.00
                </span>
              </h3>
              <div className="w-full relative -bottom-[100%] opacity-0 btn_">
                <Button className="btn-org ">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />
             <div className="info absolute top-0 -right-[100%] z-50 h-[100%] opacity-0 w-[50%] p-8 flex items-center flex-col justify-center transition-all duration-500">
              <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0 ">
                Buy Modern Chair in Black Color
              </h2>
              <h4 className="text-[18px] w-full flex items-center gap-3 text-left font-[500] mt-3 mb-3">
                Starting at only{" "}
                <span className="text-primary text-[30px] font-[600] ">
                  $99.00
                </span>
              </h4>
              <div className="w-full relative -bottom-[100%] opacity-0 btn_">
                <Button className="btn-org">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSliderV2;
