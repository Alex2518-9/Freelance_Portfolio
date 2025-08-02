import { useEffect, useState } from "react";

export function useScrollStart() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check immediately on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolling;
}
