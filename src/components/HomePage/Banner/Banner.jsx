/* import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; */
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import banner1 from "../../../assets/BannerImage/banner1.jpg";
import banner2 from "../../../assets/BannerImage/banner2.jpg";
import banner3 from "../../../assets/BannerImage/banner3.png";
import banner4 from "../../../assets/BannerImage/banner4.png";
import banner5 from "../../../assets/BannerImage/banner5.png";
// import banner6 from "../../../assets/BannerImage/banner2main.jpg";
// import banner7 from "../../../assets/BannerImage/banner3main.jpg";

const Banner = () => {
  return (
    //     <div >
    //     {/* <Carousel className=" text-center h-auto">
    //     <div>
    //             <img src={banner2} />
    //         </div>
    //         <div>
    //             <img src={banner3} />
    //         </div>
    //         <div>
    //             <img src={banner4} />
    //         </div>
    //         <div>
    //             <img src={banner5} />
    //         </div>
    //         <div>
    //             <img src={banner1} />
    //         </div>
    //     </Carousel> */}
    // </div>
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
        <div className="w-full lg:h-[80vh]">
          <img className="w-full" src={banner2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full lg:h-[80vh]">
          <img className="w-full" src={banner4} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full lg:h-[80vh]">
          <img className="w-full" src={banner3} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full  lg:h-[80vh]">
          <img className="w-full" src={banner5} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
