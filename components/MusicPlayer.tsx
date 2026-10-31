"use client";

import {useEffect, useRef} from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function start() {
      if (audio?.paused) void audio.play().catch(() => {});
    }
    function stopListening() {
      window.removeEventListener("click", start);
      window.removeEventListener("keydown", start);
    }

    window.addEventListener("click", start);
    window.addEventListener("keydown", start);
    audio.addEventListener("playing", stopListening);
    start();

    return () => {
      stopListening();
      audio.removeEventListener("playing", stopListening);
    };
  }, []);

  return <audio ref={audioRef} src="/audio-basinggah-di-balangan.mp3" autoPlay loop preload="auto" />;
}
