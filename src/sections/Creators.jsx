import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Creators() {
  return (
    <section className="bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 tracking-[0.45em] text-center uppercase text-sm">
          Meet The Creators
        </p>

        <h2 className="text-center text-5xl md:text-7xl lg:text-8xl font-black mt-6">
          Built By Students
        </h2>

        <p className="text-center text-white/60 max-w-5xl mx-auto mt-8 text-lg leading-relaxed">
          FutureVerse AI is an interactive documentary experience exploring how
          student challenges such as assignment overload, connectivity issues,
          placement stress, and academic pressure inspire the next century of
          innovation.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {/* Susmitha */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10 hover:border-cyan-400/30 transition-all">

            <p className="text-cyan-400 tracking-[0.35em] uppercase text-sm">
              Developer
            </p>

            <h3 className="mt-6 text-4xl md:text-5xl font-black">
              Susmitha
            </h3>

            <p className="mt-3 text-white/60 text-xl">
              Full Stack Developer
            </p>

            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/Susmithachitham"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-white hover:text-cyan-400 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/Susmithachitham"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-white hover:text-cyan-400 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Thathroopa */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10 hover:border-cyan-400/30 transition-all">

            <p className="text-cyan-400 tracking-[0.35em] uppercase text-sm">
              Developer
            </p>

            <h3 className="mt-6 text-4xl md:text-5xl font-black">
              Thathroopa
            </h3>

            <p className="mt-3 text-white/60 text-xl">
              Full Stack Developer
            </p>

            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/Thathrooparoopa"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-white hover:text-cyan-400 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/thathroopa"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-white hover:text-cyan-400 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}