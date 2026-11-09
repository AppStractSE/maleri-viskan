"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  images: string[];
}

const Gallery = ({ title, images }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => dialogRef.current?.close(), []);
  const step = useCallback(
    (delta: number) => setIndex((i) => (i + delta + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (!dialog.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const sync = () => (document.documentElement.style.overflow = dialog.open ? "hidden" : "");
    const observer = new MutationObserver(sync);
    observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
    window.addEventListener("keydown", onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [step]);

  const navButton =
    "grid h-12 w-12 place-items-center rounded-full bg-chalk/10 text-chalk backdrop-blur transition-colors hover:bg-chalk hover:text-ink";

  return (
    <>
      {/* Row-major grid so "next" in the lightbox is the image to the right. */}
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {images.map((src, i) => (
          <li key={src} className={i === 0 ? "col-span-2 row-span-2" : ""}>
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-card bg-mist-100"
              aria-label={`Visa bild ${i + 1} av ${images.length} i större format`}
            >
              <Image
                src={src}
                alt={`${title}, bild ${i + 1}`}
                fill
                sizes={
                  i === 0
                    ? "(min-width: 1024px) 840px, 100vw"
                    : "(min-width: 1024px) 420px, 50vw"
                }
                className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
                priority={i < 3}
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={`${title}: bildgalleri`}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink/95 p-0 text-chalk backdrop:bg-transparent"
        onClick={(e) => e.target === e.currentTarget && close()}
        onTouchStart={(e) => (touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })}
        onTouchEnd={(e) => {
          if (!touchStart.current) return;
          const dx = e.changedTouches[0].clientX - touchStart.current.x;
          const dy = e.changedTouches[0].clientY - touchStart.current.y;
          touchStart.current = null;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
          else if (dy > 80) close();
        }}
      >
        <div className="pointer-events-none absolute inset-0 flex flex-col">
          <div className="pointer-events-auto flex items-center justify-between p-4 sm:p-6">
            <p className="text-sm text-chalk/70">
              {title} · {index + 1} / {images.length}
            </p>
            <button type="button" onClick={close} aria-label="Stäng galleriet" className={navButton}>
              <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m3.5 3.5 9 9m0-9-9 9" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="relative flex-1">
            {images[index] && (
              <Image
                key={images[index]}
                src={images[index]}
                alt={`${title}, bild ${index + 1}`}
                fill
                sizes="100vw"
                className="pointer-events-auto animate-fade-up object-contain px-4 sm:px-24"
              />
            )}
          </div>
          <div className="pointer-events-auto flex justify-center gap-3 p-6">
            <button type="button" onClick={() => step(-1)} aria-label="Föregående bild" className={navButton}>
              <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M10 3.5 5.5 8l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Nästa bild" className={navButton}>
              <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m6 3.5 4.5 4.5L6 12.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Gallery;
