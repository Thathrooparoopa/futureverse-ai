import { useEffect, useRef } from "react";

function MusicPlayer({ track }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();

      audioRef.current.src = track;

      audioRef.current.load();

      audioRef.current.play().catch(() => {});
    }
  }, [track]);

  return (
    <audio
      ref={audioRef}
      loop
      style={{ display: "none" }}
    />
  );
}

export default MusicPlayer;