import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Finale2126() {
  const titleRef = useRef(null);
  const whoRef = useRef(null);
  const youRef = useRef(null);

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
  }, []);

  return (
    <>
      {/* PHASE 1 */}
      <section
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
              color: "#888",
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