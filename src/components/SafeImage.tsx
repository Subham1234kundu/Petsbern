"use client";

import { useEffect, useState } from "react";

const FALLBACK = "/images/labrador.png";

type Props = {
  src?: string | null;
  alt: string;
  className?: string;
  fallbackSrc?: string;
};

/** Remote/local image with referrer-safe loading and broken-image fallback. */
export default function SafeImage({
  src,
  alt,
  className,
  fallbackSrc = FALLBACK,
}: Props) {
  const resolved = src && src.trim() ? src.trim() : fallbackSrc;
  const [current, setCurrent] = useState(resolved);

  useEffect(() => {
    setCurrent(resolved);
  }, [resolved]);

  return (
    <img
      src={current || fallbackSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      loading="lazy"
      decoding="async"
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
