// components/misc/WebsiteLogo.tsx
import Image from "next/image";
import Link from "next/link";

const WebsiteLogo = () => {
  return (
    <span>
      <Link href="/" passHref>
        <Image
          src="/favicon/favicon-32x32.png"
          alt="ArtbasketAI"
          width={32}
          height={32}
          priority
        />
      </Link>
    </span>
  );
};

export default WebsiteLogo;
