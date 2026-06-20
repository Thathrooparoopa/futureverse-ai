function LyriaBadge({
  title,
  year,
}) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-3
        px-5
        py-3
        rounded-full
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
      "
    >
      <span>♫</span>

      <div>
        <p className="text-xs uppercase tracking-widest text-blue-400">
          Lyria Soundtrack
        </p>

        <p className="text-sm">
          {title} • {year}
        </p>
      </div>
    </div>
  );
}

export default LyriaBadge;