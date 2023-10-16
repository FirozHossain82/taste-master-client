import React, { useEffect, useState } from "react";
import "./Testimonial.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating, Star } from "@smastrom/react-rating";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules

import testimonialBg  from "../../assets/testimonial-bg.jpg";
import { Autoplay,Pagination } from "swiper/modules";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://taste-master-server-144df618h-firozhossain82.vercel.app/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      });
  }, []);

  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  return (
    <div className="">
      <div className="text-center py-10">
        <h2 className=" text-4xl font-serif text-purple-600 font-bold">
            Our Testimonials!!
        </h2>
        <p className="font-Bold text-2xl mt-2 mb-2 text-orange-600">Our Customer Have to Say...</p>
      </div>
      <div className='rounded-md' style={{ background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${testimonialBg }) no-repeat bottom / cover` }} >
                <div className='p-12 md:p-24'>
                    <Swiper
                       
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay,Pagination]}
                        className="mySwiper "
                    >

                        {
                            testimonials.map(testimonial => <SwiperSlide
                                key={testimonial.id}
                            >
                                <div className='w-14 h-14 '>
                                <img className='rounded-full my-4' src={testimonial.picture} alt="" />
                                </div>

                                <h4 className='text-sm md:text-base my-4'>{testimonial.name}</h4>

                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={testimonial.rating}
                                    itemStyles={myStyles}
                                    readOnly
                                />

                                <p className='text-xs md:text-sm my-8 mx-4'>{testimonial.review}</p>
                            </SwiperSlide>)
                        }
                    </Swiper>
                     {/* <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >

                        {
                            testimonials.map(testimonial => <SwiperSlide
                                key={testimonial._id}
                            >

                                <div className='w-14 h-14'>
                                    <img className='rounded-full' src={testimonial.img} alt="" />
                                </div>

                                <div>
                                    <h4 className='text-sm md:text-base my-1'>{testimonial.name}</h4>

                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={testimonial.rating}
                                        itemStyles={myStyles}
                                        readOnly
                                    />
                                </div>

                                <svg className='absolute top-5 right-10 left-auto' width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.4375 25L14.5 25L14.5 32.1429C14.5 36.0826 11.2488 39.2857 7.25 39.2857L6.34375 39.2857C4.83711 39.2857 3.625 40.4799 3.625 41.9643L3.625 47.3214C3.625 48.8058 4.83711 50 6.34375 50L7.25 50C17.2641 50 25.375 42.0089 25.375 32.1429L25.375 5.35714C25.375 2.39955 22.9395 -3.06509e-06 19.9375 -3.32753e-06L5.4375 -4.59516e-06C2.43555 -4.8576e-06 4.16136e-06 2.39955 3.9028e-06 5.35714L2.65391e-06 19.6429C2.39535e-06 22.6004 2.43555 25 5.4375 25ZM38.0625 25L47.125 25L47.125 32.1429C47.125 36.0826 43.8738 39.2857 39.875 39.2857L38.9688 39.2857C37.4621 39.2857 36.25 40.4799 36.25 41.9643L36.25 47.3214C36.25 48.8058 37.4621 50 38.9688 50L39.875 50C49.8891 50 58 42.0089 58 32.1429L58 5.35714C58 2.39956 55.5645 -2.12922e-07 52.5625 -4.75361e-07L38.0625 -1.74299e-06C35.0606 -2.00543e-06 32.625 2.39955 32.625 5.35714L32.625 19.6429C32.625 22.6004 35.0605 25 38.0625 25Z" fill="#ECE9E9"></path>
                                </svg>

                                <p className='text-xs md:text-sm mt-2'>{testimonial.review}</p>
                            </SwiperSlide>)
                        }
                    </Swiper> */}
                </div>
            </div>
    </div>
  );
};

export default Testimonial;
