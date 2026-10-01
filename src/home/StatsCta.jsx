import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import spark from "../assets/spark.svg";

const stats = [
  { label: "Therapist Onboard", value: "192" },
  { label: "Total Hours", value: "25,600+" },
];

export default function StatsCta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="By the numbers"
          title="Real facts &"
          accent="Numbers"
          sub="We started with one reason: you"
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`rounded-[2rem] p-8 ${i === 0 ? "bg-brand-soft" : "bg-coral-soft"}`}
            >
              <p className={`font-display text-5xl font-extrabold sm:text-6xl ${i === 0 ? "text-brand" : "text-coral"}`}>
                {s.value}
              </p>
              <p className="mt-2 text-lg font-semibold text-ink">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand via-brand to-brand-deep px-8 py-14 text-white sm:px-14 sm:py-16">
          <img src={spark} alt="" aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 w-72 opacity-30" />
          <div className="relative max-w-xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-white/80">Let’s open up to the things that matter the most</p>
            <Link to="/quiz" className="btn btn-coral mt-8 !px-7 !py-4 text-base">
              Book now <CalendarDays className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
