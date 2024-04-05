// components/Navbar.tsx
import { useContext, ReactNode } from "react";
import React from "react";
import { AuthContext } from "../context/AuthContext";
import UserDropdown from "./UserDropDownMenu";
import DefaultNavLinks from "./DefaultNavLinks";
import BreadcrumbNav from "./BreadcrumbNav";

interface Breadcrumb {
  label: string;
  href: string;
}

interface NavbarProps {
  breadcrumbs?: Breadcrumb[];
  children?: ReactNode; // Add this line to accept children
}

const Navbar: React.FC<NavbarProps> = ({ breadcrumbs, children }) => {
  const { isLoggedIn } = useContext(AuthContext) || {};

  return (
    <>
      <nav
        className={`${
          isLoggedIn ? "bg-gray-800" : "bg-white"
        } shadow-md p-4 fixed top-0 left-0 w-full z-50 flex items-center`}
      >
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {isLoggedIn && breadcrumbs ? (
              <BreadcrumbNav breadcrumbs={breadcrumbs} />
            ) : (
              <DefaultNavLinks />
            )}
          </div>
          {isLoggedIn && <UserDropdown />}
        </div>
      </nav>
      {/* Wrapper for content below navbar with padding */}
      <div className="pt-[4rem]">{children}</div>
    </>
  );
};

export default Navbar;
