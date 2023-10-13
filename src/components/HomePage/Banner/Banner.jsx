import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import banner2 from "../../../assets/BannerImage/banner2.jpg";
import banner3 from "../../../assets/BannerImage/banner3.png";
import banner4 from "../../../assets/BannerImage/banner4.png";
import banner5 from "../../../assets/BannerImage/banner5.png";


const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full lg:h-[80vh] relative ">
          <img className="w-full" src={banner2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full lg:h-[80vh] relative">
          <img className="w-full" src={banner4} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full lg:h-[80vh] relative">
          <img className="w-full" src={banner3} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full  lg:h-[80vh] relative">
          <img className="w-full" src={banner5} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;