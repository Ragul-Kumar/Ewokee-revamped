import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, Languages, Sparkles, Star } from "lucide-react";
import bg from "../assets/bg_therapist.svg";
import Review from "./Review";
import Book from "../quiz/Book";
import { getTherapist } from "../helper/localData";

const About_Therapist = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("profile");

  const { data: profile, isLoading } = useQuery({
    queryKey: ["therapist", name],
    queryFn: async () => {
      if (!name) return null;
      return getTherapist(name);
    },
    enabled: !!name,
  });

  if (!isLoading && !profile) {
    return (
      <section className="wrap py-28 text-center">
        <h1 className="font-display text-4xl font-extrabold">Therapist not found</h1>
        <p className="mt-3 text-muted">We couldn’t find that profile.</p>
        <Link to="/therapist" className="btn btn-primary mt-8">
          Browse therapists
        </Link>
      </section>
    );
  }

  return (
    <>
      <div className="relative h-48 overflow-hidden bg-brand-deep sm:h-64 lg:h-72">
        <img src={bg} alt="" className="size-full object-cover" />
        <div className="wrap absolute inset-x-0 top-5">
          <Link
            to="/therapist"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-ink backdrop-blur hover:bg-white"
          >
            <ChevronLeft className="size-4" /> All therapists
          </Link>
        </div>
      </div>

      <div className="wrap">
        <div className="relative z-10 -mt-16 flex flex-col gap-5 sm:-mt-20 sm:flex-row sm:items-start">
          <img
            src={profile?.photourl}
            alt={profile?.name}
            className="size-32 rounded-[2rem] border-4 border-white bg-brand-soft object-cover shadow-[var(--shadow-card)] sm:size-44"
          />
          <div className="pb-2 sm:pt-24">
            <h1 className="font-display text-3xl font-extrabold text-ink sm:text-5xl">{profile?.name}</h1>
            <p className="mt-1 text-lg font-medium text-muted">{profile?.category}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
              <Star className="size-4 fill-sun text-sun" /> {profile?.rating ?? 4.9}
              <span className="font-normal text-muted">({profile?.reviewcount ?? 127} reviews)</span>
            </p>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0 space-y-10">
            <section>
              <p className="text-lg leading-relaxed text-ink">{profile?.profile?.objective}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-extrabold text-ink">Approach to care</h2>
              <p className="mt-3 leading-relaxed text-muted">{profile?.profile?.approach}</p>
            </section>

            <section>
              <h2 className="flex items-center gap-3 font-display text-2xl font-extrabold text-ink">
                <span className="grid size-10 place-items-center rounded-xl bg-coral-soft text-coral">
                  <Sparkles className="size-5" />
                </span>
                Concerns my clients have
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {profile?.profile?.concern?.map((c) => (
                  <li key={c} className="rounded-full bg-coral-soft px-4 py-2 text-sm font-semibold text-coral">
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="flex items-center gap-3 font-display text-2xl font-extrabold text-ink">
                <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Sparkles className="size-5" />
                </span>
                I offer help in
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {profile?.profile?.help?.map((h) => (
                  <li key={h} className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand">
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="flex items-center gap-3 font-display text-2xl font-extrabold text-ink">
                <span className="grid size-10 place-items-center rounded-xl bg-mint-soft text-teal-700">
                  <Languages className="size-5" />
                </span>
                Languages I speak
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {(profile?.language ?? ["English", "Hindi"]).map((l) => (
                  <li key={l} className="rounded-full bg-mint-soft px-4 py-2 text-sm font-semibold text-teal-700">
                    {l}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-extrabold text-ink">Reviews</h2>
              <Review />
            </section>
          </div>

          <Book cost={profile?.cost} name={name ?? ""} />
        </div>
      </div>
    </>
  );
};

export default About_Therapist;
