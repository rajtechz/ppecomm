import React from 'react';
import { Plus, ChevronDown } from 'lucide-react';

const Addresses = ({ 
  showAddressForm, 
  setShowAddressForm, 
  addresses, 
  addressFormData, 
  setAddressFormData, 
  handleAddressInputChange,
  handleAddAddress
}) => {
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">Addresses</h2>

      {addresses.length === 0 && !showAddressForm ? (
        // Empty state - Add New Address
        <div className="flex items-center justify-center">
          <div className="bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-lg p-6 sm:p-8 text-center max-w-md w-full">
            <Plus size={40} className="mx-auto mb-4 text-[var(--text-muted)] sm:w-12 sm:h-12" />
            <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-2">Add New Address</h3>
            <button
              onClick={() => setShowAddressForm(true)}
              className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-all duration-200 text-sm sm:text-base"
            >
              Add Address
            </button>
          </div>
        </div>
      ) : showAddressForm ? (
        // Address Form
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">Add New Address</h3>
            <button
              onClick={() => setShowAddressForm(false)}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 text-sm sm:text-base"
            >
              Cancel
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={addressFormData.firstName}
                onChange={handleAddressInputChange}
                placeholder="First Name *"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] hover:border-2 transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={addressFormData.lastName}
                onChange={handleAddressInputChange}
                placeholder="Last Name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] hover:border-2 transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm sm:text-base"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={addressFormData.mobileNumber}
              onChange={handleAddressInputChange}
              placeholder="Mobile Number *"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] hover:border-2 transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Flat no/Building, Street name *
            </label>
            <input
              type="text"
              name="flatBuilding"
              value={addressFormData.flatBuilding}
              onChange={handleAddressInputChange}
              placeholder="Flat no/Building, Street name *"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] hover:border-2 transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Area/Locality *
            </label>
            <input
              type="text"
              name="areaLocality"
              value={addressFormData.areaLocality}
              onChange={handleAddressInputChange}
              placeholder="Area/Locality *"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] hover:border-2 transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Pin code / Postal code / Zip code *
            </label>
            <input
              type="text"
              name="pinCode"
              value={addressFormData.pinCode}
              onChange={handleAddressInputChange}
              placeholder="Pin code / Postal code / Zip code *"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] hover:border-2 transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              City *
            </label>
            <input
              type="text"
              name="city"
              value={addressFormData.city}
              onChange={handleAddressInputChange}
              placeholder="City *"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] hover:border-2 transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              State *
            </label>
            <div className="relative">
              <select
                name="state"
                value={addressFormData.state}
                onChange={handleAddressInputChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 sm:pr-10 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-[#1F2937] hover:border-2 transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] appearance-none text-sm sm:text-base"
              >
                <option value="">Select State *</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] pointer-events-none"
              />
            </div>
          </div>

          <div className="pt-4 sm:pt-6">
            <button
              onClick={handleAddAddress}
              className="w-full mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-all duration-200 text-sm sm:text-base"
            >
              Add address
            </button>
          </div>
        </div>
      ) : (
        // Saved Addresses List
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">Saved Addresses</h3>
            <button
              onClick={() => setShowAddressForm(true)}
              className="px-3 sm:px-4 py-2 bg-[var(--primary-color)] text-[var(--text-inverse)] font-medium rounded-lg hover:bg-[var(--accent-color)] transition-all duration-200 text-sm sm:text-base w-full sm:w-auto"
            >
              Add New Address
            </button>
          </div>

          {addresses.map((address, index) => (
            <div key={address.id} className="border border-[var(--border-light)] rounded-lg p-3 sm:p-4 bg-[var(--bg-primary)]">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex-1">
                  <h4 className="font-medium text-[var(--text-primary)] mb-1 sm:mb-2 text-sm sm:text-base">
                    {address.firstName} {address.lastName}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-1">
                    {address.flatBuilding}
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-1">
                    {address.areaLocality}, {address.city}, {address.state} - {address.pinCode}
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    Mobile: {address.mobileNumber}
                  </p>
                </div>
                <button className="text-[var(--text-secondary)] hover:text-[var(--error-color)] transition-colors duration-200 text-sm sm:text-base self-start sm:self-auto">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Addresses;