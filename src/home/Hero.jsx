import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import hero1 from "../assets/hero_1.svg";
import hero2 from "../assets/hero_2.svg";
import hero3 from "../assets/hero_3.svg";
import spark from "../assets/spark.svg";
import fly from "../assets/fly_o.svg";
import customers from "../assets/Container.svg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 via-white to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 size-[26rem] rounded-full bg-coral/10 blur-3xl"
      />

      <div className="wrap relative grid items-center gap-14 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-20">
        <div>
          <span className="eyebrow">
            <span className="size-2 rounded-full bg-mint" /> Online therapy, made human
          </span>
          <h1 className="mt-6 font-display text-[2.75rem] font-extrabold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            No Labels,
            <br />
            No Long Waitlists,
            <br />
            <span className="relative inline-block text-brand">
              No Pressure
              <svg
                aria-hidden="true"
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-coral"
              >
                <path d="M2 9C60 2 130 2 298 8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
            You don’t have to carry it all alone anymore.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/quiz" className="btn btn-primary !px-7 !py-4 text-base">
              Get started today <ArrowRight className="size-5" />
            </Link>
            <Link to="/therapist" className="btn btn-ghost !px-7 !py-4 text-base">
              Meet our therapists
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <img src={customers} alt="" className="h-11 w-auto" />
            <p className="text-sm text-muted">
              <span className="font-display text-lg font-extrabold text-ink">430+</span> Happy Customers
            </p>
          </div>
        </div>

        {/* Illustrated collage */}
        <div className="relative mx-auto aspect-[1/1.02] w-full max-w-[34rem]">
          <div className="absolute inset-[6%] rounded-[3rem] bg-gradient-to-br from-brand to-brand-deep" />
          <img
            src={hero3}
            alt=""
            className="absolute bottom-[4%] left-[14%] w-[46%] rounded-[2rem] border-4 border-white shadow-[var(--shadow-lift)]"
          />
          <img
            src={hero1}
            alt=""
            className="absolute left-[3%] top-[9%] w-[28%] -rotate-6 rounded-[1.5rem] border-4 border-white shadow-[var(--shadow-card)]"
          />
          <img
            src={hero2}
            alt=""
            className="absolute right-[4%] top-[20%] w-[36%] rotate-3 rounded-[1.75rem] border-4 border-white shadow-[var(--shadow-card)]"
          />

          <span className="absolute left-[34%] top-[2%] rounded-full bg-sun px-4 py-2 font-display text-sm font-extrabold text-ink shadow-lg">
            Brighter
          </span>
          <span className="absolute right-[0%] top-[8%] rounded-full bg-mint px-4 py-2 font-display text-sm font-extrabold text-white shadow-lg">
            Happier
          </span>
          <span className="absolute bottom-[26%] left-[0%] rounded-full bg-white px-4 py-2 font-display text-sm font-extrabold text-brand shadow-lg">
            Calm
          </span>

          <img src={fly} alt="" className="absolute right-[12%] bottom-[16%] w-[13%]" />
          <img src={spark} alt="" className="absolute -right-2 bottom-[2%] w-[16%] opacity-90" />
        </div>
      </div>
    </section>
  );
}
