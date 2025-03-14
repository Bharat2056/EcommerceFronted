import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
  return (
    <>
      <div className="py-4 w-full">
        <Swiper
          slidesPerView={props.items}
          spaceBetween={10}
          navigation={true} 
          modules={[Navigation]}
          className='smlBtn'
        >
          <SwiperSlide>
            <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg'}  link={'/'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg'}  link={'/'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg'}  link={'/'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg'}  link={'/'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg'}  link={'/'}/>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </>
  );
};

export default AdsBannerSlider;
