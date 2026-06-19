import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { musicInfo } from "../data/musicData";
import LyriaBadge from "../components/LyriaBadge";


gsap.registerPlugin(ScrollTrigger);

  function Year2035({
  setTrack,
  setCurrentMusic,
  isPlaying,
  setIsPlaying,
}){
  const sectionRef = useRef(null);
  const posterRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
  gsap.from(sectionRef.current, {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
    },
  });

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
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: textRef.current,
      start: "top 80%",
    },
  });

  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top center",
onEnter: () => {
  setTrack("/music/hope.mp3");

  setCurrentMusic(
    musicInfo.hope
  );
},

onEnterBack: () => {
  setTrack("/music/hope.mp3");

  setCurrentMusic(
    musicInfo.hope
  );
},
   
  });

}, []);

  return (
    <section
      id="year2035"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* Background Video */}
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
          opacity: 0.35,
        }}
      >
        <source src="/videos/2035.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
  "linear-gradient(to bottom, rgba(0,0,0,.55), rgba(0,0,0,.75))",
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
        {/* Poster */}
        <img
          ref={posterRef}
          src="/posters/future-workplace.webp"
          alt="Future Workplace"
          style={{
            width: "100%",
            maxWidth: "650px",
            borderRadius: "24px",
            boxShadow: "0 30px 100px rgba(255,255,255,.08)",
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
            Era One
          </p>

          <div
            style={{
              width: "2px",
              height: "120px",
              background:
                "linear-gradient(to bottom, transparent, #888, transparent)",
              marginBottom: "30px",
            }}
          />

          <h1
            className="year-number"
            style={{
              fontSize: "clamp(5rem,10vw,8rem)",
              marginBottom: "10px",
            }}
          >
            2035
          </h1>
           
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3.2rem)",
              marginBottom: "25px",
              color: "#d9d9d9",
              lineHeight: "1.2",
            }}
          >
            AI Becomes Humanity's Co-Pilot
          </h2>
          <LyriaBadge
 title="Hope"
 color="#ffffff"
 isPlaying={isPlaying}
 setIsPlaying={setIsPlaying}
/>

          <p
            style={{
              color: "#b5b5b5",
              lineHeight: "1.9",
              fontSize: "1.05rem",
            }}
          >
            Artificial Intelligence becomes an everyday partner.
            Doctors diagnose faster, teachers personalize learning,
            engineers design smarter systems, and creative professionals
            collaborate with AI to unlock new possibilities.
          </p>

          <p
            style={{
              marginTop: "25px",
              color: "#8f8f8f",
              fontStyle: "italic",
            }}
          >
            "The age of human potential accelerated by AI."
          </p>

          {/* Feature Cards */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <div className="stat-card">AI Doctors</div>
            <div className="stat-card">AI Teachers</div>
            <div className="stat-card">AI Engineers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Year2035;