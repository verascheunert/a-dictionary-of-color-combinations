"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import colors from "@/assets/colors.json";
import CopyToClipboard from "@/app/components/CopyToClipboard";

export default function SwatchPage() {
  const [tileSize, setTileSize] = useState(0);

  useEffect(() => {
    const updateTileSize = () => {
      const containerWidth = window.innerWidth - 1; // Account for minimal gap
      const columns = containerWidth >= 1024 ? 6 : containerWidth >= 768 ? 4 : containerWidth >= 640 ? 3 : 2;
      setTileSize(Math.floor(containerWidth / columns));
    };

    updateTileSize();
    window.addEventListener("resize", updateTileSize);
    return () => window.removeEventListener("resize", updateTileSize);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0.5">
      {colors.colors.map((color) => (
        <div
          key={color.index}
          className="relative"
          style={{ width: tileSize, height: tileSize }}
        >
          <Link href={`/swatch/${color.slug}`}>
            <div
              className="absolute inset-0"
              style={{ backgroundColor: color.hex }}
            >
              <span className="absolute top-1 right-1 text-xs text-black px-1">
                {color.name}
              </span>
            </div>
          </Link>
          <span className="absolute bottom-1 left-1 text-xs text-black px-1">
            <CopyToClipboard text={color.hex} />
          </span>
        </div>
      ))}
    </div>
  );
}