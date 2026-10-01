import { Link } from "react-router-dom";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

const cols = [
  {
    title: "Explore",
    items: [
      ["Home", "/"],
      ["About", "/about"],
      ["Services", "/services"],
      ["Therapists", "/therapist"],
    ],
  },
  {
    title: "Learn",
    items: [
      ["Resources", "/resource"],
      ["Training", "/training"],
      ["Assessment", "/resource/assessment"],
      ["Privacy policy", "/privacy"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-brand-deep text-white">
      <div className="wrap py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              No labels, no long waitlists, no pressure. You don’t have to carry
              it all alone anymore.
            </p>
            <Link to="/quiz" className="btn btn-coral mt-7">
              Take the quiz
            </Link>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/50">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {c.items.map(([label, to]) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-[15px] font-medium text-white/85 transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/50">
              Say hello
            </h3>
            <ul className="mt-5 space-y-4 text-[15px] text-white/85">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-coral" />
                hello@mend.example
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-coral" />
                +91 92119 05688
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-coral" />
                Noida, Uttar Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>© 2025 Mend. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-semibold text-white/85 transition-colors hover:bg-white/10"
          >
            Back to top <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
