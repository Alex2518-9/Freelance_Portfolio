import { useEffect, useState } from "react";

export enum Breakpoints {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  "2xl" = 1536,
}

const useScreenWidthBelow = (maxWidth = Breakpoints.md) => {
  const [isWidthBelow, setIsWidthBelow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWidthBelow(window.innerWidth <= maxWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isWidthBelow;
};

export default useScreenWidthBelow;
