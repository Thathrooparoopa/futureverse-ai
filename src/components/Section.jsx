function Section({ children, className = "" }) {
  return (
    <section
      className={`
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        md:px-10
        lg:px-16
        py-24
        ${className}
      `}
    >
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export default Section;