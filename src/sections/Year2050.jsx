import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Year2050() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".y2050-reveal", {
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
          <source src="/videos/2050.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Blue Glow */}
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
        bg-[#60A5FA]/10
        blur-[250px]
        "
      />

      {/* Content */}
      <div
        className="
        relative
        z-10
        min-h-screen
        flex
        flex-col
        px-6
        pt-20
        pb-32
        justify-center
        "
      >

        {/* Timeline */}
        <div className="y2050-reveal text-center mb-16">
          <p className="uppercase tracking-[0.45em] text-white/40 text-xs">
            ERA TWO
          </p>

          <div className="w-px h-28 bg-gradient-to-b from-[#60A5FA] to-transparent mx-auto mt-6" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* LEFT SIDE → CONTENT */}
          <div className="y2050-reveal order-2 lg:order-1 text-left">

            <p className="uppercase tracking-[0.35em] text-[#60A5FA] text-sm">
              YEAR 2050
            </p>

            <h3 className="mt-6 text-5xl lg:text-7xl font-black leading-none text-[#60A5FA]">
              The End Of Digital
              <br />
              Friction
            </h3>
    

    {/* Music Card */}
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
  <p className="text-xs uppercase tracking-[0.35em] text-[#60A5FA]">
    LYRIA SOUNDTRACK
  </p>

  <h4 className="mt-3 text-3xl font-bold text-white">
    Innovation
  </h4>

  <div className="mt-6 flex items-center justify-between">
    <button
      onClick={() => {
        const audio = document.getElementById("innovation-audio");

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
      border-[#60A5FA]/30
      bg-[#60A5FA]/10
      flex
      items-center
      justify-center
      text-xl
      hover:bg-[#60A5FA]/20
      transition-all
      "
    >
      ▶
    </button>

    <span className="text-white/50 text-lg">
      Innovation
    </span>
  </div>

  <audio id="innovation-audio">
  <source src="/music/innovation.mp3" type="audio/mpeg" />
</audio>

</div>
            {/* Quote */}
            <p className="mt-10 text-2xl lg:text-4xl italic text-cyan-300">
              "Knowledge flows as freely as air."
            </p>

            {/* Description */}
            <div className="mt-10 space-y-6">

              <p className="text-3xl font-semibold text-white">
                Connectivity becomes invisible.
              </p>

              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                AI manages communication, infrastructure, and information flow.
                The WiFi problem that once frustrated students disappears
                completely.
              </p>

              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Knowledge becomes instantly accessible everywhere.
              </p>

            </div>

            {/* Feature Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                Smart Infrastructure
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                Global Connectivity
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                AI Networks
              </button>
            </div>

          </div>

          {/* RIGHT SIDE → POSTER */}
          <div
            className="
            y2050-reveal
            order-1
            lg:order-2
            flex
            justify-center
            "
          >
            <img
              src="/posters/2050.png"
              alt="The End Of Digital Friction"
              className="
              w-full
              max-w-[550px]
              rounded-[28px]
              border
              border-white/10
              shadow-[0_0_80px_rgba(96,165,250,0.18)]
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
}