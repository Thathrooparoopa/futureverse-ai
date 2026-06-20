import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Year2075() {
  const sectionRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(() => {
    gsap.from(".y2075-reveal", {
      opacity: 0,
      y: 60,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });
  }, []);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }

      setIsPlaying(!isPlaying);
    } catch (err) {
      console.error("Audio playback failed:", err);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/2075.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Purple Glow */}
      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[1000px]
        h-[1000px]
        rounded-full
        bg-purple-500/10
        blur-[250px]
        "
      />

      {/* Audio */}
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/music/exploration.mp3" type="audio/mpeg" />
      </audio>

      {/* Content */}
      <div
        className="
        relative
        z-10
        min-h-screen
        flex
        flex-col
        px-6
        pt-16
        pb-32
        "
      >
        <div className="flex items-start justify-center gap-12 max-w-7xl mx-auto">

          {/* LEFT */}
          <div className="flex flex-col items-center flex-shrink-0">

            <p className="y2075-reveal uppercase tracking-[0.45em] text-white/40 text-sm mb-3">
              YEAR 2075
            </p>

            <div className="relative w-px h-[220px] mb-8">
              <div className="absolute inset-0 bg-white/20" />
              <div className="absolute inset-0 bg-purple-500 blur-sm opacity-80" />
              <div
                className="
                absolute top-0 left-1/2 -translate-x-1/2
                w-3 h-3 rounded-full
                bg-purple-500 shadow-[0_0_20px_#a855f7]
                "
              />
            </div>

            <div className="y2075-reveal">
              <img
                src="/posters/2075.png"
                alt="Learning Through Thought"
                className="
                w-[380px]
                rounded-[30px]
                border border-white/10
                shadow-[0_0_100px_rgba(168,85,247,0.15)]
                "
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start flex-1 pt-8">

            <h2
              className="
              y2075-reveal
              uppercase
              tracking-[0.35em]
              text-cyan-400
              text-sm
              mb-4
              "
            >
              YEAR 2075
            </h2>

            <h3
              className="
              y2075-reveal
              text-5xl
              lg:text-7xl
              font-black
              leading-none
              text-purple-400
              mb-8
              "
            >
              Learning Through
              <br />
              Thought
            </h3>

            {/* Music Card */}
            <div
              className="
              y2075-reveal
              mt-2
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              max-w-md
              w-full
              "
            >
              <p className="text-lg font-medium">
                🎵 Lyria Track: Exploration
              </p>

              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={toggleAudio}
                  className="
                  px-5
                  py-2
                  rounded-full
                  border
                  border-white/10
                  hover:border-purple-500
                  transition-colors
                  "
                >
                  {isPlaying ? "⏸ Pause" : "▶ Play"}
                </button>

                <span className="text-white/50 text-lg">
                  Exploration
                </span>
              </div>
            </div>

            {/* Quote */}
            <p
              className="
              y2075-reveal
              mt-10
              text-2xl
              lg:text-4xl
              italic
              text-cyan-300
              max-w-xl
              leading-tight
              "
            >
              "The boundary between knowledge and imagination disappears."
            </p>

            {/* Description */}
            <div className="y2075-reveal mt-10 space-y-6 max-w-xl">

              <p className="text-3xl font-semibold text-white">
                Education evolves beyond classrooms.
              </p>

              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Neural interfaces allow humans to access knowledge instantly.
              </p>

              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Creativity, memory, and communication expand beyond natural
                limits.
              </p>

            </div>

            {/* Buttons */}
            <div className="y2075-reveal mt-10 flex flex-wrap gap-4">

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                Neural Interfaces
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                Enhanced Intelligence
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                Instant Learning
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}