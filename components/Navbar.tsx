// components/Navbar.tsx
import { useRouter } from 'next/router';
import { useContext } from 'react';
import React from 'react';
import { AuthContext } from '../context/AuthContext';
import UserDropdown from './UserDropDownMenu';
import DefaultNavLinks from './DefaultNavLinks';
import BreadcrumbNav from './BreadcrumbNav';

interface Breadcrumb {
    label: string;
    href: string;
}

interface NavbarProps {
    breadcrumbs?: Breadcrumb[];
}

const Navbar: React.FC<NavbarProps> = ({ breadcrumbs }) => {
    const router = useRouter();
    const { isLoggedIn } = useContext(AuthContext) || {};

    return (
        <nav className={`${isLoggedIn ? 'bg-gray-800' : 'bg-white'} shadow-md p-4 fixed top-0 left-0 w-full z-50`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    {isLoggedIn && breadcrumbs ? <BreadcrumbNav breadcrumbs={breadcrumbs} /> : <DefaultNavLinks />}
                </div>
                {isLoggedIn && <UserDropdown />}
            </div>
        </nav>
    );
};

export default Navbar;
