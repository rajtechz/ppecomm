import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar } from "lucide-react";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: user?.email || "sb17081999@gmail.com",
    mobile: user?.mobile || "9170412775",
    dob: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (gender) => {
    setFormData((prev) => ({
      ...prev,
      gender,
    }));
  };

  const handleSaveChanges = () => {
    // Handle save changes logic
    console.log("Saving changes:", formData);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
        Profile
      </h2>

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name *"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] hover:border-2 transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name *"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] hover:border-2 transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] transition-all duration-200 bg-[var(--gray-50)] text-[var(--text-secondary)] cursor-not-allowed text-sm sm:text-base"
          readOnly
        />
      </div>

      {/* Mobile Number Field */}
      <div>
        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
          Mobile Number *
        </label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] transition-all duration-200 bg-[var(--gray-50)] text-[var(--text-secondary)] cursor-not-allowed text-sm sm:text-base"
          readOnly
        />
      </div>

      {/* Date of Birth Field */}
      <div>
        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
          DOB
        </label>
        <div className="relative">
          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            placeholder="mm/dd/yyyy"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] hover:border-2 transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm sm:text-base"
          />
          <Calendar
            size={18}
            className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)]"
          />
        </div>
      </div>

      {/* Gender Selection */}
      <div>
        <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
          Gender
        </label>
        <div className="space-y-2 sm:space-y-3">
          <label className="flex items-center p-2 sm:p-3 border border-[var(--border-light)] rounded-lg hover:bg-[var(--gray-50)] transition-all duration-200 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={() => handleGenderChange("male")}
              className="mr-2 sm:mr-3 text-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:ring-2"
            />
            <span className="text-sm text-[var(--text-primary)] font-medium">
              Male
            </span>
          </label>
          <label className="flex items-center p-2 sm:p-3 border border-[var(--border-light)] rounded-lg hover:bg-[var(--gray-50)] transition-all duration-200 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={() => handleGenderChange("female")}
              className="mr-2 sm:mr-3 text-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:ring-2"
            />
            <span className="text-sm text-[var(--text-primary)] font-medium">
              Female
            </span>
          </label>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="pt-4 sm:pt-6">
        <button
          onClick={handleSaveChanges}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black text-[var(--text-inverse)] font-bold rounded-lg transition-all duration-200 hover:bg-gray-900 hover:shadow-lg transform hover:scale-[1.02] focus:outline-none text-sm sm:text-base cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;