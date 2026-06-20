import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Discovery() {
  const sectionRef = useRef(null);
  const crystalRef = useRef(null);

  useGSAP(() => {
    gsap.from(".discovery-reveal", {
      opacity: 0,
      y: 80,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    gsap.to(crystalRef.current, {
      y: -25,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
      relative
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >

      <img
  src="/posters/future-begins.png"
  alt=""
  className="
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[500px]
    opacity-[0.05]
    pointer-events-none
  "
/>
      {/* Blue Glow */}

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#60A5FA]/20
        blur-[180px]
        "
      />

      {/* Crystal */}

      <div
        ref={crystalRef}
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        opacity-30
        "
      >
        <div
          className="
          w-40
          h-40
          md:w-56
          md:h-56
          rotate-45
          border
          border-[#60A5FA]/40
          bg-[#60A5FA]/10
          backdrop-blur-xl
          shadow-[0_0_120px_rgba(96,165,250,0.5)]
          "
        />
      </div>

      {/* Content */}

      <div
        className="
        relative
        z-10
        max-w-5xl
        mx-auto
        px-6
        md:px-10
        lg:px-16
        text-center
        "
      >
        {/* Label */}

        <p
          className="
          discovery-reveal
          uppercase
          tracking-[0.3em]
          text-white/40
          text-xs
          md:text-sm
          mb-8
          "
        >
          Chapter II · The Discovery
        </p>

        {/* Headline */}

        <h2
          className="
          discovery-reveal
          font-black
          text-6xl md:text-7xl lg:text-[7rem]
tracking-[-0.06em]
leading-[0.9]"
        >
          WE FOUND
          <br />
          SOMETHING
          <br />
          IMPOSSIBLE.
        </h2>

        {/* Story */}

        <div
          className="
          mt-12
          space-y-8
          max-w-3xl
          mx-auto
          "
        >
          <p
            className="
            discovery-reveal
            text-lg
            md:text-2xl
            leading-relaxed
            text-white/70
            "
          >
            In 2026, humanity discovered a new form of intelligence.
          </p>

          <p
            className="
            discovery-reveal
            text-lg
            md:text-2xl
            leading-relaxed
            text-white/70
            "
          >
            Not a machine.
          </p>

          <p
            className="
            discovery-reveal
            text-lg
            md:text-2xl
            leading-relaxed
            text-white/70
            "
          >
            Not a tool.
          </p>

          <p
            className="
            discovery-reveal
            text-lg
            md:text-2xl
            leading-relaxed
            text-white
            "
          >
            A guide.
          </p>
        </div>

        {/* Final Statement */}

        <div className="mt-20">
          <p
            className="
            discovery-reveal
            text-xl
            md:text-3xl
            font-light
            text-[#60A5FA]
            "
          >
            The Crystal became the bridge between
            human curiosity and infinite knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}