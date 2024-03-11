// components/UserDropdown.tsx
import Link from 'next/link';
import { useState, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

const UserDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user, logout } = useContext(AuthContext) || {};
    const router = useRouter(); // Add this line

    const handleLogout = async () => {
        if (logout) {
            await logout();
            router.push('/'); // Redirect to the root page after logout
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-white cursor-pointer"
            >
                <Image src="/assets/avatar.png" alt="User avatar" width={30} height={30} className="w-8 h-8 rounded-full" />
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
    );
};

export default UserDropdown;
