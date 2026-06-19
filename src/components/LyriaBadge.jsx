import React from "react";

function LyriaBadge({
  title,
  color,
  isPlaying,
  setIsPlaying,
}) {
  return (
    <div
      style={{
        padding: "12px 18px",
        borderRadius: "20px",

        background:
          "rgba(10, 237, 253, 0.05)",

        backdropFilter:
          "blur(20px)",

        border:
          "1px solid rgba(255,255,255,.08)",

        boxShadow:
          `0 0 25px ${color}40`,

        display: "inline-flex",
        flexDirection: "column",

        gap: "10px",
      }}
    >
      <div
        style={{
          fontSize: ".75rem",
          letterSpacing: "2px",
          color,
        }}
      >
        ♫ LYRIA SOUNDTRACK
      </div>

      <div
        style={{
          fontWeight: "900",
          fontSize: "1rem",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#999",
          fontSize: ".8rem",
        }}
      >
        Generated using Google Lyria
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <button
          onClick={() =>
            setIsPlaying(true)
          }
        >
          ▶
        </button>

        <button
          onClick={() =>
            setIsPlaying(false)
          }
        >
          ❚❚
        </button>

        <span
          style={{
            color: isPlaying
              ? "#4ade80"
              : "#888",
          }}
        >
          {isPlaying
            ? "● LIVE"
            : "PAUSED"}
        </span>
      </div>
    </div>
  );
}

export default LyriaBadge;