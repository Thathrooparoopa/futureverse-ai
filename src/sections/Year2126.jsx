import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Year2126() {
  const sectionRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(() => {
    gsap.from(".y2126", {
      opacity: 0,
      y: 80,
      duration: 1.4,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });
  });

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black text-white flex items-center"
    >
      {/* Blue Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 via-black to-black" />

      {/* Glow */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[800px]
        h-[800px]
        rounded-full
        bg-sky-500/10
        blur-[180px]
        "
      />

      {/* Audio Element */}
      <audio ref={audioRef} src="/music/discovery.mp3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">

        {/* Era Timeline */}
        <div className="y2126 text-center mb-16">
          <p className="uppercase tracking-[0.45em] text-white/40 text-xs">
            ERA FIVE
          </p>

          <div className="w-px h-28 bg-gradient-to-b from-sky-400 to-transparent mx-auto mt-6" />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Poster - Right Side */}
          <div className="y2126 order-1 lg:order-2">
            <img
              src="/posters/2126.png"
              alt="2126"
              className="
              w-full
              rounded-3xl
              border border-white/10
              shadow-[0_0_100px_rgba(96,165,250,0.25)]
              "
            />
          </div>

          {/* Story - Left Side */}
          <div className="order-2 lg:order-1">

            <p className="y2126 uppercase tracking-[0.3em] text-sky-400 mb-6">
              Chronicle 05
            </p>

            <h2 className="y2126 text-6xl md:text-8xl font-bold mb-4">
              2126
            </h2>

            <h3 className="y2126 text-3xl md:text-5xl font-light mb-10">
              HUMANITY THRIVES
            </h3>

            {/* Music Card */}
            <audio
              ref={audioRef}
              src="/music/discovery.mp3"
            />

            <div
              className="
              y2126
              mb-10
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              max-w-md
              "
            >
              <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
                🎵 Lyria Soundtrack
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                Discovery
              </h4>

              <div className="mt-5 flex items-center justify-between">

                <button
                  onClick={toggleAudio}
                  className="
                  px-5
                  py-2
                  rounded-full
                  border
                  border-white/10
                  hover:border-sky-400
                  transition-colors
                  "
                >
                  {isPlaying ? "⏸ Pause" : "▶ Play"}
                </button>

                <span className="text-white/50">
              Discovery

                </span>

              </div>
            </div>

            <p className="y2126 text-2xl md:text-3xl text-white/80 leading-relaxed mb-10">
              Intelligence became abundant.
              <br />
              Knowledge became universal.
              <br />
              Opportunity became limitless.
            </p>

            <p className="y2126 text-lg md:text-xl text-white/60 leading-relaxed">
              A century after the discovery of the crystal,
              humanity is no longer defined by its limitations.
              It is defined by its imagination.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Year2126;