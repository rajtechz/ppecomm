import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import tshirtwomen from "../assets/t-shirtwomen2.JPG";
import shirtman1 from "../assets/t-shirtman1.jpg";
import shirtwomen11 from "../assets/shirtwomen11.jpg";
import shirtwomen1 from "../assets/shirtwomen1.jpg";
import CardSection from "../components/cardsection/CardSection";
import Modal from "../components/modal/Modal";
import { useState } from "react";

const FeaturedProducts = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    window.open("https://www.youtube.com/watch?v=YOUR_VIDEO_ID", "_blank");
  };

  const product = {
    title: "Casual Anti Fit Jeans",
    color: "Green",
    rating: 4.0,
    originalPrice: 2399,
    discountedPrice: 1559,
    discountPercent: 35,
    sizes: [28, 30, 32, 34, 36],
  };

  const images = [tshirtwomen, shirtman1, shirtwomen11, shirtwomen1];

  const features = [
    {
      id: 1,
      title: "Women Jacket dark brown",
      originalPrice: "$19.00",
      currentPrice: "$16.00",
      image: shirtwomen11,
      rating: 5,
      sale: true,
    },
    {
      id: 2,
      title: "Pink solid bag leather",
      originalPrice: "$69.00",
      currentPrice: "$59.00",
      image: tshirtwomen,
      rating: 4,
      sale: true,
    },
    {
      id: 3,
      title: "Arston slim tapered Jean",
      originalPrice: "$75.00",
      currentPrice: "$60.00",
      image: shirtman1,
      rating: 5,
      sale: true,
    },
    {
      id: 4,
      title: "Women wool blend jacket",
      originalPrice: "$55.00",
      currentPrice: "$12.00",
      image: shirtwomen1,
      rating: 4,
      sale: true,
    },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="bg-gray-50 py-16">
        <div className="lg:container mx-auto px-4">
          <SectionTitle title="WEAR IT LIKE VIRAT" mb="mb-12" />

          <CardSection />


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="relative p-6 rounded-xl shadow-lg bg-white overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                {/* Sale Badge */}
                {feature.sale && (
                  <>
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      SALE!
                    </div>

                    <button
                      className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart
                        size="1.5rem"
                        color="#272343"
                        className="cursor-pointer"
                      />
                    </button>
                  </>
                )}

                {/* Product Image */}
                <div className="mb-6 relative overflow-hidden rounded-lg">
                  <motion.img
                    className="w-full h-80 object-cover transition-transform duration-300"
                    src={feature.image}
                    alt={feature.title}
                    whileHover={{ scale: 1.1 }}
                  />
                </div>

                {/* Product Content */}
                <div className="text-center">
                  <h4 className="text-lg text-[#272343] font-inter font-medium mb-3">
                    {feature.title}
                  </h4>
                  <div className="flex justify-center items-center gap-3 mb-3">
                    <span className="text-base text-[#9a9caa] font-inter font-normal line-through">
                      {feature.originalPrice}
                    </span>
                    <span className="text-2xl text-[#272343] font-semibold font-inter">
                      {feature.currentPrice}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-1 mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${i < feature.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                          }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <motion.button
                    className="w-12 flex items-center justify-center gap-2 h-[48px] bg-primary rounded-lg capitalize text-white font-inter font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(true)}
                  >
                    <ShoppingCart size="1.5rem" color="#fff" />
                  </motion.button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: "url('/src/assets/videobg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Centered Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
          <div className="mb-4 inline-block px-3 py-1 text-sm font-medium rounded bg-white text-red-500 uppercase tracking-widest">
            Live Stream
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Winter Lookbook 2022
          </h2>

          {/* Play Button */}
          <button
            onClick={handleClick}
            className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <svg
              className="w-8 h-8 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 4l12 6-12 6V4z" />
            </svg>
          </button>
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={images}
        product={product}
      />
    </>
  );
};

export default FeaturedProducts;
