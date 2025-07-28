import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X, Star, Phone, Eye, EyeOff } from "lucide-react";
import {
  showLoginModal,
  hideLoginModal,
  setMobile,
  setOTP,
  clearError,
  sendOTP,
  verifyOTP,
} from "../features/auth/AuthSlice";
import carouselIcon from "../assets/carousel_icon.svg";
import SendOTPButton from "./SendOTPButton";

const LoginModal = () => {
  const dispatch = useDispatch();
  const {
    showLoginModal: isOpen,
    mobile,
    otp,
    otpSent,
    loading,
    otpLoading,
    error,
  } = useSelector((state) => state.auth);

  const [showOTP, setShowOTP] = useState(false);
  const [notifyUpdates, setNotifyUpdates] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleClose = () => {
    dispatch(hideLoginModal());
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    dispatch(setMobile(value));
    dispatch(clearError());
  };

  const handleOTPChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    dispatch(setOTP(value));
    dispatch(clearError());
  };

  const handleSendOTP = () => {
    if (mobile.length === 10) {
      dispatch(sendOTP({ mobile }));
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 4) {
      dispatch(verifyOTP({ mobile, otp }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpSent) {
      handleSendOTP();
    } else {
      handleVerifyOTP();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999999] flex items-center justify-center p-4">
      {/* Backdrop - Much More Transparent */}
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        className="absolute inset-0"
        onClick={handleClose}
      />

      {/* Modal - Enhanced Shadow and Border */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden border border-gray-200">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Header */}
          <div className="bg-gray-900 text-white p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Branding */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-2xl font-bold text-yellow-400">WROGN</h2>
                <img src={carouselIcon} alt="Kwik Pass" className="w-4 h-4" />
              </div>
              <p className="text-xs text-gray-400">Powered by Kwik Pass</p>
            </div>

            {/* Main Title */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">
                Hey Fam! Log in to join the Wrogn Tribe!
              </h3>
            </div>
          </div>

          {/* Mobile Form */}
          <div className="bg-white p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Unlock Superior Discounts
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Mobile Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter mobile number to login
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                    <span className="text-sm">🇮🇳</span>
                    <span className="text-sm text-gray-500">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={handleMobileChange}
                    placeholder="Enter Mobile Number"
                    className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={otpSent}
                  />
                </div>
              </div>

              {/* OTP Input */}
              {otpSent && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter OTP
                  </label>
                  <div className="relative">
                    <input
                      type={showOTP ? "text" : "password"}
                      value={otp}
                      onChange={handleOTPChange}
                      placeholder="Enter 4-digit OTP"
                      className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      maxLength={4}
                    />
                    <button
                      type="button"
                      onClick={() => setShowOTP(!showOTP)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showOTP ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={notifyUpdates}
                    onChange={(e) => setNotifyUpdates(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">
                    Notify me for any updates & offers
                  </span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    I accept that I have read & understood{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      T&Cs
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <SendOTPButton
                onClick={handleSubmit}
                disabled={
                  loading ||
                  otpLoading ||
                  !acceptTerms ||
                  (otpSent ? otp.length !== 4 : mobile.length !== 10)
                }
                loading={loading || otpLoading}
                otpSent={otpSent}
              />

              {/* Trouble logging in */}
              <div className="text-center">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Trouble logging in?
                </a>
              </div>
            </form>

            {/* Mobile Benefits */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3 flex items-center space-x-3">
                  <Star size={16} className="text-yellow-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Extra 5% OFF on prepaid payments
                  </span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 flex items-center space-x-3">
                  <Star size={16} className="text-yellow-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Free shipping for orders above ₹799
                  </span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 flex items-center space-x-3">
                  <Star size={16} className="text-yellow-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    7-day stress-free return & exchange
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          {/* Left Section - Dark Background with Benefits */}
          <div className="bg-gray-900 text-white p-8 w-1/2 relative">
            {/* Branding */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-3xl font-bold text-yellow-400">WROGN</h2>
                <img src={carouselIcon} alt="Kwik Pass" className="w-4 h-4" />
              </div>
              <p className="text-xs text-gray-400">Powered by Kwik Pass</p>
            </div>

            {/* Main Title */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Hey Fam! Log in to join the Wrogn Tribe!
              </h3>
            </div>

            {/* Benefits Cards */}
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-4 flex items-center space-x-3">
                <Star size={20} className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm">
                  Extra 5% OFF on prepaid payments
                </span>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 flex items-center space-x-3">
                <Star size={20} className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm">
                  Free shipping for orders above ₹799
                </span>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 flex items-center space-x-3">
                <Star size={20} className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm">
                  7-day stress-free return & exchange
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - White Background with Form */}
          <div className="bg-white p-8 w-1/2 relative">
            {/* Close button for desktop */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Form Title */}
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Unlock Superior Discounts
            </h4>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Mobile Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter mobile number to login
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                    <span className="text-sm">🇮🇳</span>
                    <span className="text-sm text-gray-500">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={handleMobileChange}
                    placeholder="Enter Mobile Number"
                    className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={otpSent}
                  />
                </div>
              </div>

              {/* OTP Input */}
              {otpSent && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter OTP
                  </label>
                  <div className="relative">
                    <input
                      type={showOTP ? "text" : "password"}
                      value={otp}
                      onChange={handleOTPChange}
                      placeholder="Enter 4-digit OTP"
                      className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      maxLength={4}
                    />
                    <button
                      type="button"
                      onClick={() => setShowOTP(!showOTP)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showOTP ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={notifyUpdates}
                    onChange={(e) => setNotifyUpdates(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">
                    Notify me for any updates & offers
                  </span>
                </label>

                <label className="flex items-center space-x-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      I accept that I have read & understood{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        T&Cs
                      </a>
                    </span>
                  </label>
                </label>
              </div>

              {/* Submit Button */}
              <SendOTPButton
                onClick={handleSubmit}
                disabled={
                  loading ||
                  otpLoading ||
                  !acceptTerms ||
                  (otpSent ? otp.length !== 4 : mobile.length !== 10)
                }
                loading={loading || otpLoading}
                otpSent={otpSent}
              />

              {/* Trouble logging in */}
              <div className="text-center">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Trouble logging in?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
