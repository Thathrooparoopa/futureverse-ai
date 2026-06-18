function AudioOrb({ music }) {
  return (
    <div
      style={{
        position: "fixed",
        right: "30px",
        bottom: "30px",

        width: "70px",
        height: "70px",

        borderRadius: "50%",

        background:
          "linear-gradient(135deg,#6f6fff,#a855f7)",

        boxShadow:
          "0 0 40px rgba(168,85,247,.5)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        color: "white",

        zIndex: 9999,

        animation:
          "pulse 2s infinite",
      }}
    >
      ♪
    </div>
  );
}

export default AudioOrb;