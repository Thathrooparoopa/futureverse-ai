import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Hero() {

  const titleRef = useRef();
const videoRef = useRef();

  

useGSAP(() => {

  gsap.from(titleRef.current, {
    y: 120,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
  });

  gsap.to(videoRef.current, {
    scale: 1.15,
    y: -30,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",


    scrollTrigger: {
      trigger: videoRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

});
  return (
    <section
      style={{
        position: "relative",
        height: "140vh",
        overflow: "hidden",
      }}
    >
      {/* Video */}
      <video
      ref={videoRef}

        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.25,
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
  style={{
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.75))",
  }}
/>

<div
  className="hero-glow"
  style={{
    position: "absolute",
    width: "700px",
    height: "700px",
    borderRadius: "50%",
    background: "rgba(80,120,255,.18)",
    filter: "blur(120px)",
    top: "45%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  }}
/>
{/* Content */}
<div
  style={{
    position: "relative",
    zIndex: 10,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    padding: "20px",
  }}
>
  {/* Year Label */}
  <p
    style={{
      letterSpacing: "8px",
      textTransform: "uppercase",
      color: "#9ca3af",
      fontSize: ".9rem",
      marginBottom: "20px",
    }}
  >
    YEAR 2026
  </p>

  {/* Main Title */}
  <h1
    ref={titleRef}
    className="hero-title"
    style={{
      fontSize: "clamp(5rem,10vw,9rem)",
      lineHeight: ".9",
      fontWeight: "700",
      maxWidth: "1400px",
      textShadow: "0 0 40px rgba(255,255,255,.15)",
    }}
  >
    FUTUREVERSE AI
  </h1>

  {/* Subtitle */}
  <p
    style={{
      marginTop: "35px",
      fontSize: "1.35rem",
      color: "#d1d5db",
      maxWidth: "720px",
      lineHeight: "1.8",
    }}
  >
    An Interactive AI Documentary About Humanity's
    Next Century
  </p>
<button
  className="hero-btn"
  onClick={() => {
    document
      .getElementById("year2035")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  Begin The Journey →
</button>
  

  {/* Scroll */}
  <div
    style={{
      marginTop: "70px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <span
      style={{
        fontSize: ".8rem",
        letterSpacing: "4px",
        color: "#8f8f8f",
      }}
    >
      SCROLL TO EXPLORE
    </span>

    <div className="scroll-line" />
  </div>
</div>
      
    </section>
  );
}

export default Hero;