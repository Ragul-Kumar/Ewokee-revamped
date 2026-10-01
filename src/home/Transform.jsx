import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import banner from "../assets/transform.svg";
import customers from "../assets/Container.svg";

export default function Transform() {
  return (
    <section className="py-8 sm:py-12">
      <div className="wrap">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-brand-soft p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:p-14">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-[var(--shadow-card)]">
            <img src={banner} alt="A person stretching with arms raised" loading="lazy" className="aspect-[524/654] w-full object-cover" />
          </div>

          <div>
            <p className="font-display text-lg font-bold text-brand">
              Transform Your Mental Wellness Journey with
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              Personalized Therapies
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Welcome to Mend — experience therapy like never before! Connect with licensed therapists from
              the comfort of your own space. Our sessions are affordable, accessible, and completely
              anonymous, starting at just ₹299. Take the first step towards mental wellness today!
            </p>

            <ul className="mt-6 space-y-3">
              {["Licensed therapists", "Completely anonymous", "Starting at just ₹299"].map((x) => (
                <li key={x} className="flex items-center gap-3 font-semibold text-ink">
                  <span className="grid size-6 place-items-center rounded-full bg-brand text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link to="/quiz" className="btn btn-primary !px-7 !py-4 text-base">
                Book a session <ArrowRight className="size-5" />
              </Link>
              <div className="flex items-center gap-3">
                <img src={customers} alt="" className="h-10 w-auto" />
                <p className="text-sm text-muted">
                  <span className="font-display text-base font-extrabold text-ink">430+</span> Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
