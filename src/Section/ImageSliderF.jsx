import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSliderF() {
  const slides = [
    {
      id: 1,
      img: "/images/collage.jpg",
      title: "Beautiful Mountains",
    },
    {
      id: 2,
      img: "https://picsum.photos/800/400?random=2",
      title: "Serene Lake",
    },
    {
      id: 3,
      img: "/images/closeup.jpg",
      title: "City Skyline",
    },
    {
      id: 4,
      img: "/images/bruno.jpg",
      title: "Golden Beach",
    },
  ];

  return (
    <div className="w-[100%] bg-black pt-25">
      <div className="w-screen max-w-4xl mx-auto bg-black">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-sm shadow-lg h-[400px] bg-black"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 w-full bg-black text-white text-lg p-3 rounded-b-2xl ">
                  {slide.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
