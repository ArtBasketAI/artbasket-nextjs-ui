// components/DefaultNavLinks.tsx
import Link from "next/link";
import React from "react";

import ArtbasketIcon from "./misc/ArtbasketIcon";

const DefaultNavLinks = () => {
  return (
    <>
      <ArtbasketIcon />
      <Link href="/" passHref>
        <span className="text-gray-800 font-bold cursor-pointer">
          <strong>ArtbasketAI</strong>
        </span>
      </Link>
      <Link href="/explore" passHref>
        <span className="text-gray-800 font-bold cursor-pointer">Explore</span>
      </Link>
      <Link href="/docs" passHref>
        <span className="text-gray-800 font-bold cursor-pointer">Docs</span>
      </Link>
    </>
  );
};

export default DefaultNavLinks;
