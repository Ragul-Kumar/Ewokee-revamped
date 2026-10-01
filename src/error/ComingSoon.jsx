import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const ComingSoon = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 to-white">
      <div className="wrap relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <span className="eyebrow">In the works</span>
        <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight text-ink sm:text-7xl">
          Coming <span className="text-brand">soon</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted">
          We are working on something awesome! <br /> Stay tuned.
        </p>
        <Link to="/" className="btn btn-primary mt-9">
          <ArrowLeft className="size-4" /> Back to home
        </Link>
      </div>
    </section>
  );
};
