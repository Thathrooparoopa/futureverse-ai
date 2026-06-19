 import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { musicInfo } from "../data/musicData";
import LyriaBadge from "../components/LyriaBadge";


gsap.registerPlugin(ScrollTrigger);
 
 


  function Year2100({
  setTrack,
  setCurrentMusic,
  isPlaying,
  setIsPlaying,
}) {

const sectionRef = useRef(null);
const posterRef = useRef(null);
const textRef = useRef(null);

useGSAP(() => {
  gsap.from(posterRef.current, {
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: posterRef.current,
      start: "top 80%",
    },
  });

  gsap.from(textRef.current, {
    x: 150,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: textRef.current,
      start: "top 80%",
    },
  });

  gsap.to(posterRef.current, {
    y: -15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top center",

    onEnter: () => {
      setTrack("/music/destiny.mp3");
      setCurrentMusic(
        musicInfo.destiny
      );
    },

    onEnterBack: () => {
      setTrack("/music/destiny.mp3");
      setCurrentMusic(
        musicInfo.destiny
      );
    },
  });

}, []);
  return (
    <section
      id="year2100"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* Space Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/videos/space-era.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.7), rgba(0,0,0,.9))",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
          flexWrap: "wrap",
          padding: "100px 40px",
        }}
      >
        {/* Mars Poster */}
        <img
          ref={posterRef}
          src="/posters/mars-colony.webp"
          alt="Mars Colony"
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "24px",
            boxShadow:
              "0 30px 100px rgba(255,255,255,.08)",
          }}
        />

        {/* Text */}
        <div
          ref={textRef}
          style={{
            maxWidth: "600px",
          }}
        >
          <p
            style={{
              color: "#8f8f8f",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Era Four
          </p>

  <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "20px",
  }}
>
  <h1
    className="year-number"
    style={{
      fontSize: "clamp(5rem,10vw,8rem)",
      margin: 0,
    }}
  >
    2100
  </h1>

  <LyriaBadge
    title="Destiny"
    color="#fbbf24"
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
  />
</div>
 <h2
    style={{
       fontSize: "clamp(2rem,4vw,3.5rem)",
       marginBottom: "30px",
         }}>
       The Interplanetary Era
</h2>

          <p
            style={{
              color: "#b5b5b5",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Humanity expands beyond Earth. Intelligent
            cities thrive on Mars, lunar colonies connect
            the solar system, and AI coordinates civilization
            across multiple worlds.
          </p>

          {/* Cards */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div className="stat-card">
              <h3>Mars</h3>
              <p>Self-Sustaining Cities</p>
            </div>

            <div className="stat-card">
              <h3>Moon</h3>
              <p>Research Colonies</p>
            </div>

            <div className="stat-card">
              <h3>AI</h3>
              <p>Planetary Governance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Year2100;