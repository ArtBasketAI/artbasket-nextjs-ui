import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const router = useRouter(); // Initialize the router
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { isLoggedIn, logout } = useAuth();

    const handleLogout = () => {
        setIsDropdownOpen(false); // Close dropdown menu
        logout(); // Perform logout action
        // Additional actions after logout if necessary
        router.push('/'); // Redirect to the home page
    };

    return (
        <nav className={`${isLoggedIn ? 'bg-gray-800' : 'bg-white'} shadow-md p-4`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    {isLoggedIn && (
                        <Link href="/dashboard" passHref>
                            <span className="text-white font-bold cursor-pointer">Dashboard</span>
                        </Link>
                    )}
                    {/* Always show the main links */}
                    <Link href="/" passHref>
                        <span className="text-gray-800 font-bold cursor-pointer">ArtBasketAI</span>
                    </Link>
                    <Link href="/features" passHref>
                        <span className="text-gray-800 font-bold cursor-pointer">Features</span>
                    </Link>
                    <Link href="/about" passHref>
                        <span className="text-gray-800 font-bold cursor-pointer">About</span>
                    </Link>
                    <Link href="/contact" passHref>
                        <span className="text-gray-800 font-bold cursor-pointer">Contact</span>
                    </Link>
                    {/* Dashboard link shown only when logged in */}
                </div>

                {/* User menu shown only when logged in */}
                {isLoggedIn && (
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center text-white cursor-pointer"
                        >
                            <img
                                src="/assets/avatar.png"
                                alt="User avatar"
                                className="w-8 h-8 rounded-full"
                            />
                            <span>Username</span> {/* Replace with the actual username */}
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                                <Link href="/profile" passHref>
                                    <span className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100 cursor-pointer">
                                        Profile
                                    </span>
                                </Link>
                                <Link href="/settings" passHref>
                                    <span className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100 cursor-pointer">
                                        Settings
                                    </span>
                                </Link>
                                <span
                                    onClick={handleLogout}
                                    className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100 cursor-pointer"
                                >
                                    Logout
                                </span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
