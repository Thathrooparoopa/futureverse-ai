
if (!started) {
  return (
    <div
      className="
      h-screen
      bg-black
      text-white
      flex
      flex-col
      items-center
      justify-center
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        w-[800px]
        h-[800px]
        rounded-full
        bg-cyan-500/10
        blur-[180px]
        "
      />

      {/* YEAR */}
      <div
        className="
        mb-8
        text-xs
        tracking-[8px]
        uppercase
        text-cyan-200
        "
      >
        YEAR 2026
      </div>

      {/* Title */}
      <h1
        className="
        text-center
        text-[5rem]
        md:text-[9rem]
        font-black
        leading-none
        tracking-[-0.05em]
        bg-gradient-to-b
        from-white
        via-gray-200
        to-gray-500
        bg-clip-text
        text-transparent
        "
      >
        FUTUREVERSE AI
      </h1>

      {/* Description */}
      <p
        className="
        mt-8
        text-center
        max-w-3xl
        text-gray-300
        text-xl
        "
      >
        Humanity stands at the threshold of a new era.
      </p>

      <p
        className="
        mt-4
        text-center
        max-w-3xl
        text-gray-500
        leading-relaxed
        "
      >
        Over the next century, artificial intelligence
        will transform civilization, work, healthcare,
        exploration, and the future of our species.
      </p>

      {/* Documentary Start */}
      <button
        onClick={() => setStarted(true)}
        className="
        mt-16
        text-cyan-200
        tracking-[4px]
        uppercase
        hover:text-white
        transition
        "
      >
        Begin The Documentary ↓
      </button>
    </div>
  );
}

