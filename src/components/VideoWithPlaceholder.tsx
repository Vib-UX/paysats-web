"use client";

import { useRef, useState } from "react";

interface VideoWithPlaceholderProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export function VideoWithPlaceholder({
  src,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
}: VideoWithPlaceholderProps) {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`relative ${className}`}>
      {/* Placeholder shown until video can play */}
      {!ready && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-b from-arka-surface via-orange-50 to-white rounded-[inherit]">
          <span className="text-2xl font-bold text-arka-primary font-display">Arka</span>
          <div className="mt-3 h-1 w-16 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-full animate-shimmer rounded-full bg-gradient-to-r from-transparent via-arka-primary/40 to-transparent" />
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        className={`h-full w-full object-cover ${ready ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        src={src}
        onCanPlay={() => setReady(true)}
      >
        <track kind="captions" />
      </video>
    </div>
  );
}
