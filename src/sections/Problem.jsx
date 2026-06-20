import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const lines = gsap.utils.toArray(".problem-line");

    lines.forEach((line, index) => {
      gsap.from(line, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: line,
          start: "top 85%",
        },
      });
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
  overflow-hidden
  "
>
        {/* Background Image */}
<div
  className="
  absolute
  inset-0
  bg-cover
  bg-center
  opacity-[0.45]
  "
style={{
  backgroundImage: "url('/posters/future-begins.png')",
}}

/>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/80" />

{/* Radial Glow */}
<div
  className="
  absolute
  top-1/2
  left-1/2
  -translate-x-1/2
  -translate-y-1/2
  w-[900px]
  h-[900px]
  bg-blue-500/10
  blur-[200px]
  rounded-full
  "
/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-32">
        
        <p
  className="
  problem-line
  uppercase
  tracking-[0.35em]
  text-white/35
  text-xs
  md:text-sm
  mb-8
  "
>
  CHAPTER I · THE PRESENT
</p>
        
        
<h2
  className="
  problem-line
  text-5xl
  md:text-7xl
  lg:text-[7rem]
  font-black
  leading-[0.88]
  tracking-[-0.06em]
  max-w-5xl
  "
>
  WE WERE
  <br />
  OVERWHELMED
</h2>
     <div className="mt-10 max-w-3xl space-y-5"></div>   
 
<p className="problem-line text-2xl lg:text-3xl text-white/90">
  Assignments multiplied.
</p>

<p className="problem-line text-2xl lg:text-3xl text-white/70">
  Information never stopped.
</p>

<p className="problem-line text-2xl lg:text-3xl text-white/50">
  Attention became the world's most valuable resource.
</p>

<p
  className="
  problem-line
  text-3xl
  lg:text-4xl
  font-medium
  text-blue-400
  leading-relaxed
  "
>
  Knowledge was everywhere.
  <br />
  Yet clarity was nowhere.
</p>


<div className="relative mt-20 border-t border-white/10 pt-16">

  {/* Blue Glow */}
  <div
    className="
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    h-[300px]
    w-[300px]
    bg-blue-500/10
    blur-[120px]
    pointer-events-none
    "
  />

  <p
    className="
    problem-line
    text-lg
    lg:text-xl
    uppercase
    tracking-[0.25em]
    text-white/30
    relative
    z-10
    "
  >
    We built machines to help us think
  </p>

<h3
  className="
  problem-line
  mt-8
  text-4xl
  md:text-6xl
  lg:text-[5.5rem]
  font-black
  tracking-[-0.05em]
  leading-[0.9]
  relative
  z-10
  "
>
  Then
  <br />
  Everything
  <br />
  Changed.
</h3>

</div>

      </div>
    </section>
  );
}