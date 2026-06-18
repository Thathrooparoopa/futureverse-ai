import { useEffect, useState } from "react";

function NowPlaying({ music }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!music) return;

    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [music]);

  if (!music) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "30px",
        right: "30px",
        zIndex: 9999,

        opacity: show ? 1 : 0,
        transform: show
          ? "translateY(0)"
          : "translateY(-20px)",

        transition: ".5s",

        padding: "20px",
        width: "280px",

        borderRadius: "20px",

        background: "rgba(255,255,255,.05)",
        backdropFilter: "blur(20px)",

        border: "1px solid rgba(255,255,255,.08)",

        color: "white",
      }}
    >
      <p style={{ color: "#aaa" }}>
        ♫ LYRIA SOUNDTRACK
      </p>

      <h2>{music.title}</h2>

      <p>{music.era}</p>

      <p
        style={{
          color: "#888",
          fontSize: ".9rem",
        }}
      >
        {music.mood}
      </p>
    </div>
  );
}

export default NowPlaying;