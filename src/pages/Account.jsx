import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/AuthSlice';
import { User, Package, MapPin, HelpCircle, Calendar } from 'lucide-react';

const Account = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const [activeTab, setActiveTab] = useState('profile');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: user?.email || 'sb17081999@gmail.com',
        mobile: user?.mobile || '9170412775',
        dob: '',
        gender: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleGenderChange = (gender) => {
        setFormData(prev => ({
            ...prev,
            gender
        }));
    };

    const handleSaveChanges = () => {
        // Handle save changes logic
        console.log('Saving changes:', formData);
    };

    const navigationItems = [
        { id: 'profile', label: 'Profile', icon: User, active: true },
        { id: 'orders', label: 'Orders', icon: Package, active: false },
        { id: 'addresses', label: 'Addresses', icon: MapPin, active: false },
        { id: 'faq', label: 'FAQ', icon: HelpCircle, active: false }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <nav className="space-y-1">
                                {navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.id}>
                                            <button
                                                onClick={() => setActiveTab(item.id)}
                                                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${activeTab === item.id
                                                    ? 'text-red-500 bg-red-50'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                                    }`}
                                            >
                                                <Icon
                                                    size={20}
                                                    className={`mr-3 ${activeTab === item.id ? 'text-red-500' : 'text-gray-400'
                                                        }`}
                                                />
                                                {item.label}
                                            </button>
                                            {item.id !== 'faq' && (
                                                <div className="border-t border-gray-100 my-1"></div>
                                            )}
                                        </div>
                                    );
                                })}
                            </nav>

                            {/* Logout Button */}
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <button
                                    onClick={() => {
                                        dispatch(logout());
                                        navigate('/');
                                    }}
                                    className="w-full px-4 py-2 text-sm font-bold border border-red-500 text-red-500 bg-white rounded-lg transition-colors duration-200 hover:bg-red-50"
                                >
                                    LOGOUT
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:w-3/4">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">

                            {/* Profile Form */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile</h2>

                                {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="First Name *"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder="Last Name *"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50"
                                        readOnly
                                    />
                                </div>

                                {/* Mobile Number Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mobile Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50"
                                        readOnly
                                    />
                                </div>

                                {/* Date of Birth Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        DOB
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleInputChange}
                                            placeholder="mm/dd/yyyy"
                                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                        <Calendar
                                            size={20}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        />
                                    </div>
                                </div>

                                {/* Gender Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Gender
                                    </label>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={formData.gender === 'male'}
                                                onChange={() => handleGenderChange('male')}
                                                className="mr-2 text-red-500 focus:ring-red-500"
                                            />
                                            <span className="text-sm text-gray-700">Male</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                checked={formData.gender === 'female'}
                                                onChange={() => handleGenderChange('female')}
                                                className="mr-2 text-red-500 focus:ring-red-500"
                                            />
                                            <span className="text-sm text-gray-700">Female</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Save Changes Button */}
                                <div className="pt-6">
                                    <button
                                        onClick={handleSaveChanges}
                                        className="w-full px-6 py-3 bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors duration-200 hover:bg-gray-400"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account; 