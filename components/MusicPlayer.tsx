"use client";

import {useRef, useState} from "react";

export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    if (!audio.current) return;
    if (audio.current.paused) {
      try {
        await audio.current.play();
      } catch {
        setPlaying(false);
      }
    } else {
      audio.current.pause();
    }
  }

  return <div className="music-player">
    <audio ref={audio} src="/audio-basinggah-di-balangan.mp3" preload="none" loop onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} />
    <button type="button" onClick={toggle} aria-label={playing ? "Jeda musik Basinggah di Balangan" : "Putar musik Basinggah di Balangan"} aria-pressed={playing}>
      <span className="music-player-icon" aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
      <span><strong>{playing ? "JEDA MUSIK" : "PUTAR MUSIK"}</strong><small>Basinggah di Balangan</small></span>
    </button>
  </div>;
}
