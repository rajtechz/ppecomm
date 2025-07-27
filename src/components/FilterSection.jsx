import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FilterSection = () => {
    const [expandedSections, setExpandedSections] = useState({
        category: true,
        color: true,
        price: true,
        size: true
    });

    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        color: [],
        size: []
    });

    const [priceRange, setPriceRange] = useState([0, 5000]);

    const colors = [
        { name: 'Beige', count: 1, hex: '#F5F5DC' },
        { name: 'Black', count: 12, hex: '#000000' },
        { name: 'Blue', count: 3, hex: '#0033FF' },
        { name: 'Brown', count: 2, hex: '#8B4513' },
        { name: 'Grey', count: 2, hex: '#BEBEBE' },
    ];

    const categories = [
        { name: 'Athleisure', count: 5 },
        { name: 'Sliders', count: 9 },
        { name: 'Sneakers', count: 25 },
    ];

    const sizes = [
        { name: '6', count: 3 },
        { name: '7', count: 3 },
        { name: '8', count: 3 },
        { name: '9', count: 3 },
        { name: '10', count: 3 },
    ];

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const toggleFilter = (type, value) => {
        setSelectedFilters(prev => ({
            ...prev,
            [type]: prev[type].includes(value)
                ? prev[type].filter(item => item !== value)
                : [...prev[type], value]
        }));
    };

    const handlePriceChange = (index, value) => {
        const newRange = [...priceRange];
        newRange[index] = parseInt(value);
        setPriceRange(newRange);
    };

    return (
        <div className="w-full max-w-xs">
            <h1 className="text-xl font-extrabold mb-2 tracking-tight text-[var(--text-primary)]">FOOTWEAR</h1>
            <h2 className="text-lg font-bold mb-2 text-[var(--text-primary)]">Filters</h2>
            <hr className="mb-4 border-[var(--border-light)]" />

            {/* Category Filter */}
            <div className="mb-4">
                <button
                    onClick={() => toggleSection('category')}
                    className="flex items-center justify-between w-full text-left font-semibold text-[var(--text-primary)] mb-2 hover:text-[var(--primary-color)] transition-colors"
                >
                    Category
                    {expandedSections.category ? (
                        <ChevronDown className="w-4 h-4" />
                    ) : (
                        <ChevronRight className="w-4 h-4" />
                    )}
                </button>
                {expandedSections.category && (
                    <div className="space-y-2 pl-1">
                        {categories.map((cat) => (
                            <label key={cat.name} className="flex items-center justify-between cursor-pointer text-[var(--text-primary)] text-[15px] hover:text-[var(--primary-color)] transition-colors">
                                <span>{cat.name} <span className="text-[var(--text-secondary)]">({cat.count})</span></span>
                                <input
                                    type="checkbox"
                                    checked={selectedFilters.category.includes(cat.name)}
                                    onChange={() => toggleFilter('category', cat.name)}
                                    className="rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:ring-2"
                                />
                            </label>
                        ))}
                    </div>
                )}
            </div>
            <hr className="mb-4 border-[var(--border-light)]" />

            {/* Color Filter */}
            <div className="mb-4">
                <button
                    onClick={() => toggleSection('color')}
                    className="flex items-center justify-between w-full text-left font-semibold text-[var(--text-primary)] mb-2 hover:text-[var(--primary-color)] transition-colors"
                >
                    Color
                    {expandedSections.color ? (
                        <ChevronDown className="w-4 h-4" />
                    ) : (
                        <ChevronRight className="w-4 h-4" />
                    )}
                </button>
                {expandedSections.color && (
                    <div className="space-y-2 pl-1">
                        {colors.map((color) => (
                            <label key={color.name} className="flex items-center justify-between cursor-pointer text-[var(--text-primary)] text-[15px] hover:text-[var(--primary-color)] transition-colors">
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-full border border-[var(--border-medium)] inline-block" style={{ backgroundColor: color.hex }}></span>
                                    {color.name} <span className="text-[var(--text-secondary)]">({color.count})</span>
                                </span>
                                <input
                                    type="checkbox"
                                    checked={selectedFilters.color.includes(color.name)}
                                    onChange={() => toggleFilter('color', color.name)}
                                    className="rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:ring-2"
                                />
                            </label>
                        ))}
                        <button className="text-sm text-[var(--primary-color)] hover:text-[var(--accent-color)] hover:underline font-medium mt-1 transition-colors cursor-pointer">Show more</button>
                    </div>
                )}
            </div>
            <hr className="mb-4 border-[var(--border-light)]" />

            {/* Price Filter */}
            <div className="mb-4">
                <button
                    onClick={() => toggleSection('price')}
                    className="flex items-center justify-between w-full text-left font-semibold text-[var(--text-primary)] mb-2 hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                >
                    Price
                    {expandedSections.price ? (
                        <ChevronDown className="w-4 h-4" />
                    ) : (
                        <ChevronRight className="w-4 h-4" />
                    )}
                </button>
                {expandedSections.price && (
                    <div className="space-y-2 pl-1">
                        <p className="text-sm text-[var(--text-secondary)] mb-1">Selected Price Range</p>
                        <div className="flex justify-between text-xs text-[var(--text-muted)] mb-1">
                            <span>₹{priceRange[0]}</span>
                            <span>₹{priceRange[1]}</span>
                        </div>
                        <div className="relative h-6 flex items-center">
                            <input
                                type="range"
                                min="0"
                                max="5000"
                                value={priceRange[0]}
                                onChange={(e) => handlePriceChange(0, e.target.value)}
                                className="w-full h-2 bg-[var(--gray-200)] rounded-lg appearance-none cursor-pointer slider absolute z-10"
                                style={{
                                    background: `linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${(priceRange[0] / 5000) * 100}%, var(--gray-200) ${(priceRange[0] / 5000) * 100}%, var(--gray-200) 100%)`
                                }}
                            />
                            <input
                                type="range"
                                min="0"
                                max="5000"
                                value={priceRange[1]}
                                onChange={(e) => handlePriceChange(1, e.target.value)}
                                className="w-full h-2 bg-[var(--gray-200)] rounded-lg appearance-none cursor-pointer slider absolute z-20"
                                style={{
                                    background: `linear-gradient(to right, var(--gray-200) 0%, var(--gray-200) ${(priceRange[1] / 5000) * 100}%, var(--primary-color) ${(priceRange[1] / 5000) * 100}%, var(--primary-color) 100%)`
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
            <hr className="mb-4 border-[var(--border-light)]" />

            {/* Size Filter */}
            <div className="mb-4">
                <button
                    onClick={() => toggleSection('size')}
                    className="flex items-center justify-between w-full text-left font-semibold text-[var(--text-primary)] mb-2 hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                >
                    Size
                    {expandedSections.size ? (
                        <ChevronDown className="w-4 h-4" />
                    ) : (
                        <ChevronRight className="w-4 h-4" />
                    )}
                </button>
                {expandedSections.size && (
                    <div className="space-y-2 pl-1">
                        {sizes.map((size) => (
                            <label key={size.name} className="flex items-center justify-between cursor-pointer text-[var(--text-primary)] text-[15px] hover:text-[var(--primary-color)] transition-colors">
                                <span>{size.name} <span className="text-[var(--text-secondary)]">({size.count})</span></span>
                                <input
                                    type="checkbox"
                                    checked={selectedFilters.size.includes(size.name)}
                                    onChange={() => toggleFilter('size', size.name)}
                                    className="rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:ring-2"
                                />
                            </label>
                        ))}
                        <button className="text-sm text-[var(--primary-color)] hover:text-[var(--accent-color)] hover:underline font-medium mt-1 transition-colors cursor-pointer">Show more</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterSection; 