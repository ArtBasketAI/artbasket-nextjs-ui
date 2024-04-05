// components/ScrollToTopButton.tsx
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 100); // Show the arrow if scrolled more than 100px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showScrollToTop ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
};

export default ScrollToTopButton;
