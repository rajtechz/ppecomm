import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoginModal, logout } from "../features/auth/AuthSlice";
import Style from "../assets/logo/Style.png";
import {
  Check,
  Heart,
  Info,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Package,
} from "lucide-react";
import CartDrawer from "../pages/Cart";
import LoginModal from "./LoginModal";
import shirtwomen11 from "../assets/shirtwomen11.jpg"
import shirtwomen22 from "../assets/shirtwomen22.jpg"
import shirtwomen33 from "../assets/shirtwomen33.jpg"
import shirtwomen44 from "../assets/shirtwomen44.jpg"

const Header = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { items: wishlistItems } = useSelector((state) => state.wishlist);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrollingDown = scrollTop > lastScrollY;

      // Handle sticky header
      setIsSticky(scrollTop > 20);

      // Handle top bar visibility with smooth transition
      if (scrollTop > 100) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }

      setLastScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Click outside handler for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = [
    {
      name: "Product 1",
      price: 1000,
      originalPrice: 1200,
      discount: 200,
      discountPercentage: 17,
      color: "Black",
      size: "M",
      image: shirtwomen11,
    },
    {
      name: "Product 2",
      price: 800,
      originalPrice: 1000,
      discount: 200,
      discountPercentage: 20,
      color: "Red",
      size: "L",
      image: shirtwomen22,
    },
    {
      name: "Product 3",
      price: 800,
      originalPrice: 1000,
      discount: 200,
      discountPercentage: 20,
      color: "Red",
      size: "L",
      image: shirtwomen33,
    },
    {
      name: "Product 4",
      price: 800,
      originalPrice: 1000,
      discount: 200,
      discountPercentage: 20,
      color: "Red",
      size: "L",
      image: shirtwomen44,
    },
  ];

  const openMenu = () => {
    setIsMenuOpen(true);
    // Small delay to ensure DOM is ready before starting animation
    setTimeout(() => {
      setIsMenuAnimating(true);
    }, 10);
  };

  const closeMenu = () => {
    setIsMenuAnimating(false);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300); // Match the transition duration
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAuthClick = (route) => {
    if (!isAuthenticated) {
      dispatch(showLoginModal());
      setIsDropdownOpen(false);
    } else {
      // Map routes to account page with appropriate tabs
      let actualRoute;
      if (route === '/profile') {
        actualRoute = '/account';
      } else if (route === '/orders') {
        actualRoute = '/account?tab=orders';
      } else {
        actualRoute = route;
      }
      navigate(actualRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsDropdownOpen(false);
    }
  };

  const handleNavigation = (route) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative" style={{ zIndex: 100 }}>
      {/* Top Bar - Enhanced Design with Custom Colors */}
      <div
        className="hidden lg:block transition-all duration-500 ease-in-out"
        style={{
          background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
          transform: showTopBar ? 'translateY(0)' : 'translateY(-100%)',
          opacity: showTopBar ? 1 : 0
        }}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={14} style={{ color: 'var(--white-color)' }} />
                <span style={{ color: 'var(--white-color)' }}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} style={{ color: 'var(--white-color)' }} />
                <span style={{ color: 'var(--white-color)' }}>support@kdstyle.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Check size={14} style={{ color: 'var(--success-color)' }} />
                <span style={{ color: 'var(--white-color)' }}>Free shipping on orders over $50</span>
              </div>
              <Link className="hover:opacity-80 transition-opacity duration-200" style={{ color: 'var(--white-color)' }}>FAQs</Link>
              <Link className="flex items-center space-x-1 hover:opacity-80 transition-opacity duration-200" style={{ color: 'var(--white-color)' }}>
                <Info size={14} />
                <span>Need Help</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Enhanced Design with Custom Colors */}
      <div
        className={`transition-all duration-500 ease-in-out ${isSticky ? "fixed top-0 left-0 right-0 z-50" : ""}`}
        style={{
          backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.95)' : 'var(--bg-primary)',
          backdropFilter: isSticky ? 'blur(10px)' : 'none',
          boxShadow: isSticky ? 'var(--shadow-medium)' : 'var(--shadow-light)',
          transform: isSticky ? 'translateY(0)' : 'translateY(0)',
          zIndex: isSticky ? 50 : 1000
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-3 group">
                <img
                  src={Style}
                  alt="KD Style"
                  className="h-20 lg:h-22 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />

              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-12">
              <button
                onClick={() => handleNavigation('/')}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: 'var(--text-primary)' }}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/men')}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: 'var(--text-primary)' }}
              >
                Men
              </button>
              <button
                onClick={() => handleNavigation('/women')}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: 'var(--text-primary)' }}
              >
                Women
              </button>
              <button
                onClick={() => handleNavigation('/shop')}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: 'var(--text-primary)' }}
              >
                Shop
              </button>
              <button
                onClick={() => handleNavigation('/allproduct')}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: 'var(--text-primary)' }}
              >
                All Products
              </button>
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-sm mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-3 pr-10 py-1.5 rounded-full focus:outline-none focus:ring-2 transition-all duration-200 text-sm"
                  style={{
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--primary-color)';
                    e.target.style.boxShadow = '0 0 0 2px var(--accent-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-medium)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors duration-200 cursor-pointer"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent-color)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
                >
                  <Search size={14} style={{ color: 'var(--white-color)' }} />
                </button>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              {/* Mobile Search Toggle */}
              <button
                className="lg:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer"
                style={{ backgroundColor: 'var(--gray-100)' }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search style={{ color: 'var(--text-primary)' }} size={20} />
              </button>

              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-lg transition-colors duration-200 group cursor-pointer"
                style={{ backgroundColor: 'var(--gray-100)' }}
              >
                <ShoppingCart className="group-hover:opacity-80" style={{ color: 'var(--text-primary)' }} size={20} />
                <span className="absolute -top-1 -right-1 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium animate-pulse" style={{ backgroundColor: 'var(--error-color)', color: 'var(--white-color)' }}>
                  {cartItems.length}
                </span>
              </button>

              {/* Wishlist Icon */}
              <Link
                to="/wishlist"
                className="p-2 rounded-lg transition-colors duration-200 group relative"
                style={{ backgroundColor: 'var(--gray-100)' }}
              >
                <Heart className="group-hover:opacity-80" style={{ color: 'var(--text-primary)' }} size={20} />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium animate-pulse" style={{ backgroundColor: 'var(--error-color)', color: 'var(--white-color)' }}>
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              {/* User Profile Dropdown - Hidden on Mobile */}
              <div
                className="relative hidden lg:block"
                ref={dropdownRef}
                style={{ position: 'relative', zIndex: 99999999 }}
              >
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 hover:opacity-80 relative cursor-pointer"
                  style={{ backgroundColor: 'var(--gray-100)' }}
                >
                  <User
                    size={20}
                    style={{ color: 'var(--text-primary)' }}
                  />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--error-color)' }}></div>
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-64 rounded-2xl shadow-xl"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-light)',
                      top: '100%',
                      zIndex: 99999999,
                      minWidth: '16rem',
                    }}
                  >
                    {/* Profile Section */}
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-xs font-medium mb-3" style={{ color: 'var(--text-secondary)', letterSpacing: '0.5px' }}>
                          PROFILE
                        </h3>

                        <div className="space-y-2">
                          <button
                            onClick={() => handleAuthClick('/account')}
                            className="flex items-center w-full px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-50 text-left cursor-pointer"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            <User size={18} className="mr-3" style={{ color: 'var(--text-primary)' }} />
                            <span className="text-sm font-medium">ACCOUNT</span>
                          </button>

                          <button
                            onClick={() => handleAuthClick('/orders')}
                            className="flex items-center w-full px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-50 text-left cursor-pointer"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            <Package size={18} className="mr-3" style={{ color: 'var(--text-primary)' }} />
                            <span className="text-sm font-medium">ORDERS</span>
                          </button>

                          <button
                            onClick={() => navigate('/admin/login')}
                            className="flex items-center w-full px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-50 text-left cursor-pointer"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span className="text-sm font-medium">ADMIN PANEL</span>
                          </button>
                        </div>
                      </div>

                      {/* Login/Logout Button */}
                      <div className="pt-3 border-t" style={{ borderColor: 'var(--border-light)' }}>
                        {isAuthenticated ? (
                          <button
                            onClick={() => {
                              dispatch(logout());
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 text-sm font-bold border rounded-lg transition-colors duration-200 hover:bg-red-50 cursor-pointer"
                            style={{
                              backgroundColor: 'white',
                              borderColor: '#ef4444',
                              color: '#ef4444',
                            }}
                          >
                            LOGOUT
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAuthClick('/login')}
                            className="block w-full px-4 py-2 text-sm font-medium text-center border rounded-lg transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
                            style={{
                              backgroundColor: 'var(--bg-primary)',
                              borderColor: 'var(--border-medium)',
                              color: 'var(--text-primary)',
                            }}
                          >
                            Log In
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>


              {/* Mobile Hamburger Menu - Moved to Right */}
              <button
                className="lg:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer"
                style={{ backgroundColor: 'var(--gray-100)' }}
                onClick={openMenu}
              >
                <Menu style={{ color: 'var(--text-primary)' }} size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="lg:hidden pb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--primary-color)';
                    e.target.style.boxShadow = '0 0 0 2px var(--accent-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-medium)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-colors duration-200 cursor-pointer"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent-color)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
                >
                  <Search size={16} style={{ color: 'var(--white-color)' }} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            opacity: isMenuAnimating ? 1 : 0
          }}
          onClick={closeMenu}
        >
          <div
            className="fixed top-0 left-0 w-80 h-full shadow-xl transition-transform duration-300 ease-in-out"
            style={{
              backgroundColor: 'var(--bg-primary)',
              transform: isMenuAnimating ? 'translateX(0)' : 'translateX(-100%)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4" style={{ borderBottom: '1px solid var(--border-light)' }}>
                <Link
                  to="/"
                  className="flex items-center space-x-3"
                  onClick={closeMenu}
                >
                  <img
                    src={Style}
                    alt="KD Style"
                    className="h-8 w-auto object-contain"
                  />
                  <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>KD Style</span>
                </Link>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg transition-colors duration-200"
                  style={{ backgroundColor: 'var(--gray-100)' }}
                >
                  <X style={{ color: 'var(--text-primary)' }} size={24} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 p-4">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => {
                        handleNavigation('/');
                        closeMenu();
                      }}
                      className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 hover:opacity-80"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleNavigation('/men');
                        closeMenu();
                      }}
                      className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 hover:opacity-80"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Men
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleNavigation('/women');
                        closeMenu();
                      }}
                      className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 hover:opacity-80"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Women
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleNavigation('/shop');
                        closeMenu();
                      }}
                      className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 hover:opacity-80"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Shop
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleNavigation('/allproduct');
                        closeMenu();
                      }}
                      className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 hover:opacity-80"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      All Products
                    </button>
                  </li>
                </ul>
              </nav>

              {/* Mobile Profile Section - Added at Bottom */}
              <div className="p-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                <div className="flex items-center space-x-3 mb-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--gray-100)' }}>
                  <img
                    src="https://i.pravatar.cc/40"
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover border-2"
                    style={{ borderColor: 'var(--border-light)' }}
                  />
                  <div className="flex-1">
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                      {user ? 'Welcome back!' : 'Guest User'}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {user ? user.email : 'Sign in to your account'}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      if (!isAuthenticated) {
                        dispatch(showLoginModal());
                      } else {
                        handleNavigation('/account');
                      }
                      closeMenu();
                    }}
                    className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--gray-100)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    <User size={20} className="mr-3" />
                    My Account
                  </button>
                  {isAuthenticated ? (
                    <button
                      onClick={() => {
                        dispatch(logout());
                        closeMenu();
                      }}
                      className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                      style={{ color: 'var(--text-primary)' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--gray-100)'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <X size={20} className="mr-3" />
                      Sign Out
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(showLoginModal());
                        closeMenu();
                      }}
                      className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                      style={{ color: 'var(--text-primary)' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--gray-100)'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <User size={20} className="mr-3" />
                      Sign In
                    </button>
                  )}
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="p-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <Phone size={16} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <Mail size={16} />
                    <span>support@kdstyle.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--success-color)' }}>
                    <Check size={16} />
                    <span>Free shipping on orders over $50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />

      {/* Login Modal */}
      <LoginModal />
    </div>
  );
};

export default Header;