import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../../assets/kdStyleBanner/BANNER-1.webp";
import banner2 from "../../assets/kdStyleBanner/BANNER-2.webp";
import banner3 from "../../assets/kdStyleBanner/BANNER-3.webp";
import banner4 from "../../assets/kdStyleBanner/BANNER-4.webp";
import banner5 from "../../assets/kdStyleBanner/BANNER-5.webp";

const banners = [banner1, banner2, banner3, banner4, banner5];

function KdStyle() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 relative">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
        KD STYLE BANNERS
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={banner}
              alt={`banner-${idx + 1}`}
              className="w-full h-full sm:h-full object-cover rounded-[20px]"
              style={{ objectPosition: "top" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 transition">
        <ChevronLeft size={20} />
      </button>
      <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 transition">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default KdStyle;