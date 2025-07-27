import React, { useState } from 'react';
import {
  ChevronDown,
  Grid,
  List,
  Truck,
  Shield,
  Clock,
  X,
  Filter,
  SlidersHorizontal,
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import FilterSection from '../components/FilterSection';
import { banners, menProducts, cardImages } from '../assets/images';

function Men() {
  const [sortBy, setSortBy] = useState('Featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('category');

  const menProductsData = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      price: 899,
      originalPrice: 1499,
      discount: 40,
      bestPrice: 799,
      image: menProducts.tshirt1,
      isNewDrop: true,
      color: 'White',
    },
    {
      id: 2,
      name: 'Premium Cotton Shirt',
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      bestPrice: 1199,
      image: menProducts.shirt1,
      isNewDrop: false,
      color: 'Blue',
    },
    {
      id: 3,
      name: 'Slim Fit Jeans',
      price: 1599,
      originalPrice: 2499,
      discount: 36,
      bestPrice: 1499,
      image: menProducts.pant1,
      isNewDrop: true,
      color: 'Blue',
    },
    {
      id: 4,
      name: 'Casual Denim Jacket',
      price: 1899,
      originalPrice: 2999,
      discount: 37,
      bestPrice: 1799,
      image: menProducts.shirt2,
      isNewDrop: false,
      color: 'Denim',
    },
    {
      id: 5,
      name: 'Formal Business Shirt',
      price: 1399,
      originalPrice: 2199,
      discount: 36,
      bestPrice: 1299,
      image: menProducts.shirt3,
      isNewDrop: false,
      color: 'White',
    },
    {
      id: 6,
      name: 'Comfortable Cargo Pants',
      price: 1699,
      originalPrice: 2699,
      discount: 37,
      bestPrice: 1599,
      image: menProducts.pant2,
      isNewDrop: true,
      color: 'Khaki',
    },
    {
      id: 7,
      name: 'Trendy Graphic Tee',
      price: 799,
      originalPrice: 1299,
      discount: 38,
      bestPrice: 699,
      image: menProducts.tshirt2,
      isNewDrop: false,
      color: 'Black',
    },
    {
      id: 8,
      name: 'Premium Oxford Shirt',
      price: 1499,
      originalPrice: 2399,
      discount: 38,
      bestPrice: 1399,
      image: menProducts.shirt4,
      isNewDrop: false,
      color: 'Pink',
    },
  ];

  const filterCategories = [
    { id: 'category', name: 'Category', count: 8, selected: 4 },
    { id: 'color', name: 'Color', count: 10, selected: 5 },
    { id: 'price', name: 'Price', count: 6, selected: 3 },
    { id: 'size', name: 'Size', count: 12, selected: 6 },
    { id: 'fit', name: 'Fit', count: 4, selected: 2 },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'new-arrivals', name: 'New Arrivals' },
    { id: 'best-selling', name: 'Best Selling' },
    { id: 'price-low-high', name: 'Price Low to High' },
    { id: 'price-high-low', name: 'Price High to Low' },
  ];

  const FilterModal = () => (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${showFilterModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out ${showFilterModal ? 'bg-opacity-50' : 'bg-opacity-0'}`}
        onClick={() => setShowFilterModal(false)}
      />

      {/* Modal */}
      <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl transition-all duration-500 ease-in-out transform ${showFilterModal ? 'translate-y-0' : 'translate-y-full'}`} style={{ height: '70vh' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-light)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">Filters</h2>
          <button
            onClick={() => setShowFilterModal(false)}
            className="p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex h-full">
          {/* Left Panel - Filter Categories */}
          <div className="w-1/3 border-r border-[var(--border-light)]">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`w-full p-4 text-left border-b border-[var(--border-light)] transition-colors ${activeFilter === category.id
                  ? 'bg-[var(--primary-color)] text-[var(--text-inverse)]'
                  : 'bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{category.name}</span>
                  <span className="text-sm opacity-75">{category.count} ({category.selected})</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Panel - Filter Options */}
          <div className="w-2/3 p-4">
            <div className="space-y-4">
              {activeFilter === 'category' && (
                <>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">T-Shirts (15)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">Shirts (12)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">Pants (8)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">Jackets (6)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                </>
              )}
              {activeFilter === 'color' && (
                <>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">White (8)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">Black (6)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">Blue (10)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">Pink (4)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                </>
              )}
              {activeFilter === 'price' && (
                <div className="space-y-4">
                  <div className="text-sm text-[var(--text-secondary)]">Selected Price Range</div>
                  <div className="text-lg font-medium text-[var(--text-primary)]">₹0 - ₹3000</div>
                  <div className="w-full bg-[var(--border-light)] h-2 rounded-full">
                    <div className="w-full bg-[var(--primary-color)] h-2 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-sm text-[var(--text-secondary)]">
                    <span>₹0</span>
                    <span>₹3000</span>
                  </div>
                </div>
              )}
              {activeFilter === 'size' && (
                <>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">S (8)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">M (12)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">L (15)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">XL (10)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">XXL (6)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                </>
              )}
              {activeFilter === 'fit' && (
                <>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">Regular (20)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">Slim (12)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[var(--text-primary)]">Loose (8)</span>
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--border-light)]">
          <div className="flex justify-end">
            <button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Clear all
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SortModal = () => (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${showSortModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out ${showSortModal ? 'bg-opacity-50' : 'bg-opacity-0'}`}
        onClick={() => setShowSortModal(false)}
      />

      {/* Modal */}
      <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl transition-all duration-500 ease-in-out transform ${showSortModal ? 'translate-y-0' : 'translate-y-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-light)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">Sort by</h2>
          <button
            onClick={() => setShowSortModal(false)}
            className="p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {sortOptions.map((option) => (
            <div key={option.id} className="flex items-center justify-between">
              <span className="text-[var(--text-primary)]">{option.name}</span>
              <input
                type="radio"
                name="sort"
                id={option.id}
                checked={sortBy === option.name}
                onChange={() => {
                  setSortBy(option.name);
                  setShowSortModal(false);
                }}
                className="w-4 h-4 text-[var(--primary-color)] border-[var(--border-medium)] focus:ring-[var(--primary-color)]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="justify-center items-center py-4 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)]">
      {/* Mobile Header */}
      <div className="md:hidden bg-[var(--bg-primary)] border-b border-[var(--border-light)] -mx-4 -mt-4 mb-4">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-full">
              <div className="w-5 h-3 flex flex-col justify-between">
                <div className="w-full h-0.5 bg-[var(--text-primary)]"></div>
                <div className="w-full h-0.5 bg-[var(--text-primary)]"></div>
                <div className="w-full h-0.5 bg-[var(--text-primary)]"></div>
              </div>
            </button>
            <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
              <span className="text-[var(--text-inverse)] font-bold text-sm">W</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-full">
              <div className="w-4 h-4 border-2 border-[var(--text-primary)] rounded-full"></div>
            </button>
            <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-full relative">
              <div className="w-5 h-5 border-2 border-[var(--text-primary)] rounded"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--error-color)] rounded-full flex items-center justify-center">
                <span className="text-[var(--text-inverse)] text-xs">3</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="md:hidden mb-4">
        <h1 className="text-xl font-bold text-[var(--text-primary)]">MEN'S FASHION</h1>
      </div>

      {/* Mobile Filter Buttons */}
      <div className="md:hidden mb-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setShowFilterModal(true)}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-[var(--bg-secondary)] rounded-full text-[var(--text-primary)] text-sm font-medium"
          >
            <span>Category</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowFilterModal(true)}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-[var(--bg-secondary)] rounded-full text-[var(--text-primary)] text-sm font-medium"
          >
            <span>Price</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowFilterModal(true)}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-[var(--bg-secondary)] rounded-full text-[var(--text-primary)] text-sm font-medium"
          >
            <span>Size</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop Hero Banner */}
      <div className="hidden md:block mb-6">
        <div className="flex justify-center items-center">
          <div className="w-full rounded-2xl overflow-hidden">
            <img
              src={banners.banner11}
              alt="Men's Fashion Banner"
              className="w-full rounded-2xl object-cover object-center border border-[var(--border-light)] shadow"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <FilterSection />
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Desktop View Options and Sort */}
            <div className="hidden md:flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded border border-[var(--border-light)] transition-colors ${viewMode === 'grid' ? 'bg-[var(--primary-color)] text-[var(--text-inverse)]' : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--primary-light)]'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded border border-[var(--border-light)] transition-colors ${viewMode === 'list' ? 'bg-[var(--primary-color)] text-[var(--text-inverse)]' : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--primary-light)]'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <span className="text-sm text-[var(--text-secondary)]">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-[var(--border-light)] rounded px-3 py-1 focus:outline-none focus:border-[var(--primary-color)] w-full sm:w-auto bg-[var(--bg-primary)] text-[var(--text-primary)]"
                >
                  <option value="Featured">Featured</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`grid gap-4 sm:gap-6 ${viewMode === 'grid' ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {menProductsData.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--bg-primary)] border-t border-[var(--border-light)] p-4 -mx-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setShowFilterModal(true)}
            className="flex-1 flex items-center justify-center space-x-2 py-3 bg-[var(--bg-secondary)] rounded-lg text-[var(--text-primary)] font-medium"
          >
            <Filter className="w-5 h-5" />
            <span>FILTER</span>
          </button>
          <button
            onClick={() => setShowSortModal(true)}
            className="flex-1 flex items-center justify-center space-x-2 py-3 bg-[var(--bg-secondary)] rounded-lg text-[var(--text-primary)] font-medium"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <div className="flex flex-col items-start">
              <span>SORT</span>
              <span className="text-xs text-[var(--text-secondary)]">New Arrivals</span>
            </div>
          </button>
        </div>
        <div className="text-center mt-2 text-xs text-[var(--text-secondary)]">
          <span className="inline-flex items-center">
            <div className="w-3 h-3 border border-[var(--text-secondary)] rounded mr-1"></div>
            wrogn.com
          </span>
        </div>
      </div>

      {/* Modals */}
      <FilterModal />
      <SortModal />
    </div>
  );
}

export default Men;
