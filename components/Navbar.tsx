// components/Navbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import Image from 'next/image';
import React from 'react';
import { AuthContext } from '../context/AuthContext';
import UserDropdown from './UserDropdown';

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
    const { isLoggedIn, user, logout } = useContext(AuthContext) || {};

    const handleLogout = async () => {
        setIsDropdownOpen(false);
        if (logout) {
            await logout();
        }
        router.push('/');
    };


    return (
        <nav className={`${isLoggedIn ? 'bg-gray-800' : 'bg-white'} shadow-md p-4`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    {isLoggedIn ? (
                        breadcrumbs?.map((breadcrumb, index) => (
                            <React.Fragment key={index}>
                                <Link href={breadcrumb.href} passHref>
                                    <span className="text-white font-bold cursor-pointer">{breadcrumb.label}</span>
                                </Link>
                                {index < breadcrumbs.length - 1 && <span className="text-white"> &gt; </span>}
                            </React.Fragment>
                        ))
                    ) : (
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
                {isLoggedIn && <UserDropdown />}
            </div>
        </nav>
    );
};

export default Navbar;
