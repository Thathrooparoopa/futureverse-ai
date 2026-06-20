export default function FinalBrand() {
  const tech = [
    "React",
    "Vite",
    "Framer Motion",
    "Tailwind CSS",
    "Gemini AI",
    "Lyria Music",
  ];

  return (
    <section className="bg-black text-white py-32 px-6 text-center">

      <h2 className="text-5xl md:text-6xl font-black">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {tech.map((item) => (
          <div
            key={item}
            className="
              px-8 py-4
              rounded-full
              border border-cyan-400/20
              bg-cyan-400/5
            "
          >
            {item}
          </div>
        ))}
      </div>

      <h1 className="mt-28 text-6xl md:text-8xl lg:text-9xl font-black">
        FUTUREVERSE AI
      </h1>

      <p className="mt-6 text-xl text-white/60">
        From Campus Chaos To Humanity's Future
      </p>

      <p className="mt-16 text-cyan-400 text-xl">
        Built with ❤️ by Team NovaVerse
      </p>

    </section>
  );
}