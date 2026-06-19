import { useEffect, useRef } from "react";

function MusicPlayer({
  track,
  isPlaying,
}) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = track;
    audioRef.current.load();

    if (isPlaying) {
      audioRef.current
        .play()
        .catch(() => {});
    }
  }, [track, isPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current
        .play()
        .catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      loop
      style={{ display: "none" }}
    />
  );
}

export default MusicPlayer;