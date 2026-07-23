"use client";

import { useEffect, useRef, useState } from "react";

interface VideoWithPlaceholderProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  playbackRate?: number;
  objectPosition?: string;
}

export function VideoWithPlaceholder({
  src,
  className = "",
  style,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  playbackRate = 1,
  objectPosition = "center",
}: VideoWithPlaceholderProps) {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.playbackRate = playbackRate;
      if (v.readyState >= 2 && !ready) setReady(true);
    }
  }, [ready, playbackRate]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {!ready && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-b from-paysats-surface via-orange-50 to-white">
          <span className="text-2xl font-bold text-paysats-primary font-display">PaySats</span>
          <div className="mt-3 h-1 w-16 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-full animate-shimmer rounded-full bg-gradient-to-r from-transparent via-paysats-primary/40 to-transparent" />
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover ${ready ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        style={{ objectPosition }}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload="metadata"
        src={src}
        onLoadedData={() => {
          if (videoRef.current) videoRef.current.playbackRate = playbackRate;
          setReady(true);
        }}
      >
        <track kind="captions" srcLang="en" label="English" />
      </video>
    </div>
  );
}
