// src/pages/FrontPage.jsx
import { Link, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { ArrowLeft, ArrowRight, Clock, Lock, Sparkles } from "lucide-react";
import front_pic from "../assets/front_pic.svg";

export default function FrontPage() {
  const navigate = useNavigate();

  const trackQuizStart = (entryPoint) => {
    // Google Analytics event
    ReactGA.event("quiz_started", {
      quiz_name: "Assessment Quiz",
      entry_point: entryPoint,
    });

    // Facebook Pixel event
    if (window.fbq) {
      window.fbq("trackCustom", "quiz_started", {
        quiz_name: "Assessment Quiz",
        entry_point: entryPoint,
      });
    }

    // Navigate to quiz
    navigate("/question");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 to-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="wrap relative py-10 sm:py-16">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-bold text-muted hover:text-brand">
          <ArrowLeft className="size-4" /> Back to home
        </Link>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">
              <Sparkles className="size-3.5" /> Takes about 2 minutes
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
              Let’s Find Your <span className="text-brand">Therapist</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              We’ll ask you simple questions to find your perfect therapist match.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink">
              <li className="inline-flex items-center gap-2">
                <Clock className="size-4 text-brand" /> Quick and simple
              </li>
              <li className="inline-flex items-center gap-2">
                <Lock className="size-4 text-brand" /> Private and anonymous
              </li>
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => trackQuizStart("Lets Begin button")}
                className="btn btn-primary !px-8 !py-4 text-base"
              >
                Let’s Begin <ArrowRight className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => trackQuizStart("Browse Therapists Manually")}
                className="btn btn-ghost !px-8 !py-4 text-base"
              >
                Browse Therapists Manually
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-[var(--shadow-lift)]">
            <img src={front_pic} alt="Two people talking on a sofa" className="aspect-[572/481] w-full rounded-[2rem] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
