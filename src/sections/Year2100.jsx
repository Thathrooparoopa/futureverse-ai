import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Year2100() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".y2100", {
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

  return (
    <section
      ref={sectionRef}
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-black
      text-white
      "
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
          <source src="/videos/2100.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Gold Glow */}
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
        bg-yellow-500/10
        blur-[250px]
        "
      />

      {/* Audio */}
      <audio controls className="hidden">
        <source src="/music/destiny.mp3" type="audio/mpeg" />
      </audio>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-24">

        {/* Era Label */}
        <div className="y2100 text-center mb-16">
          <p className="uppercase tracking-[0.45em] text-white/40 text-xs">
            YEAR 2100
          </p>

          <div className="w-px h-28 bg-gradient-to-b from-yellow-400 to-transparent mx-auto mt-6" />
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Poster */}
          <div className="y2100 flex justify-center">
            <img
              src="/posters/2100.png"
              alt="Humanity Creates Opportunity"
              className="
              w-full
              max-w-[550px]
              rounded-[28px]
              border
              border-white/10
              shadow-[0_0_80px_rgba(250,204,21,0.18)]
              "
            />
          </div>

          {/* Content */}
          <div className="y2100 text-left">

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm">
              YEAR 2100
            </p>

            <h3 className="mt-6 text-5xl lg:text-7xl font-black leading-none text-yellow-400">
              Humanity Creates
              <br />
              Opportunity
            </h3>

            <div
  className="
  mt-10
  w-full
  max-w-md
  rounded-[28px]
  border
  border-white/10
  bg-white/5
  backdrop-blur-xl
  px-7
  py-6
  "
>
  <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
    LYRIA SOUNDTRACK
  </p>

  <h4 className="mt-3 text-3xl font-bold text-white">
    Destiny
  </h4>

  <div className="mt-6 flex items-center justify-between">
    <button
      onClick={() => {
        const audio = document.getElementById("destiny-audio");

        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }}
      className="
      h-14
      w-14
      rounded-full
      border
      border-yellow-400/30
      bg-yellow-400/10
      flex
      items-center
      justify-center
      text-xl
      hover:bg-yellow-400/20
      transition-all
      "
    >
      ▶
    </button>

    <span className="text-white/50 text-lg">
      Destiny
    </span>
  </div>

  <audio id="destiny-audio">
    <source src="/music/destiny.mp3" type="audio/mpeg" />
  </audio>
</div>

            {/* Quote */}
            <p className="mt-10 text-2xl lg:text-4xl italic text-cyan-300">
              "We stopped searching for opportunities and started creating them."
            </p>

            {/* Description */}
            <div className="mt-10 space-y-6">

              <p className="text-3xl font-semibold text-white">
                Humanity expands beyond Earth.
              </p>

              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                People no longer compete for jobs. Instead they create new worlds.
              </p>

              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Former students now help build intelligent civilizations across planets.
              </p>

            </div>

            {/* Feature Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">

              <button
                className="
                px-8 py-4
                rounded-2xl
                border border-white/10
                bg-white/5
                "
              >
                Mars Colonies
              </button>

              <button
                className="
                px-8 py-4
                rounded-2xl
                border border-white/10
                bg-white/5
                "
              >
                Planetary Cities
              </button>

              <button
                className="
                px-8 py-4
                rounded-2xl
                border border-white/10
                bg-white/5
                "
              >
                AI Governance
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}