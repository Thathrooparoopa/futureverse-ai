import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Year2035() {
  const sectionRef = useRef(null);
  const posterRef = useRef(null);
  const textRef = useRef(null);
  const audioRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useGSAP(() => {
    gsap.from(posterRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
    });

    gsap.from(textRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
    });

    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.from(descRef.current, {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.4,
    });

    gsap.to(posterRef.current, {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black text-white flex items-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/2035.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.08),transparent_70%)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#60A5FA]/10 blur-[220px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-24">
        
        {/* Timeline */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <p className="uppercase tracking-[0.5em] text-white/50 text-sm">
            ERA ONE
          </p>

          <div className="w-px h-[180px] bg-white/20 mt-4"></div>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">

          {/* Poster */}
          <div
            ref={posterRef}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="/posters/2035.png"
              alt="2035"
              className="
                w-full
                max-w-[500px]
                rounded-[28px]
                border
                border-white/10
                shadow-[0_0_80px_rgba(96,165,250,0.18)]
              "
            />
          </div>

          {/* Content */}
          <div
            ref={textRef}
            className="max-w-[700px]"
          >
            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-sm md:text-base lg:text-lg text-gray-400 uppercase tracking-[0.3em] mb-4"
            >
              YEAR 2035
            </p>

            {/* Title */}
            <h1
              ref={titleRef}
              className="
                text-7xl
                md:text-8xl
                lg:text-8xl
                font-bold
                tracking-tight
                leading-none
              "
            >
              AI Becomes
              <br />
              Humanity's Co-Pilot
            </h1>

            {/* Description */}
            <p
              ref={descRef}
              className="
                mt-8
                max-w-3xl
                text-lg
                lg:text-xl
                leading-relaxed
                text-gray-400
              "
            >
              The first challenge humanity solved was learning overload.
              <br />
              <br />
              Artificial intelligence evolves into a trusted academic
              companion. Students no longer struggle alone. Personalized
              AI mentors guide learning, explain difficult concepts,
              and accelerate creativity.
              <br />
              <br />
              <span className="italic text-[#60A5FA]">
                "Every student gained access to a mentor that never slept."
              </span>
            </p>
<audio
  ref={audioRef}
  src="/music/hope.mp3"
/>


            {/* Soundtrack Card */}
            <div
              className="
                mt-10
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                max-w-md
              "
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#60A5FA]">
                🎵 Lyria Track: Hope
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                Learning Companion
              </h4>

              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={toggleAudio}
                  className="
                    px-5
                    py-2
                    rounded-full
                    border
                    border-white/10
                    hover:border-[#60A5FA]
                    transition
                  "
                >
                  {isPlaying ? "⏸ Pause" : "▶ Play"}
                </button>

                <div className="flex gap-1">
                  {isPlaying && (
                    <>
                      <span className="w-[3px] h-5 bg-[#60A5FA] animate-pulse rounded-full"></span>
                      <span className="w-[3px] h-7 bg-[#60A5FA] animate-pulse rounded-full"></span>
                      <span className="w-[3px] h-4 bg-[#60A5FA] animate-pulse rounded-full"></span>
                      <span className="w-[3px] h-6 bg-[#60A5FA] animate-pulse rounded-full"></span>
                    </>
                  )}
                </div>

                <span className="text-white/50">
                  Hope
                </span>
              </div>
            </div>

            {/* Button */}
            <div ref={buttonRef}>
              <button
                className="
                  mt-10
                  px-8
                  py-4
                  rounded-full
                  border
                  border-blue-400/30
                  bg-white/5
                  backdrop-blur-md
                  text-white
                  font-semibold
                  tracking-wider
                  transition-all
                  duration-300
                  hover:bg-blue-500/20
                  hover:border-blue-400
                "
              >
                AI Learning Guides
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}