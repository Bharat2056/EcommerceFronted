import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCartSlider = () => {
  return (
    <>
      <div className="homeCartSlider pt-4 py-8">
        <div className="container">
          <Swiper
            slidesPerView={7}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay:2500,
              disableOnInteraction:false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/">
                <div className="item p-3 mb-5 bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
                    alt=""
                    className="w-[69px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Link to="/">
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img

src="./2.jpg"
alt=""
                    className="w-[69px]"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Link to="/">
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
   src="./3.jpg"
                    alt=""
                    className="w-[69px]"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Link to="/">
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
src="./4.jpg"
alt=""
                    className="w-[69px]"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Link to="/">
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
src="./5.jpg"
alt=""
                    className="w-[69px]"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Link to="/">
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
src="./6.jpg"
alt=""
                    className="w-[69px]"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Link to="/">
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
src="./7.jpg"
alt=""
                    className="w-[69px]"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Link to="/">
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
src="./8.jpg"
alt=""
                    className="w-[69px]"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Link to="/">
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                  <img
src="./3.jpg"
alt=""
                    className="w-[69px]"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeCartSlider;
