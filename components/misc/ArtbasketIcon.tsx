// components/misc/ArtbasketIcon.tsx
import Image from "next/image";
import Link from "next/link";

const ArtbasketIcon = () => {
  return (
    <span>
      <Link href="/" passHref>
        <Image
          src="/favicon/favicon-32x32.png"
          alt="ArtbasketAI"
          width={32}
          height={32}
        />
      </Link>
    </span>
  );
};

export default ArtbasketIcon;
