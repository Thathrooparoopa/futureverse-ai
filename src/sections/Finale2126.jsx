import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LyriaBadge from "../components/LyriaBadge";
import { musicInfo } from "../data/musicData";

gsap.registerPlugin(ScrollTrigger);

 function Finale2126({
  setTrack,
  setCurrentMusic,
  isPlaying,
  setIsPlaying,
}) {
const finaleRef = useRef(null);
const titleRef = useRef(null);
const whoRef = useRef(null);
const youRef = useRef(null);
const healthcarePosterRef = useRef(null);
const healthcareTextRef = useRef(null);
  
  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    gsap.from(whoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: whoRef.current,
        start: "top 75%",
      },
    });

    gsap.from(youRef.current, {
      scale: 0.3,
      opacity: 0,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: youRef.current,
        start: "top 80%",
      },
    });

    gsap.to(".future-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.from(healthcarePosterRef.current, {
  x: -150,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: healthcarePosterRef.current,
    start: "top 80%",
  },
});

gsap.from(healthcareTextRef.current, {
  x: 150,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: healthcareTextRef.current,
    start: "top 80%",
  },
});

gsap.to(healthcarePosterRef.current, {
  y: -15,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

    ScrollTrigger.create({
  trigger: finaleRef.current,
  start: "top center",

  onEnter: () => {
    setTrack("/music/discovery.mp3");

    setCurrentMusic(
      musicInfo.discovery
    );
  },

  onEnterBack: () => {
    setTrack("/music/discovery.mp3");

    setCurrentMusic(
      musicInfo.discovery
    );
  },
});

  }, []);



  return (
    <>
      {/* PHASE 1 */}
       <section
  ref={finaleRef}
  style={{
    minHeight: "100vh",
    background: "#000",
    color: "white",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
    padding: "40px",
  }}
>

        <div
          className="future-orb"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(120,90,255,.5), transparent)",
            filter: "blur(50px)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1000px",
          }}
        >
          <p
            style={{
              color: "#048ac8",
              letterSpacing: "4px",
              marginBottom: "30px",
            }}
          >
            YEAR 2126
          </p>

          <h1
            ref={titleRef}
            style={{
              fontSize: "clamp(3rem,8vw,7rem)",
              lineHeight: "1.05",
              marginBottom: "40px",
            }}
          >
            Humanity and AI
            <br />
            Are No Longer Separate
          </h1>


          <p
            style={{
              color: "#b5b5b5",
              lineHeight: "1.9",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.15rem",
            }}
          >
            The future is no longer something we wait for.
            It is something we build.
          </p>

          <p
            style={{
              marginTop: "100px",
              color: "#666",
              letterSpacing: "2px",
            }}
          >
            SCROLL TO CONTINUE ↓
          </p>
        </div>
      </section>


      <section
  style={{
    minHeight: "100vh",
    background: "#000",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "80px",
    flexWrap: "wrap",
    padding: "100px 40px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    style={{
      position: "absolute",
      width: "700px",
      height: "700px",
      borderRadius: "50%",
      background: "rgba(96,165,250,.12)",
      filter: "blur(150px)",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  />
<img
  ref={healthcarePosterRef}
  src="/posters/future-healthcare.webp"
  alt="Future Healthcare"
style={{
  width: "100%",
  maxWidth: "800px",
  borderRadius: "30px",

  boxShadow:
    "0 50px 180px rgba(96,165,250,.20)",

  transform: "translateY(-10px) scale(1.08)",

  position: "relative",
  zIndex: 10,
}}
/>
  

  <div
    ref={healthcareTextRef}
    style={{
      maxWidth: "650px",
      padding: "40px",
      borderRadius: "30px",
      background: "rgba(255,255,255,.04)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,.08)",
      position: "relative",
      zIndex: 10,
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
  Final Era
</p>

<div
  style={{
    width: "2px",
    height: "120px",
    background:
      "linear-gradient(to bottom, transparent, #60a5fa, transparent)",
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
  2126
</h1>

    <h2
      style={{
        fontSize: "clamp(2rem,4vw,4rem)",
        marginBottom: "25px",
      }}
    >
      AI Has Become Humanity's Guardian
    </h2>

    <LyriaBadge
      title="Discovery"
      color="#60a5fa"
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
    />

    <p
      style={{
        marginTop: "25px",
        color: "#b5b5b5",
        lineHeight: "1.9",
      }}
    >
      Healthcare is predictive rather than reactive.
      Disease is detected before symptoms appear.
      Lifespan and quality of life have dramatically
      improved through AI-assisted medicine.
    </p>

    <p
      style={{
        marginTop: "25px",
        color: "#93c5fd",
        fontStyle: "italic",
      }}
    >
      "The greatest achievement of AI was not
      intelligence. It was helping humanity thrive."
    </p>
  </div>
</section>

      {/* PHASE 2 */}
      <section
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          ref={whoRef}
          style={{
            fontSize: "clamp(5rem,12vw,10rem)",
            lineHeight: "0.95",
            maxWidth: "1400px",
          }}
        >
          WHO BUILDS
          <br />
          THE NEXT
          <br />
          CENTURY?
        </h1>
      </section>

      {/* PHASE 3 */}
      <section
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(140,100,255,.35), transparent)",
            filter: "blur(120px)",
          }}
        />

        <h1
          ref={youRef}
          style={{
            position: "relative",
            zIndex: 10,
            fontSize: "clamp(8rem,20vw,18rem)",
            fontWeight: "700",
            letterSpacing: "10px",
          }}
        >
          YOU.
        </h1>
      </section>
    </>
  );
}

export default Finale2126;