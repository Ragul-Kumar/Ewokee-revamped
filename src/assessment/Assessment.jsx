import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Stress from "./Stress";

const Assessment = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 to-white pb-20 pt-8">
      <div className="wrap relative">
        <Link to="/resource" className="inline-flex items-center gap-1.5 text-sm font-bold text-muted hover:text-brand">
          <ChevronLeft className="size-4" /> Back to resources
        </Link>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
            Mental Health <span className="text-brand">Assessment</span>
          </h1>
          <p className="mt-4 text-lg text-muted">Self-care begins with self-understanding</p>
        </div>

        <div className="mt-12">
          <Stress />
        </div>
      </div>
    </section>
  );
};

export default Assessment;
