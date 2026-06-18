import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = (scrollTop / docHeight) * 100;

      setProgress(percent);
    };

    window.addEventListener("scroll", update);

    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        top: "0",
        width: "4px",
        height: "100vh",
        background: "rgba(255,255,255,.08)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "100%",
          height: `${progress}%`,
          background:
            "linear-gradient(to bottom,#fff,#c0c0c0,#8f8f8f)",
        }}
      />
    </div>
  );
}

export default ScrollProgress;