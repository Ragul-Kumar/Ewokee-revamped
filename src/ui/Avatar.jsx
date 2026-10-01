const tones = [
  "bg-brand-soft text-brand",
  "bg-coral-soft text-coral",
  "bg-mint-soft text-teal-700",
  "bg-sun-soft text-amber-600",
];

export default function Avatar({ name = "", size = "size-12", i = 0 }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("");
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full font-display font-extrabold ${size} ${tones[i % tones.length]}`}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
