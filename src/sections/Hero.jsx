import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import LyriaBadge from "../components/LyriaBadge";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    })
      .from(
        subtitleRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        descRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        buttonRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">

          {/* Competition Badge */}
          <p
            className="mb-6 text-[10px] sm:text-xs md:text-sm tracking-[0.35em] uppercase text-white/50"
          >
            Gemini Webverse Challenge 2026
          </p>

          {/* Headline */}
          <h1
            ref={titleRef}
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-bold
              tracking-tight
              leading-none
            "
          >
            FUTUREVERSE
            <br />
            AI
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="
              mt-6
              text-xl
              sm:text-2xl
              lg:text-3xl
              text-gray-300
            "
          >
            From Campus Chaos
            <br />
            To Humanity's Future
          </p>

          {/* Description */}
          <p
            ref={descRef}
            className="
              mt-8
              max-w-4xl
              mx-auto
              text-base
              sm:text-lg
              lg:text-xl
              leading-relaxed
              text-gray-300
            "
          >
            An Interactive AI Documentary About How Student Problems
            Inspired The Next Century Of Innovation.
          </p>

          {/* CTA */}
          <div ref={buttonRef}>
            <button
              className="
                mt-10
                px-8
                py-4
                rounded-full
                border
                border-cyan-400/30
                bg-white/5
                backdrop-blur-md
                text-white
                font-semibold
                tracking-wider
                transition-all
                duration-300
                hover:bg-cyan-500/20
                hover:border-cyan-400
              "
            >
              Begin The Journey →
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex flex-col items-center gap-3">
            <p className="text-xs tracking-[0.4em] uppercase text-white/40">
              Scroll To Begin
            </p>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-10 w-[1px] bg-white/40"
            />
          </div>

        </div>
      </div>
    </section>
  );
}