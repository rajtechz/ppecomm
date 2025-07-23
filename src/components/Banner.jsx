import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Desktop banners
import banner11 from "../assets/banner/banner11.webp";
import banner21 from "../assets/banner/banner21.webp";
import banner31 from "../assets/banner/banner31.webp";
import banner41 from "../assets/banner/banner41.webp";
import banner51 from "../assets/banner/banner51.webp";

// Mobile banners
import mobileBanner1 from "../assets/banner/MOBILE-BANNER-1.webp";
import mobileBanner2 from "../assets/banner/Mobile-Banner.webp";
import mobileBanner3 from "../assets/banner/MOBILE-BANNER3.webp";
import mobileBanner4 from "../assets/banner/MOBILE-BANNER4.webp";

// Arrays of images
const desktopBanners = [banner11, banner21, banner31, banner41, banner51];
const mobileBanners = [mobileBanner1, mobileBanner2, mobileBanner3, mobileBanner4];

function Banner() {
  return (
    <div className="w-full p-2">
      {/* Desktop View */}
      <div className="hidden lg:block h-screen">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="w-full h-full rounded-2xl"
        >
          {desktopBanners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img
                src={banner}
                alt={`desktop-banner-${index}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tablet View (md screens) - show 2 banners per view */}
      <div className="hidden md:block lg:hidden h-[60vh]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          slidesPerView={2}
          spaceBetween={10}
          className="w-full h-full rounded-2xl"
        >
          {mobileBanners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img
                src={banner}
                alt={`tablet-banner-${index}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden h-[50vh]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="w-full h-full rounded-2xl"
        >
          {mobileBanners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img
                src={banner}
                alt={`mobile-banner-${index}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
