import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('email');

    return (
        <>
            <Navbar
                breadcrumbs={[
                    { label: 'Dashboard', href: '/dashboard' },
                    { label: 'Settings', href: '/settings' },
                ]}
            />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Settings</h1>
                <div className="tabs mb-4 flex">
                    <button
                        className={`tab-button px-4 py-2 border-b-2 ${activeTab === 'email' ? 'border-blue-500' : 'border-transparent'} hover:border-gray-300`}
                        onClick={() => setActiveTab('email')}
                    >
                        Email / Password
                    </button>
                    <button
                        className={`tab-button px-4 py-2 border-b-2 ${activeTab === 'pricing' ? 'border-blue-500' : 'border-transparent'} hover:border-gray-300`}
                        onClick={() => setActiveTab('pricing')}
                    >
                        Pricing Plans
                    </button>
                    <button
                        className={`tab-button px-4 py-2 border-b-2 ${activeTab === 'payment' ? 'border-blue-500' : 'border-transparent'} hover:border-gray-300`}
                        onClick={() => setActiveTab('payment')}
                    >
                        Payment Details
                    </button>
                </div>
                <div className="tab-content border border-gray-300 p-4">
                    {activeTab === 'email' && (
                        <div>
                            <h2 className="text-lg font-bold mb-4">Change Email / Reset Password</h2>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2">Email:</label>
                                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block mb-2">New Password:</label>
                                <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                        </div>
                    )}
                    {activeTab === 'pricing' && (
                        <div>
                            <h2 className="text-lg font-bold mb-4">Pricing Plans</h2>
                            {/* Add content and options for pricing plans */}
                            <p>Select your preferred pricing plan:</p>
                            <div className="flex flex-col space-y-2 mt-4">
                                <div className="flex items-center">
                                    <input type="radio" id="basic" name="plan" className="mr-2" />
                                    <label htmlFor="basic">Basic Plan - $10/month</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="premium" name="plan" className="mr-2" />
                                    <label htmlFor="premium">Premium Plan - $20/month</label>
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Update Plan</button>
                        </div>
                    )}
                    {activeTab === 'payment' && (
                        <div>
                            <h2 className="text-lg font-bold mb-4">Payment Details</h2>
                            <div className="mb-4">
                                <label htmlFor="cardNumber" className="block mb-2">Card Number:</label>
                                <input type="text" id="cardNumber" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="expiration" className="block mb-2">Expiration Date:</label>
                                <input type="text" id="expiration" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cvv" className="block mb-2">CVV:</label>
                                <input type="text" id="cvv" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Update Payment</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Settings;
