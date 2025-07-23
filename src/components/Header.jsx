import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../features/auth/useAuth";
import Style from "../assets/logo/Style.png";
import {
  Check,
  Heart,
  Info,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

const Header = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 20); // activate sticky after small scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* navbar top */}
      <div className="navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full">
        <div className="lg:container flex justify-between items-center">
          <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
            <Check /> Free on all orders over $50
          </p>

          <div className="navbar_top_right flex items-center gap-6">
            <button>
              <Link className="text-sm text-white font-inter font-normal capitalize">
                Faqs
              </Link>
            </button>
            <button>
              <Link className="flex items-center text-sm text-white font-inter font-normal capitalize">
                <Info /> need help
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* navbar middle */}
      <div className="navbar-middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]">
        <div className="lg:container grid grid-cols-3 items-center w-full px-4 lg:px-0">
          <div className="logo-wrapper flex items-center h-[84px]">
            <Link
              to="/"
              className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
            >
              <img
                src={Style}
                alt="logo"
                className="h-22 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="search-box flex justify-center">
            <form action="#" className="max-w-[443px] w-full h-[44px] relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full h-full bg-white rounded-lg pl-4 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#029fae] focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
              >
                <Search size={22} color="#272343" />
              </button>
            </form>
          </div>
          <div className="navbar_top_right flex items-center gap-4">
            <button className="bg-[#fff] border border-gray-300 text-black flex gap-3 px-4 py-2 rounded-md font-inter font-medium capitalize hover:bg-[var(--light-color)] transition-colors">
              <ShoppingCart size={20} />
              Cart
              <span className="badge badge-sm bg-[#029fae] text-white rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>

            <button className="bg-[#fff] border border-gray-300 text-black flex gap-3 px-4 py-2 rounded-md font-inter font-medium capitalize hover:bg-[var(--light-color)] transition-colors">
              <Heart size={20} />
            </button>

            <div className="relative dropdown dropdown-end">
              {/* Trigger Button */}
              <div
                tabIndex={0}
                role="button"
                className="hover:bg-[var(--light-color)] flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:shadow transition-all duration-200 focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <User size={20} className="text-[#272343]" />
              </div>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className={`absolute p-2 right-0 mt-2 z-10 bg-white border border-gray-300 rounded-lg w-52 shadow-lg ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    to="/account"
                    className="block hover:bg-[var(--light-color)] px-4 py-2 text-sm text-[#272343] rounded-md"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account"
                    className="block hover:bg-[var(--light-color)] px-4 py-2 text-sm text-[#272343] rounded-md"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Logout
                  </Link>
                </li>
                {user && (
                  <li>
                    <button
                      onClick={() => {
                        logoutUser();
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-[#272343] hover:bg-gray-100 rounded-b-md"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* navbar bottom */}
      <div
        className={`navbar_bottom z-50 w-full px-4 md:px-8 lg:px-44 h-[75px] bg-white border-b border-[#e1e3e5] transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 shadow-md animate-slideDown"
            : "relative"
        }`}
      >
        <div className="lg:container flex items-center justify-between h-full">
          <div className="navbar_bottom_left flex items-center gap-8">
            {/* All categories */}
            <div
              tabIndex={0}
              role="button"
              className="p-1 hover:bg-[var(--light-color)] flex items-center justify-center rounded-sm bg-white border border-gray-300 hover:shadow transition-all duration-200 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 flex items-center gap-5 capitalize"
              >
                <Menu /> all categories
              </div>
              <ul
                tabIndex={0}
                className={`absolute p-2 left-33 top-46 mt-2 z-10 bg-white border border-gray-300 rounded-lg w-52 shadow-lg ${
                  isMenuOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    to="/"
                    className="block hover:bg-[var(--light-color)] px-4 py-2 text-sm text-[#272343] rounded-md"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block hover:bg-[var(--light-color)] px-4 py-2 text-sm text-[#272343] rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block hover:bg-[var(--light-color)] px-4 py-2 text-sm text-[#272343] rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kids
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              <NavLink
                to="/"
                className="text-sm text-[#029fae] font-inter font-medium capitalize"
              >
                Home
              </NavLink>
              <NavLink className="text-sm text-[#636270] font-inter font-medium capitalize">
                shop
              </NavLink>
              <NavLink className="text-sm text-[#636270] font-inter font-medium capitalize">
                product
              </NavLink>
              <NavLink className="text-sm text-[#636270] font-inter font-medium capitalize">
                pages
              </NavLink>
              <NavLink className="text-sm text-[#636270] font-inter font-medium capitalize">
                about
              </NavLink>
            </nav>
          </div>

          <div className="navbar_bottom_right">
            <p className="text-sm text-[#636270] font-inter font-normal capitalize">
              contact: <span className="text-[#272343]">(808)555-0111</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
