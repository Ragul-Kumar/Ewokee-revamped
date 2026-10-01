export default function SectionHeading({
  eyebrow,
  title,
  accent,
  sub,
  align = "center",
  light = false,
  className = "",
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? "!bg-white/10 !text-white" : ""}`}>{eyebrow}</span>
      )}
      <h2
        className={`mt-4 font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className={light ? "text-coral" : "text-brand"}>{accent}</span>
          </>
        )}
      </h2>
      {sub && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/70" : "text-muted"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
