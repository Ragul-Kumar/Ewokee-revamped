import { Link } from "react-router-dom";
import mark from "../assets/logo.svg";

export default function Logo({ light = false, className = "" }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Mend home">
      <img src={mark} alt="" className="size-9" />
      <span
        className={`font-display text-2xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Mend
      </span>
    </Link>
  );
}
