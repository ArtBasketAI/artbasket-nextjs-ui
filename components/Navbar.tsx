import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import firebase from '../config/firebase';
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
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
            setIsLoggedIn(!!currentUser);
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        setIsDropdownOpen(false);
        await firebase.auth().signOut();
        router.push('/');
    };

    return (
        <nav>
            <div className={`${isLoggedIn ? 'bg-gray-800' : 'bg-white'} shadow-md p-4`}>
                <div className="mx-auto flex justify-between items-center">
                    <div className="flex space-x-4">
                        {isLoggedIn ? (
                            // // Render breadcrumbs for logged-in users
                            // 
                            // 
                            <Link href="/dashboard" passHref>
                                <span className="text-white font-bold cursor-pointer">ArtBasketAI</span>
                            </Link>
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
                                <Image src="/assets/avatar.png" alt="User avatar" width={30} height={30} className="w-8 h-8 rounded-full mx-2" />
                                <span>{user?.displayName || user?.email || 'Username'}</span>
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
                                    <span onClick={handleLogout} className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            
            <div className="p-3">
            {
                isLoggedIn && breadcrumbs?.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                    <Link href={breadcrumb.href} passHref>
                        <span className="text-blue-700 cursor-pointer">{breadcrumb.label}</span>
                    </Link>
                    {index < breadcrumbs.length - 1 && <span className="text-black"> &gt; </span>}
                </React.Fragment>
                ))
            }
            </div>
        </nav>
    );
};

export default Navbar;
