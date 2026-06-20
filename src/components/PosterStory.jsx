function PosterStory({
  year,
  title,
  description,
  quote,
  image,
  reverse = false,
  children,
}) {
  return (
    <div
      className={`
        grid
        lg:grid-cols-2
        gap-16
        items-center
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      <div>
        <img
          src={image}
          alt={title}
          className="
            w-full
            rounded-3xl
            shadow-2xl
          "
        />
      </div>

      <div className="space-y-6">
        <p className="tracking-[0.3em] text-blue-400 uppercase text-sm">
          {year}
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-none">
          {title}
        </h2>

        <p className="text-zinc-300 leading-relaxed text-lg">
          {description}
        </p>

        {quote && (
          <blockquote className="border-l-2 border-blue-400 pl-6 text-blue-300 italic">
            {quote}
          </blockquote>
        )}

        {children}
      </div>
    </div>
  );
}

export default PosterStory;