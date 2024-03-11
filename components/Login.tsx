// components/Login.tsx
import React, { useState } from 'react';
import { signInWithEmailPassword, signInWithGoogle, signInWithFacebook, signInWithApple } from '../config/auth';
import Image from 'next/image';

interface LoginProps {
    onEmailPasswordLogin: (email: string, password: string) => Promise<void>;
    onLoginSuccess: (user: any) => void; // You should define the correct type instead of 'any' if possible
}

const Login: React.FC<LoginProps> = ({ onEmailPasswordLogin, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isMessageVisible, setIsMessageVisible] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await onEmailPasswordLogin(email, password);
    };

    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGoogle();
            onLoginSuccess(user);
        } catch (error) {
            setMessage('Google sign-in failed. Please try again.');
            setIsMessageVisible(true);
        }
    };

    const handleFacebookSignIn = async () => {
        try {
            const user = await signInWithFacebook();
            onLoginSuccess(user);
        } catch (error) {
            setMessage('Facebook sign-in failed. Please try again.');
            setIsMessageVisible(true);
        }
    };

    const handleAppleSignIn = async () => {
        try {
            const user = await signInWithApple();
            onLoginSuccess(user);
        } catch (error) {
            setMessage('Apple sign-in failed. Please try again.');
            setIsMessageVisible(true);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center py-2">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-4">
                <h1 className="text-4xl font-bold text-center mb-4">Login</h1>
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
                            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
                        >
                            Log In
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">OR SignUp/Login with</p>
                </div>
                <div className="mt-4 flex flex-col space-y-2 items-center">
                    <button
                        onClick={handleGoogleSignIn}
                        className="flex items-center justify-center bg-white text-black border border-gray-300 p-2 rounded-md hover:shadow-md focus:outline-none focus:ring focus:ring-red-500 transition duration-300 w-64"
                    >
                        <Image src="/assets/google-icon.svg" alt="Google" width={24} height={24} />
                        <span className="ml-2">Continue with Google</span>
                    </button>
                    <button
                        onClick={handleFacebookSignIn}
                        className="flex items-center justify-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 transition duration-300 w-64"
                    >
                        <Image src="/assets/facebook-icon.svg" alt="Facebook" width={24} height={24} />
                        <span className="ml-2">Continue with Facebook</span>
                    </button>
                    <button
                        onClick={handleAppleSignIn}
                        className="flex items-center justify-center bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500 transition duration-300 w-64"
                    >
                        <Image src="/assets/apple-icon.svg" alt="Apple" width={24} height={24} />
                        <span className="ml-2">Continue with Apple</span>
                    </button>
                </div>
            </div>
            {isMessageVisible && <p className="mt-4 text-center text-red-500">{message}</p>}
        </div>
    );

};

export default Login;
