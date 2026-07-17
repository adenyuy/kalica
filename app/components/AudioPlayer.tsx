"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/assets/DJ AISHITERU 2 VIRALREMIX FULL BASS TERBARU - FYP TIKTOK.mp3");
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 bg-pink-400 p-4 rounded-full brutal-border brutal-shadow-sm brutal-hover transition-transform"
      aria-label="Toggle music"
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-slate-900" />
      ) : (
        <VolumeX className="w-6 h-6 text-slate-900" />
      )}
    </button>
  );
}
