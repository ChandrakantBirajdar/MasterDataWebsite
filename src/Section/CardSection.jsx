import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sampleData = [
  {
    id: 1,
    image: "/images/collage.jpg",
    title: "JAMES CLEAR",
    subtitle: "Small Habits that Make a Big Impact on Your Life",
    duration: "1 hour 29 minutes",
  },
  {
    id: 2,
    image: "/images/closeup.jpg",
    title: "Madeleine Albright & Condoleezza Rice",
    subtitle: "Teach Diplomacy",
    duration: "3 hours 40 minutes",
  },
  {
    id: 3,
    image: "/images/bruno.jpg",
    title: "Doris Kearns Goodwin",
    subtitle: "Teaches U.S. Presidential History and Leadership",
    duration: "2 hours 56 minutes",
  },
  {
    id: 4,
    image: "/images/closeup.jpg",
    title: "Michael Lewis",
    subtitle: "Original Series",
    duration: "4 episodes",
  },
  {
    id: 5,
    image: "/images/bruno.jpg",
    title: "MARC JACOBS",
    subtitle: "Teaches Fashion Design",
    duration: "4 hours 38 minutes",
  },
];

const CardSection = () => {
  return (
    <div className="w-full bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-bold">
            Build leadership skills
          </h2>
          <button className="text-gray-300 hover:text-white text-sm">
            See all
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4.2 },
          }}
        >
          {sampleData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 text-white">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.subtitle}</p>
                  <span className="block text-xs text-gray-400 mt-2">
                    {item.duration}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardSection;
