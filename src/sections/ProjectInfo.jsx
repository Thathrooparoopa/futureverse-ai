export default function ProjectInfo() {
  return (
    <section className="bg-black text-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 tracking-[0.45em] uppercase text-center text-sm">
          Project Details
        </p>

        <h2 className="mt-6 text-center text-5xl md:text-7xl lg:text-8xl font-black">
          Behind FutureVerse AI
        </h2>

        <div
          className="
          mt-20
          rounded-[40px]
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-10 md:p-16
          "
        >

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <p className="text-white/40 uppercase tracking-[0.25em] text-sm">
                Team Name
              </p>

              <h3 className="mt-4 text-3xl md:text-4xl font-bold">
                NovaVerse
              </h3>
            </div>

            <div>
              <p className="text-white/40 uppercase tracking-[0.25em] text-sm">
                Project
              </p>

              <h3 className="mt-4 text-3xl md:text-4xl font-bold">
                FutureVerse AI
              </h3>
            </div>

            <div>
              <p className="text-white/40 uppercase tracking-[0.25em] text-sm">
                College
              </p>

              <h3 className="mt-4 text-3xl md:text-4xl font-bold">
                Saranathan College Of Engineering
              </h3>
            </div>

            <div>
              <p className="text-white/40 uppercase tracking-[0.25em] text-sm">
                Competition
              </p>

              <h3 className="mt-4 text-3xl md:text-4xl font-bold">
                Gemini WebVerse Challenge 2026
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}