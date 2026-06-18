import { useState } from "react";

function TimelineGenerator() {
  const [prompt, setPrompt] = useState("");
  const [timeline, setTimeline] = useState(null);

  const generateTimeline = () => {
    const text = prompt.toLowerCase();

    if (
      text.includes("earth") ||
      text.includes("nature") ||
      text.includes("climate") ||
      text.includes("planet")
    ) {
      setTimeline({
        title: "Sustainable Planet",
        glow: "#00ff99",
        events: [
          ["2028", "AI begins monitoring global ecosystems"],
          ["2045", "Renewable energy powers most cities"],
          ["2075", "Autonomous climate restoration systems deployed"],
          ["2120", "Earth becomes carbon negative"],
          ["2200", "Planet fully restored"],
        ],
      });
    } else if (
      text.includes("space") ||
      text.includes("mars") ||
      text.includes("galaxy") ||
      text.includes("planetary")
    ) {
      setTimeline({
        title: "Space Civilization",
        glow: "#4da6ff",
        events: [
          ["2035", "Permanent Moon settlements established"],
          ["2060", "Mars becomes self-sustaining"],
          ["2100", "Orbital megacities emerge"],
          ["2150", "Interplanetary economy begins"],
          ["2200", "12 worlds successfully settled"],
        ],
      });
    } else {
      setTimeline({
        title: "Human Enhancement",
        glow: "#a855f7",
        events: [
          ["2035", "AI-assisted learning becomes standard"],
          ["2060", "Neural interfaces become mainstream"],
          ["2085", "Memory augmentation introduced"],
          ["2140", "Disease prevention reaches 99%"],
          ["2200", "Human intelligence dramatically expanded"],
        ],
      });
    }
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        padding: "120px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {timeline && (
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: timeline.glow,
            opacity: 0.15,
            filter: "blur(180px)",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#888",
            letterSpacing: "4px",
          }}
        >
          FUTURE TIMELINE GENERATOR
        </p>

        <h1
          style={{
            textAlign: "center",
            fontSize: "clamp(3rem,8vw,6rem)",
            marginTop: "20px",
          }}
        >
          Create Your Future Timeline
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            maxWidth: "700px",
            margin: "20px auto 50px auto",
            lineHeight: "1.8",
          }}
        >
          Describe a future and watch AI generate
          the journey that leads there.
        </p>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A world where AI restores nature..."
            style={{
              width: "100%",
              padding: "22px",
              borderRadius: "18px",
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.08)",
              color: "white",
              fontSize: "1rem",
              outline: "none",
            }}
          />

          <button
            onClick={generateTimeline}
            style={{
              marginTop: "25px",
              padding: "18px 40px",
              borderRadius: "16px",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(135deg,#6f6fff,#a855f7)",
              color: "white",
              fontWeight: "600",
            }}
          >
            GENERATE TIMELINE
          </button>
        </div>

        {timeline && (
          <>
            <h2
              style={{
                textAlign: "center",
                marginTop: "80px",
                fontSize: "2.5rem",
              }}
            >
              {timeline.title}
            </h2>

            <div
              style={{
                maxWidth: "700px",
                margin: "70px auto 0 auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "18px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background:
                    "rgba(255,255,255,.15)",
                }}
              />

              {timeline.events.map((event, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "30px",
                    marginBottom: "50px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: timeline.glow,
                      flexShrink: 0,
                      boxShadow:
                        `0 0 25px ${timeline.glow}`,
                    }}
                  />

                  <div
                    style={{
                      flex: 1,
                      padding: "25px",
                      borderRadius: "20px",
                      background:
                        "rgba(255,255,255,.05)",
                      backdropFilter: "blur(20px)",
                      border:
                        "1px solid rgba(255,255,255,.08)",
                    }}
                  >
                    <h3
                      style={{
                        marginBottom: "10px",
                        fontSize: "1.6rem",
                      }}
                    >
                      {event[0]}
                    </h3>

                    <p
                      style={{
                        color: "#b5b5b5",
                        lineHeight: "1.8",
                      }}
                    >
                      {event[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default TimelineGenerator;