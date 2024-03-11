// components/DefaultNavLinks.tsx
import Link from 'next/link';
import React from 'react';

const DefaultNavLinks = () => {
    return (
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
    );
};

export default DefaultNavLinks;
