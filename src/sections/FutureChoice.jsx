import { useState } from "react";

function FutureChoice() {
  const [selected, setSelected] = useState(null);

  const futures = {
    planet: {
      title: "🌍 Sustainable Planet",
      description:
        "AI restores ecosystems, removes pollution, and creates a carbon-negative Earth.",
      future: `
YEAR 2180

Global Emissions: 0

Ocean Restoration: 100%

Renewable Energy: Unlimited

Humanity lives in balance with nature.
      `,
      glow: "rgba(0,255,150,.25)",
    },

    space: {
      title: "🚀 Space Civilization",
      description:
        "Humanity expands beyond Earth and builds intelligent cities among the stars.",
      future: `
YEAR 2180

Planets Settled: 12

Population: 18 Billion

Average Lifespan: 142 Years

AI enables interplanetary civilization.
      `,
      glow: "rgba(0,150,255,.25)",
    },

    human: {
      title: "🧠 Human Enhancement",
      description:
        "Neural interfaces unlock new levels of intelligence and creativity.",
      future: `
YEAR 2180

Learning Speed: 10x

Disease Prevention: 99%

Enhanced Creativity

Human potential reaches new heights.
      `,
      glow: "rgba(150,100,255,.25)",
    },
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        padding: "120px 40px",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Dynamic Glow */}
      {selected && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: futures[selected].glow,
            filter: "blur(200px)",
            opacity: 0.8,
            pointerEvents: "none",
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#888",
            letterSpacing: "4px",
          }}
        >
          THE CHOICE
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem,8vw,6rem)",
            marginTop: "20px",
          }}
        >
          What Future Would You Create?
        </h1>

        <p
          style={{
            color: "#aaa",
            maxWidth: "700px",
            margin: "20px auto 60px auto",
          }}
        >
          Every future begins with a choice.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {Object.keys(futures).map((key) => (
            <div
              key={key}
              onClick={() => setSelected(key)}
              style={{
                cursor: "pointer",
                padding: "35px",
                borderRadius: "24px",
                background: "rgba(255,255,255,.05)",
                backdropFilter: "blur(20px)",
                border:
                  selected === key
                    ? "1px solid white"
                    : "1px solid rgba(255,255,255,.08)",
                transition: "all .4s ease",
              }}
            >
              <h2>{futures[key].title}</h2>

              <p
                style={{
                  color: "#b5b5b5",
                  lineHeight: "1.8",
                  marginTop: "15px",
                }}
              >
                {futures[key].description}
              </p>
            </div>
          ))}
        </div>

        {/* Future Result */}
        {selected && (
          <div
            style={{
              marginTop: "80px",
              padding: "40px",
              borderRadius: "30px",
              background: "rgba(255,255,255,.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,.08)",
              whiteSpace: "pre-line",
              textAlign: "left",
              maxWidth: "900px",
              marginInline: "auto",
            }}
          >
            <p
              style={{
                color: "#888",
                letterSpacing: "3px",
              }}
            >
              YOU CHOSE
            </p>

            <h2
              style={{
                marginTop: "20px",
                marginBottom: "30px",
              }}
            >
              {futures[selected].title}
            </h2>

            <p
              style={{
                color: "#ddd",
                lineHeight: "2",
              }}
            >
              {futures[selected].future}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FutureChoice;