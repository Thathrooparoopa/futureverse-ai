import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Year2075({ setTrack }) {
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
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });

    gsap.to(posterRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top center",

  onEnter: () => {
    setTrack("/music/exploration.mp3");
  },

  onEnterBack: () => {
    setTrack("/music/exploration.mp3");
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
          opacity: 0.5,
        }}
      >
        <source src="/videos/2075.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.75), rgba(0,0,0,.92))",
        }}
      />

      {/* Purple Glow */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(130,90,255,.18)",
          filter: "blur(180px)",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
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
          src="/posters/human-ai.webp"
          alt="Human AI Evolution"
          style={{
            width: "100%",
            maxWidth: "550px",
            borderRadius: "24px",
            boxShadow:
              "0 30px 120px rgba(130,90,255,.18)",
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
              color: "#9f9f9f",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Era Three
          </p>

          <div
            style={{
              width: "2px",
              height: "120px",
              background:
                "linear-gradient(to bottom, transparent, #9f7cff, transparent)",
              marginBottom: "30px",
            }}
          />


<div
  style={{
    display: "flex",
    alignItems: "flex-end",
    gap: "20px",
    marginBottom: "25px",
    flexWrap: "wrap",
  }}
>
  <h1
    className="year-number"
    style={{
      fontSize: "clamp(5rem,10vw,8rem)",
      margin: 0,
    }}
  >
    2075
  </h1>

  <div
    style={{
      padding: "12px 20px",

      borderRadius: "18px",

      background:
        "rgba(130,90,255,.12)",

      backdropFilter: "blur(20px)",

      border:
        "1px solid rgba(130,90,255,.35)",

      boxShadow:
        "0 0 30px rgba(130,90,255,.18)",

      textAlign: "left",

      marginBottom: "15px",
    }}
  >
    <div
      style={{
        fontSize: ".72rem",
        letterSpacing: "2px",
        color: "#d8c7ff",
        textTransform: "uppercase",
      }}
    >
      ♫ LYRIA SOUNDTRACK
    </div>

    <div
      style={{
        marginTop: "4px",
        fontWeight: "600",
        color: "#fff",
      }}
    >
      Exploration
    </div>

    <div
      style={{
        fontSize: ".8rem",
        color: "#bda8ff",
      }}
    >
      Generated using Google Lyria
    </div>
  </div>
</div>
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3.2rem)",
              marginBottom: "25px",
              color: "#f2f2f2",
              lineHeight: "1.2",
            }}
          >
            Human + AI Evolution
          </h2>

          <p
            style={{
              color: "#b5b5b5",
              lineHeight: "1.9",
              fontSize: "1.05rem",
            }}
          >
            Artificial intelligence is no longer a tool.
            Neural interfaces connect directly with the
            human mind, expanding learning, memory,
            communication, and creativity beyond natural
            limits.
          </p>

          <p
            style={{
              marginTop: "25px",
              color: "#9f9f9f",
              fontStyle: "italic",
            }}
          >
            "The boundary between human potential and
            artificial intelligence disappears."
          </p>

          {/* Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              marginTop: "40px",
            }}
          >
            <div className="stat-card">
              Enhanced Intelligence
            </div>

            <div className="stat-card">
              Neural Interfaces
            </div>

            <div className="stat-card">
              Predictive Healthcare
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Year2075;