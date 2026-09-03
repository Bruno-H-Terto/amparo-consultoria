import { useEffect, useRef, useState } from "react";
import { cx } from "@/utils/cx";

export interface MosaicImage {
  src: string;
  alt: string;
  tileClassName?: string;
  imageClassName?: string;
}

interface ImageMosaicProps {
  images: MosaicImage[];
  className?: string;
}

export default function ImageMosaic({ images, className }: ImageMosaicProps) {
  return (
    <div className={className}>
      {images.map((image, index) => <MosaicTile key={image.src} image={image} index={index} />)}
    </div>
  );
}

function MosaicTile({ image, index }: { image: MosaicImage; index: number }) {
  const tileRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const tile = tileRef.current;
    if (!tile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(tile);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={tileRef}
      style={{ transitionDelay: `${(index % 4) * 160}ms`, transitionDuration: `${1500 + (index % 5) * 180}ms` }}
      className={cx(
        "overflow-hidden transition-[opacity,transform] ease-out motion-reduce:transform-none motion-reduce:transition-none",
        isVisible ? "translate-y-0 scale-100 opacity-100" : index % 2 ? "-translate-y-5 scale-[1.06] opacity-0" : "translate-y-5 scale-[1.04] opacity-0",
        image.tileClassName,
      )}
    >
      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className={cx("size-full object-cover transition-transform duration-700 hover:scale-[1.035]", image.imageClassName)} />
    </div>
  );
}
