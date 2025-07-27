import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { formatPrice } from '../utils/formatPrice';
import AddToBagButton from './AddToBagButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductCard = ({ product, viewMode }) => {
    const { name, price, originalPrice, discount, bestPrice, image, isNewDrop, color } = product;

    // Create multiple images for carousel (you can add more images to your product data)
    const productImages = [
        image,
        // Add more images here - you can import additional images from assets
        // For now, using the same image multiple times as placeholder
        image,
        image,
    ];

    if (viewMode === 'list') {
        return (
            <div className="flex border border-[var(--border-light)] rounded-lg p-4 hover:shadow-md transition-shadow bg-[var(--bg-primary)]">
                {/* Product Image */}
                <div className="relative w-32 h-32 flex-shrink-0">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    {isNewDrop && (
                        <div className="absolute top-2 left-2 bg-[var(--primary-color)] text-[var(--text-inverse)] text-xs px-2 py-1 rounded font-medium">
                            NEW DROP
                        </div>
                    )}
                </div>

                {/* Product Details */}
                <div className="ml-4 flex-1">
                    <h3 className="font-medium text-[var(--text-primary)] mb-2">{name}</h3>

                    {/* Pricing */}
                    <div className="mb-3">
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-[var(--text-primary)]">₹{formatPrice(price)}</span>
                            <span className="text-sm text-[var(--text-secondary)] line-through">₹{formatPrice(originalPrice)}</span>
                            <span className="text-sm text-[var(--success-color)] font-medium">({discount}% OFF)</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">Best price ₹{formatPrice(bestPrice)}</p>
                    </div>

                    {/* Add to Bag Button */}
                    <AddToBagButton
                        onClick={() => console.log('Add to bag:', name)}
                        className="px-4 py-2"
                        fullWidth={false}
                    />
                </div>
            </div>
        );
    }

    // Grid view (default) with carousel - using root color variables
    return (
        <div className="group bg-[var(--bg-primary)] rounded-lg overflow-hidden border border-[var(--border-light)] hover:shadow-lg transition-all duration-300">
            {/* Product Image Container with Swiper Carousel */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--gray-50)]">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: `.swiper-button-next-${product.id}`,
                        prevEl: `.swiper-button-prev-${product.id}`,
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    loop={true}
                    className="h-full w-full"
                >
                    {productImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`${name} - Image ${index + 1}`}
                                className="w-full h-full object-cover object-center"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Arrows - using root color variables */}
                <button className={`swiper-button-prev-${product.id} absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[var(--white-color)]/90 hover:bg-[var(--white-color)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md border border-[var(--border-light)] cursor-pointer`}>
                    <ChevronLeft className="w-4 h-4 text-[var(--text-primary)]" />
                </button>
                <button className={`swiper-button-next-${product.id} absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[var(--white-color)]/90 hover:bg-[var(--white-color)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md border border-[var(--border-light)] cursor-pointer`}>
                    <ChevronRight className="w-4 h-4 text-[var(--text-primary)]" />
                </button>

                {/* NEW DROP Badge */}
                {isNewDrop && (
                    <div className="absolute top-3 left-3 bg-[var(--primary-color)] text-[var(--text-inverse)] text-xs px-2 py-1 rounded font-medium z-20">
                        NEW DROP
                    </div>
                )}
            </div>

            {/* Product Info - using root color variables */}
            <div className="p-4 space-y-2">
                {/* Pricing - using root color variables */}
                <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-[var(--text-primary)]">₹{formatPrice(price)}</span>
                        <span className="text-sm text-[var(--text-secondary)] line-through">₹{formatPrice(originalPrice)}</span>
                        <span className="text-sm text-[var(--success-color)] font-medium">({discount}% OFF)</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">Best price ₹{formatPrice(bestPrice)}</p>
                </div>

                {/* Product Name */}
                <h3 className="text-sm font-medium text-[var(--text-primary)] leading-tight">{name}</h3>

                {/* Add to Bag Button */}
                <AddToBagButton
                    onClick={() => console.log('Add to bag:', name)}
                    className="mt-3"
                />
            </div>
        </div>
    );
};

export default ProductCard;
