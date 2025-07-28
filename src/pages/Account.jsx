import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/AuthSlice';
import { User, Package, MapPin, HelpCircle, Calendar, Plus, ChevronDown, Clock, CheckCircle, X } from 'lucide-react';

const Account = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const [activeTab, setActiveTab] = useState('profile');
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [expandedFAQ, setExpandedFAQ] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: user?.email || 'sb17081999@gmail.com',
        mobile: user?.mobile || '9170412775',
        dob: '',
        gender: ''
    });
    const [addressFormData, setAddressFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        flatBuilding: '',
        areaLocality: '',
        pinCode: '',
        city: '',
        state: ''
    });

    // Sample orders data
    const orders = [
        {
            id: '46199271460087',
            date: '14 January, 2022',
            totalAmount: '$499',
            status: 'Pending',
            statusIcon: Clock,
            statusColor: 'text-yellow-600',
            products: [
                {
                    id: 1,
                    name: 'Apple Watch Series 7',
                    variant: 'Golden',
                    price: '$359',
                    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100&h=100&fit=crop&crop=center'
                }
            ]
        },
        {
            id: '46199271460088',
            date: '10 January, 2022',
            totalAmount: '$299',
            status: 'Delivered',
            statusIcon: CheckCircle,
            statusColor: 'text-green-600',
            products: [
                {
                    id: 2,
                    name: 'Beylob 90 Speaker',
                    variant: 'Space Gray',
                    price: '$49',
                    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop&crop=center'
                }
            ]
        }
    ];

    // FAQ data
    const faqs = [
        {
            id: 1,
            question: "How do I cancel the order that I have placed?",
            answer: "WROGN allows you to cancel your purchase before it is shipped. However, If we have already shipped your order, you can return it back to the delivery executive at the time of delivery. We will process the refund into the source account if the order amount was paid online."
        },
        {
            id: 2,
            question: "How do I raise a return request?",
            answer: "You can request a return on WROGN.com in three simple steps\n1. Tap on My Orders.\n2. Choose the item to be Returned.\n3. Enter the details requested and create a return request."
        },
        {
            id: 3,
            question: "I have raised a return request. When will my product be picked up?",
            answer: "Once you raise a return request, our team will review it within 24-48 hours. After approval, the pickup will be scheduled within 2-3 business days. You will receive a confirmation email with pickup details."
        },
        {
            id: 4,
            question: "What is the return policy?",
            answer: "We offer a 7-day return policy for most products. The item must be unused, in original packaging, and with all tags attached. Some products may have different return policies which will be mentioned on the product page."
        },
        {
            id: 5,
            question: "How long does it take to process my refund?",
            answer: "Refunds are typically processed within 5-7 business days after we receive your returned item. The time may vary depending on your payment method and bank processing times."
        }
    ];

    const states = [
        'Andaman and Nicobar Islands',
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chandigarh',
        'Chhattisgarh',
        'Dadra and Nagar Haveli',
        'Daman and Diu',
        'Delhi',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jammu and Kashmir',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Puducherry',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddressInputChange = (e) => {
        const { name, value } = e.target;
        setAddressFormData(prev => ({
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

    const handleAddAddress = () => {
        if (addressFormData.firstName && addressFormData.lastName && addressFormData.mobileNumber && 
            addressFormData.flatBuilding && addressFormData.areaLocality && addressFormData.pinCode && 
            addressFormData.city && addressFormData.state) {
            
            const newAddress = {
                id: Date.now(),
                ...addressFormData
            };
            setAddresses(prev => [...prev, newAddress]);
            setAddressFormData({
                firstName: '',
                lastName: '',
                mobileNumber: '',
                flatBuilding: '',
                areaLocality: '',
                pinCode: '',
                city: '',
                state: ''
            });
            setShowAddressForm(false);
        }
    };

    const toggleFAQ = (id) => {
        setExpandedFAQ(expandedFAQ === id ? null : id);
    };

    const navigationItems = [
        { id: 'profile', label: 'Profile', icon: User, active: true },
        { id: 'orders', label: 'Orders', icon: Package, active: false },
        { id: 'addresses', label: 'Addresses', icon: MapPin, active: false },
        { id: 'faq', label: 'FAQ', icon: HelpCircle, active: false }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Profile</h2>

                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                    className="w-full px-4 py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
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
                                    className="w-full px-4 py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
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
                                className="w-full px-4 py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--gray-50)] text-[var(--text-secondary)] cursor-not-allowed"
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
                                className="w-full px-4 py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--gray-50)] text-[var(--text-secondary)] cursor-not-allowed"
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
                                    className="w-full px-4 py-3 pr-12 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
                                />
                                <Calendar
                                    size={20}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)]"
                                />
                            </div>
                        </div>

                        {/* Gender Selection */}
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                                Gender
                            </label>
                            <div className="space-y-3">
                                <label className="flex items-center p-3 border border-[var(--border-light)] rounded-lg hover:bg-[var(--gray-50)] transition-all duration-200 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={formData.gender === 'male'}
                                        onChange={() => handleGenderChange('male')}
                                        className="mr-3 text-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:ring-2"
                                    />
                                    <span className="text-sm text-[var(--text-primary)] font-medium">Male</span>
                                </label>
                                <label className="flex items-center p-3 border border-[var(--border-light)] rounded-lg hover:bg-[var(--gray-50)] transition-all duration-200 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={formData.gender === 'female'}
                                        onChange={() => handleGenderChange('female')}
                                        className="mr-3 text-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:ring-2"
                                    />
                                    <span className="text-sm text-[var(--text-primary)] font-medium">Female</span>
                                </label>
                            </div>
                        </div>

                        {/* Save Changes Button */}
                        <div className="pt-6">
                            <button
                                onClick={handleSaveChanges}
                                className="w-full px-6 py-4 bg-black text-[var(--text-inverse)] font-bold rounded-lg transition-all duration-200 hover:bg-gray-900 hover:shadow-lg transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                );

            case 'orders':
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Order Details</h2>
                            <p className="text-[var(--text-secondary)]">Check the status of recent and old orders & discover more products.</p>
                        </div>

                        <div className="space-y-6">
                            {orders.map((order) => {
                                const StatusIcon = order.statusIcon;
                                return (
                                    <div key={order.id} className="bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-lg p-6">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                            {/* Left Panel - Order Summary */}
                                            <div className="lg:col-span-1 space-y-4">
                                                <div>
                                                    <span className="text-sm text-[var(--text-secondary)]">Order ID</span>
                                                    <p className="font-bold text-[var(--text-primary)]">#{order.id}</p>
                                                </div>
                                                <div>
                                                    <span className="text-sm text-[var(--text-secondary)]">Date</span>
                                                    <p className="text-[var(--text-primary)]">{order.date}</p>
                                                </div>
                                                <div>
                                                    <span className="text-sm text-[var(--text-secondary)]">Total Amount</span>
                                                    <p className="font-bold text-[var(--text-primary)]">{order.totalAmount}</p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <StatusIcon size={20} className={order.statusColor} />
                                                    <span className={`font-medium ${order.statusColor}`}>{order.status}</span>
                                                </div>
                                            </div>

                                            {/* Right Panel - Product Details */}
                                            <div className="lg:col-span-2 space-y-4">
                                                {order.products.map((product) => (
                                                    <div key={product.id} className="flex items-start space-x-4 p-4 border border-[var(--border-light)] rounded-lg">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-16 h-16 object-cover rounded-lg"
                                                        />
                                                        <div className="flex-1">
                                                            <h4 className="font-medium text-[var(--text-primary)] mb-1">{product.name}</h4>
                                                            <p className="text-sm text-[var(--text-secondary)] mb-1">{product.variant}</p>
                                                            <p className="font-bold text-[var(--text-primary)]">{product.price}</p>
                                                            <div className="flex space-x-4 mt-2">
                                                                <button className="text-sm text-[var(--primary-color)] hover:underline">View Product</button>
                                                                <button className="text-sm text-[var(--primary-color)] hover:underline">Similar Product</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                
                                                {/* Action Buttons */}
                                                <div className="flex space-x-4 pt-4">
                                                    <button className="px-6 py-2 border border-[var(--border-medium)] rounded-lg text-[var(--text-primary)] hover:bg-[var(--gray-50)] transition-colors duration-200">
                                                        View Order
                                                    </button>
                                                    <button className="px-6 py-2 border border-[var(--border-medium)] rounded-lg text-[var(--text-primary)] hover:bg-[var(--gray-50)] transition-colors duration-200">
                                                        View Invoice
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );

            case 'addresses':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Addresses</h2>

                        {addresses.length === 0 && !showAddressForm ? (
                            // Empty state - Add New Address
                            <div className="flex items-center justify-center">
                                <div className="bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-lg p-8 text-center max-w-md">
                                    <Plus size={48} className="mx-auto mb-4 text-[var(--text-muted)]" />
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Add New Address</h3>
                                    <button
                                        onClick={() => setShowAddressForm(true)}
                                        className="mt-4 px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-all duration-200"
                                    >
                                        Add Address
                                    </button>
                                </div>
                            </div>
                        ) : showAddressForm ? (
                            // Address Form
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">Add New Address</h3>
                                    <button
                                        onClick={() => setShowAddressForm(false)}
                                        className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                            className="w-full px-4 py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
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
                                            className="w-full px-4 py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
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
                                        className="w-full px-4 py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
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
                                        className="w-full px-4 py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
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
                                        className="w-full px-4 py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
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
                                        className="w-full px-4 py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
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
                                        className="w-full px-4 py-3 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
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
                                            className="w-full px-4 py-3 pr-10 border border-[var(--border-medium)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 bg-[var(--bg-primary)] text-[var(--text-primary)] appearance-none"
                                        >
                                            <option value="">Select State *</option>
                                            {states.map((state) => (
                                                <option key={state} value={state}>{state}</option>
                                            ))}
                                        </select>
                                        <ChevronDown
                                            size={20}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] pointer-events-none"
                                        />
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <button
                                        onClick={handleAddAddress}
                                        className="w-full mt-4 px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-all duration-200"
                                    >
                                        Add address
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // Saved Addresses List
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">Saved Addresses</h3>
                                    <button
                                        onClick={() => setShowAddressForm(true)}
                                        className="px-4 py-2 bg-[var(--primary-color)] text-[var(--text-inverse)] font-medium rounded-lg hover:bg-[var(--accent-color)] transition-all duration-200"
                                    >
                                        Add New Address
                                    </button>
                                </div>
                                
                                {addresses.map((address, index) => (
                                    <div key={address.id} className="border border-[var(--border-light)] rounded-lg p-4 bg-[var(--bg-primary)]">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-[var(--text-primary)] mb-2">
                                                    {address.firstName} {address.lastName}
                                                </h4>
                                                <p className="text-sm text-[var(--text-secondary)] mb-1">
                                                    {address.flatBuilding}
                                                </p>
                                                <p className="text-sm text-[var(--text-secondary)] mb-1">
                                                    {address.areaLocality}, {address.city}, {address.state} - {address.pinCode}
                                                </p>
                                                <p className="text-sm text-[var(--text-secondary)]">
                                                    Mobile: {address.mobileNumber}
                                                </p>
                                            </div>
                                            <button className="text-[var(--text-secondary)] hover:text-[var(--error-color)] transition-colors duration-200">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );

            case 'faq':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">FAQS</h2>
                        
                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <div key={faq.id} className="border border-[var(--border-light)] rounded-lg bg-[var(--bg-primary)]">
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[var(--gray-50)] transition-colors duration-200"
                                    >
                                        <span className="font-bold text-[var(--text-primary)] text-lg">{faq.question}</span>
                                        {expandedFAQ === faq.id ? (
                                            <X size={20} className="text-[var(--text-primary)]" />
                                        ) : (
                                            <Plus size={20} className="text-[var(--text-primary)]" />
                                        )}
                                    </button>
                                    
                                    {expandedFAQ === faq.id && (
                                        <div className="px-6 pb-4 border-t border-[var(--border-light)]">
                                            <p className="text-[var(--text-primary)] mt-4 leading-relaxed whitespace-pre-line">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                        </h2>
                        <p className="text-[var(--text-secondary)]">This section is under development.</p>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-[var(--bg-secondary)] py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <div className="bg-[var(--bg-primary)] rounded-xl shadow-sm border border-[var(--border-light)] p-6">
                            <nav className="space-y-1">
                                {navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.id}>
                                            <button
                                                onClick={() => setActiveTab(item.id)}
                                                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                                                    activeTab === item.id
                                                        ? 'text-[var(--primary-color)] bg-[var(--accent-light)] shadow-sm'
                                                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--gray-50)]'
                                                }`}
                                            >
                                                <Icon
                                                    size={20}
                                                    className={`mr-3 ${
                                                        activeTab === item.id ? 'text-[var(--primary-color)]' : 'text-[var(--text-muted)]'
                                                    }`}
                                                />
                                                {item.label}
                                            </button>
                                            {item.id !== 'faq' && (
                                                <div className="border-t border-[var(--border-light)] my-1"></div>
                                            )}
                                        </div>
                                    );
                                })}
                            </nav>

                            {/* Logout Button */}
                            <div className="mt-6 pt-4 border-t border-[var(--border-light)]">
                                <button
                                    onClick={() => {
                                        dispatch(logout());
                                        navigate('/');
                                    }}
                                    className="w-full px-4 py-3 text-sm font-bold border border-[var(--error-color)] text-[var(--error-color)] bg-[var(--bg-primary)] rounded-lg transition-all duration-200 hover:bg-[var(--error-color)] hover:text-[var(--text-inverse)] hover:shadow-md"
                                >
                                    LOGOUT
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:w-3/4">
                        <div className="bg-[var(--bg-primary)] rounded-xl shadow-sm border border-[var(--border-light)] p-8">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account; 