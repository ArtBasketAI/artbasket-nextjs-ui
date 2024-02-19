// components/Login.tsx
import React, { useState } from 'react';
import { signInWithEmailPassword } from '../config/auth';

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isMessageVisible, setIsMessageVisible] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsMessageVisible(false); // Hide previous message

        try {
            const userCredential = await signInWithEmailPassword(email, password);
            onLoginSuccess(userCredential.user);
        } catch (error) {
            setMessage(error.message || 'Login failed');
            setIsMessageVisible(true);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-4xl font-bold text-center mb-4">Login to ArtBasketAI</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
            {isMessageVisible && <p className="mt-4 text-center text-red-500">{message}</p>}
        </div>
    );
};

export default Login;
