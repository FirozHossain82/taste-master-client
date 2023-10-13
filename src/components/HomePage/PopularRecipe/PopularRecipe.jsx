import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "../PopularRecipe/PopularRecipe.css";

// import required modules
import { Pagination } from "swiper/modules";
const PopularRecipe = () => {
  return (
    <div>
      <div className="text-center py-10">
        <h2 className=" text-4xl font-serif text-purple-600 font-bold">
          Our Most Popular Recipes!!
        </h2>
        {/* <p className="font-medium text-2xl mt-2 text-orange-600">Popular Recipes</p> */}
      </div>
      <div className="pb-10 h-72 w-full ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="rounded " src="https://i.ibb.co/dGMDcMw/grilled-buffalo-chicken-wings-rustic-wood-plate-generated-by-ai-188544-26049.jpg" alt="" />
             <h3 className="text-2xl uppercase text-center -mt-16 text-white">Chicken Fry</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded " src="https://i.ibb.co/wdTYVgs/chicken-briyani.jpg" alt="" />
             <h3 className="text-2xl uppercase text-center -mt-16 text-white">Chicken Biriyani</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded " src="https://i.ibb.co/Jzk3Prr/tandury-chiken.jpg" alt="" />
             <h3 className="text-2xl uppercase text-center -mt-16 text-white">Tandoori Chicken</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded " src="https://i.ibb.co/1zRySqm/pasta-bake-with-penne-tomatoes-mozarella-661915-128.jpg" alt="" />
             <h3 className="text-2xl uppercase text-center -mt-16 text-white">Pasta</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded " src="https://i.ibb.co/FxW5KcT/gulab-jamun.jpg" alt="" />
             <h3 className="text-2xl uppercase text-center -mt-16 text-white">Gulab Jamun</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded " src="https://i.ibb.co/d6DcWfJ/CupCake.jpg" alt="" />
             <h3 className="text-2xl uppercase text-center -mt-16 text-white">Sweet CupCake</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded " src="https://i.ibb.co/thC7r0s/Chocolate-torte.jpg" alt="" />
             <h3 className="text-2xl uppercase text-center -mt-16 text-white">Chocolate torte</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded " src="https://i.ibb.co/rcQ6kHH/korean-food-fried-rice-with-kimchi-serve-with-fried-egg-1150-42929.jpg" alt="" />
             <h3 className="text-2xl uppercase text-center -mt-16 text-white">Bibimbap</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded " src="https://i.ibb.co/Fgbyk4j/Grilled-steak.jpg" alt="" />
             <h3 className="text-2xl uppercase text-center -mt-16 text-white">Steak</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularRecipe;
