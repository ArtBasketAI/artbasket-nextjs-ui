import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Image from 'next/image';
import React from 'react';

interface Breadcrumb {
    label: string;
    href: string;
}

interface NavbarProps {
    breadcrumbs?: Breadcrumb[];
}

const Navbar: React.FC<NavbarProps> = ({ breadcrumbs }) => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { isLoggedIn, logout } = useAuth();

    const handleLogout = () => {
        setIsDropdownOpen(false);
        logout();
        router.push('/');
    };

    return (
        <nav className={`${isLoggedIn ? 'bg-gray-800' : 'bg-white'} shadow-md p-4`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    {isLoggedIn ? (
                        // Render breadcrumbs for logged-in users
                        breadcrumbs?.map((breadcrumb, index) => (
                            <React.Fragment key={index}>
                                <Link href={breadcrumb.href} passHref>
                                    <span className="text-white font-bold cursor-pointer">{breadcrumb.label}</span>
                                </Link>
                                {index < breadcrumbs.length - 1 && <span className="text-white"> &gt; </span>}
                            </React.Fragment>
                        ))
                    ) : (
                        // Render default links for non-logged-in users
                        <>
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
                        </>
                    )}
                </div>

                {isLoggedIn && (
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center text-white cursor-pointer"
                        >
                            <Image src="/assets/avatar.png" alt="User avatar" width={30} height={30} className="w-8 h-8 rounded-full" />
                            <span>Username</span>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                                <Link href="/profile" passHref>
                                    <span className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100 cursor-pointer">Profile</span>
                                </Link>
                                <Link href="/settings" passHref>
                                    <span className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100 cursor-pointer">Settings</span>
                                </Link>
                                <span onClick={handleLogout} className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
