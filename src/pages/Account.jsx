import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { logout } from "../features/auth/AuthSlice";
import {
  User,
  Package,
  MapPin,
  HelpCircle,
  Calendar,
  Plus,
  ChevronDown,
  X,
  Menu,
} from "lucide-react";
import Profile from "./Profile";
import Orders from "./Orders";
import Addresses from "./Addresses";
import FAQ from "./FAQ"; // Import the new FAQ component

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useSelector((state) => state.auth);

  // Get the tab from URL parameters, default to 'profile'
  const tabFromURL = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabFromURL || "profile");
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [addressFormData, setAddressFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    flatBuilding: "",
    areaLocality: "",
    pinCode: "",
    city: "",
    state: "",
  });

  // Update active tab when URL parameters change
  useEffect(() => {
    if (tabFromURL) {
      setActiveTab(tabFromURL);
    }
  }, [tabFromURL]);

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "How do I cancel the order that I have placed?",
      answer:
        "WROGN allows you to cancel your purchase before it is shipped. However, If we have already shipped your order, you can return it back to the delivery executive at the time of delivery. We will process the refund into the source account if the order amount was paid online.",
    },
    {
      id: 2,
      question: "How do I raise a return request?",
      answer:
        "You can request a return on WROGN.com in three simple steps\n1. Tap on My Orders.\n2. Choose the item to be Returned.\n3. Enter the details requested and create a return request.",
    },
    {
      id: 3,
      question: "I have raised a return request. When will my product be picked up?",
      answer:
        "Once you raise a return request, our team will review it within 24-48 hours. After approval, the pickup will be scheduled within 2-3 business days. You will receive a confirmation email with pickup details.",
    },
    {
      id: 4,
      question: "What is the return policy?",
      answer:
        "We offer a 7-day return policy for most products. The item must be unused, in original packaging, and with all tags attached. Some products may have different return policies which will be mentioned on the product page.",
    },
    {
      id: 5,
      question: "How long does it take to process my refund?",
      answer:
        "Refunds are typically processed within 5-7 business days after we receive your returned item. The time may vary depending on your payment method and bank processing times.",
    },
  ];

  const handleAddressInputChange = (e) => {
    const { name, value } = e.target;
    setAddressFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddAddress = () => {
    if (
      addressFormData.firstName &&
      addressFormData.lastName &&
      addressFormData.mobileNumber &&
      addressFormData.flatBuilding &&
      addressFormData.areaLocality &&
      addressFormData.pinCode &&
      addressFormData.city &&
      addressFormData.state
    ) {
      const newAddress = {
        id: Date.now(),
        ...addressFormData,
      };
      setAddresses((prev) => [...prev, newAddress]);
      setAddressFormData({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        flatBuilding: "",
        areaLocality: "",
        pinCode: "",
        city: "",
        state: "",
      });
      setShowAddressForm(false);
    }
  };

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Update URL without page reload
    navigate(`/account?tab=${tabId}`, { replace: true });
  };

  const navigationItems = [
    { id: "profile", label: "Profile", icon: User, active: true },
    { id: "orders", label: "Orders", icon: Package, active: false },
    { id: "addresses", label: "Addresses", icon: MapPin, active: false },
    { id: "faq", label: "FAQ", icon: HelpCircle, active: false },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "orders":
        return <Orders />;
      case "addresses":
        return (
          <Addresses
            showAddressForm={showAddressForm}
            setShowAddressForm={setShowAddressForm}
            addresses={addresses}
            addressFormData={addressFormData}
            setAddressFormData={setAddressFormData}
            handleAddressInputChange={handleAddressInputChange}
            handleAddAddress={handleAddAddress}
          />
        );
      case "faq":
        return <FAQ expandedFAQ={expandedFAQ} setExpandedFAQ={setExpandedFAQ} faqs={faqs} />;
      default:
        return (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              This section is under development.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] py-4 sm:py-6 lg:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between bg-[var(--bg-primary)] rounded-lg p-4 border border-[var(--border-light)]">
            <h1 className="text-lg font-bold text-[var(--text-primary)]">
              My Account
            </h1>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 rounded-lg bg-[var(--gray-50)] hover:bg-[var(--gray-100)] transition-colors duration-200"
            >
              <Menu size={20} className="text-[var(--text-primary)]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Left Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div
              className={`bg-[var(--bg-primary)] rounded-lg sm:rounded-xl shadow-sm border border-[var(--border-light)] p-4 sm:p-6 ${
                showMobileMenu ? "block" : "hidden lg:block"
              }`}
            >
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id}>
                      <button
                        onClick={() => {
                          handleTabChange(item.id);
                          setShowMobileMenu(false);
                        }}
                        className={`w-full flex items-center px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                          activeTab === item.id
                            ? "text-[var(--primary-color)] bg-[var(--accent-light)] shadow-sm"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--gray-50)]"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={`mr-2 sm:mr-3 ${
                            activeTab === item.id
                              ? "text-[var(--primary-color)]"
                              : "text-[var(--text-muted)]"
                          }`}
                        />
                        {item.label}
                      </button>
                      {item.id !== "faq" && (
                        <div className="border-t border-[var(--border-light)] my-1"></div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[var(--border-light)]">
                <button
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm font-bold border border-[var(--error-color)] text-[var(--error-color)] bg-[var(--bg-primary)] rounded-lg transition-all duration-200 hover:bg-[var(--error-color)] hover:text-[var(--text-inverse)] hover:shadow-md"
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-[var(--bg-primary)] rounded-lg sm:rounded-xl shadow-sm border border-[var(--border-light)] p-4 sm:p-6 lg:p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;