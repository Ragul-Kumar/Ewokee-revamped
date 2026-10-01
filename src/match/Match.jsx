import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Languages, Star } from "lucide-react";
import { getTherapist } from "../helper/localData";
import { useAnswersStore } from "../quiz/store";

function formatDate(date) {
  if (!date) return null;
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));
}

const Match = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("profile") || "Disha Pandit";
  const nav = useNavigate();

  const { answers } = useAnswersStore();
  const { data: profile } = useQuery({
    queryKey: ["therapist", name],
    queryFn: () => getTherapist(name),
    enabled: !!name,
  });

  const { preferredTime: time, duration, preferredDate: date } = answers;
  const price = duration === 60 ? profile?.cost?.[1] : profile?.cost?.[0];

  return (
    <section className="bg-gradient-to-b from-brand-soft/60 to-white">
      <div className="wrap max-w-2xl py-8 sm:py-14">
        <Link to="/question" className="inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-brand">
          <ArrowLeft className="size-4" /> Back
        </Link>

        <div className="mt-8 text-center">
          <span className="eyebrow">It’s a match</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-ink sm:text-5xl">
            Meet Your <span className="text-brand">Match</span>
          </h1>
          <p className="mt-3 text-lg text-muted">We’ve found a therapist that fits your preferences.</p>
        </div>

        <div className="card mt-10 overflow-hidden">
          <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:p-8">
            <img
              src={profile?.photourl}
              alt={profile?.name}
              className="size-36 shrink-0 rounded-[1.75rem] bg-brand-soft object-cover"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-display text-2xl font-extrabold text-ink">{profile?.name}</h2>
              <p className="mt-1 font-medium text-muted">{profile?.category}</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted sm:justify-start">
                <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
                  <Star className="size-4 fill-sun text-sun" /> {profile?.rating}
                  <span className="font-normal text-muted">({profile?.reviewcount} reviews)</span>
                </span>
                {profile?.language && (
                  <span className="inline-flex items-center gap-1.5">
                    <Languages className="size-4 text-brand" /> {profile.language.join(", ")}
                  </span>
                )}
              </div>
            </div>
          </div>

          <dl className="grid gap-px border-t border-line bg-line sm:grid-cols-3">
            {[
              { icon: CalendarDays, label: "Date", value: formatDate(date) ?? "—" },
              { icon: Clock, label: "Time", value: time || "—" },
              { icon: Clock, label: "Duration", value: `${duration} mins` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-canvas p-5">
                <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                  <Icon className="size-3.5" /> {label}
                </dt>
                <dd className="mt-1 font-display text-lg font-extrabold text-ink">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="font-display text-3xl font-extrabold text-ink">
              {price != null ? `₹${price}` : "—"}
              <span className="text-base font-medium text-muted"> / session</span>
            </p>
            <button
              type="button"
              onClick={() => nav(`/payment-status?profile=${encodeURIComponent(name)}`)}
              className="btn btn-coral !px-7 !py-4 text-base"
            >
              Book session <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-muted">
          Not the right fit?{" "}
          <Link to="/therapist" className="font-bold text-brand underline-offset-4 hover:underline">
            Browse other therapists
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Match;
