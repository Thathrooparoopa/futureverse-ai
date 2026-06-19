import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { musicInfo } from "../data/musicData";
import LyriaBadge from "../components/LyriaBadge";

gsap.registerPlugin(ScrollTrigger);

function Year2050({
  setTrack,
  setCurrentMusic,
  isPlaying,
  setIsPlaying,
}){
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const posterRef = useRef(null);
  const cardsRef = useRef([]);
  const handleEnter = () => {
  gsap.to(posterRef.current, {
    scale: 1.03,
    duration: 0.4,
  });
};

const handleLeave = () => {
  gsap.to(posterRef.current, {
    scale: 1,
    duration: 0.4,
  });
};

  useGSAP(() => {
    gsap.from(titleRef.current, {
      scale: 0.7,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    gsap.from(posterRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: posterRef.current,
        start: "top 85%",
      },
    });
gsap.to(posterRef.current, {
  y: -15,
  rotation: 0.5,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
    

    gsap.from(cardsRef.current, {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 90%",
      },
    });
    ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top center",

onEnter: () => {
  setTrack("/music/innovation.mp3");

  setCurrentMusic(
    musicInfo.innovation
  );
},

onEnterBack: () => {
  setTrack("/music/innovation.mp3");

  setCurrentMusic(
    musicInfo.innovation
  );
},
});
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        color: "white",
        padding: "120px 30px",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/posters/smart-city.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          transform: "scale(1.08)",
          filter: "blur(5px)",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.85))",
        }}
      />

      {/* Blue Glow */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(0,140,255,.12)",
          filter: "blur(140px)",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center",
          padding: "70px",
          borderRadius: "40px",
          background: "rgba(255,255,255,.03)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <p
          style={{
            color: "#8f8f8f",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Era Two
        </p>

        <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginBottom: "25px",
  }}
>
  <h1
    ref={titleRef}
    className="year-number"
    style={{
      fontSize: "clamp(7rem,14vw,12rem)",
      margin: 0,
    }}
  >
    2050
  </h1>

  <LyriaBadge
    title="Innovation"
    color="#6487c2"
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
  />
</div>



        <h2
  style={{
    fontSize: "clamp(2rem,4vw,3.5rem)",
    marginBottom: "25px",
  }}
>
  Smart Cities Run Themselves
</h2>



        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            color: "#b5b5b5",
            lineHeight: "1.9",
            fontSize: "1.1rem",
          }}
        >
          By 2050, artificial intelligence manages traffic,
          energy, healthcare, and public services.
          Cities become safer, cleaner, and more efficient,
          while people enjoy a better quality of life.
        </p>

        {/* Hero Image */}
        <img
  ref={posterRef}
  onMouseEnter={handleEnter}
  onMouseLeave={handleLeave}

  src="/posters/smart-city.webp"
  alt="Smart City"
  style={{
    width: "100%",
    maxWidth: "950px",
    marginTop: "60px",
    borderRadius: "30px",
    boxShadow:
      "0 50px 140px rgba(255,255,255,.08)",
    transition: "all .4s ease",
    cursor: "pointer",
  }}
/>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            marginTop: "50px",
            maxWidth: "1000px",
            marginInline: "auto",
          }}
        >
          {[
            ["98%", "Less Traffic"],
            ["95%", "Clean Energy"],
            ["24/7", "Smart Services"],
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                padding: "35px",
                borderRadius: "24px",
                background: "rgba(255,255,255,.04)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "3rem",
                  marginBottom: "12px",
                }}
              >
                {item[0]}
              </h3>

              <p
                style={{
                  color: "#b5b5b5",
                }}
              >
                {item[1]}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p
          style={{
            marginTop: "60px",
            color: "#9f9f9f",
            fontSize: "1.3rem",
            fontStyle: "italic",
          }}
        >
          "Technology fades into the background while life gets better."
        </p>
      </div>
    </section>
  );
}

export default Year2050;