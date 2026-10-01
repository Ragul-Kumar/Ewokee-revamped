import { Link } from "react-router-dom";
import { ArrowUpRight, Languages, Star } from "lucide-react";

export default function TherapistCard({ t }) {
  const profile = `/therapist/about-therapist?profile=${encodeURIComponent(t.name)}`;
  return (
    <article className="group card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <Link to={profile} className="block overflow-hidden bg-brand-soft">
        <img
          src={t.photourl}
          alt={t.name}
          loading="lazy"
          className="aspect-[4/4.2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-extrabold text-ink">{t.name}</h3>
            <p className="mt-0.5 text-sm font-medium text-muted">{t.category}</p>
          </div>
          {t.rating != null && (
            <span className="inline-flex items-center gap-1 rounded-full bg-sun-soft px-2.5 py-1 text-sm font-bold text-ink">
              <Star className="size-3.5 fill-sun text-sun" />
              {t.rating}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          {t.language && (
            <span className="inline-flex items-center gap-1.5">
              <Languages className="size-4 text-brand" />
              {t.language.join(", ")}
            </span>
          )}
          {t.reviewcount != null && <span>{t.reviewcount} reviews</span>}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">Starting at</p>
            <p className="font-display text-2xl font-extrabold text-ink">
              ₹{t.cost?.[0]}
              <span className="text-sm font-medium text-muted"> /30 min</span>
            </p>
          </div>
          <Link to={profile} className="btn btn-primary !px-4 !py-3">
            View profile <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
