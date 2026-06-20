export default function FutureTerminal() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[0.45em] text-cyan-400 text-sm">
          FUTURE TRANSMISSION TERMINAL
        </p>

        <h2 className="mt-8 text-5xl lg:text-8xl font-black">
          Talk To The Future
        </h2>

        <p className="mt-8 text-xl text-white/60">
          Describe a student problem. FutureVerse AI will scan the timeline and reveal how humanity solves it.
        </p>

        <div className="mt-20 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-16">

          <h3 className="text-3xl text-white/50 mb-10">
            Try asking:
          </h3>

          <div className="space-y-8 text-white/60 text-2xl">

            <p>📚 I have assignment overload.</p>

            <p>📶 Campus WiFi is always failing.</p>

            <p>💼 I am worried about placements.</p>

            <p>⚠️ Academic pressure is overwhelming.</p>

          </div>

        </div>

      </div>
    </section>
  );
}