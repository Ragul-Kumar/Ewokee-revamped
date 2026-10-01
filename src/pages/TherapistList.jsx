import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getTherapists } from "../helper/localData";
import TherapistCard from "../ui/TherapistCard";
import SectionHeading from "../ui/SectionHeading";

const TherapistList = () => {
  const { data: therapists = [], isLoading } = useQuery({
    queryKey: ["therapists"],
    queryFn: getTherapists,
  });

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 to-white pb-6 pt-14 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="wrap relative">
          <SectionHeading
            eyebrow="Our team"
            title="Meet Your"
            accent="Therapists"
            sub="Licensed professionals with different specialities and styles, all here to listen without judgment and guide you at your own pace."
          />
        </div>
      </section>

      <section className="pb-8 pt-10">
        <div className="wrap">
          {isLoading ? (
            <p className="text-center text-muted">Loading therapists…</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {therapists.map((t) => (
                <TherapistCard key={t.name} t={t} />
              ))}
            </div>
          )}

          <div className="mt-20 overflow-hidden rounded-[2.5rem] bg-brand-deep px-8 py-12 text-center text-white sm:px-14">
            <h2 className="font-display text-2xl font-extrabold sm:text-4xl">Ready to make an impact?</h2>
            <p className="mx-auto mt-3 max-w-md text-white/70">Write us on careers@mend.example</p>
            <a href="mailto:careers@mend.example" className="btn btn-coral mt-7">
              Join the team <ArrowRight className="size-4" />
            </a>
          </div>

          <p className="mt-10 text-center text-muted">
            Not sure who to pick?{" "}
            <Link to="/quiz" className="font-bold text-brand underline-offset-4 hover:underline">
              Take the quiz and we’ll match you
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default TherapistList;
