import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import TherapistCard from "../ui/TherapistCard";
import { getTherapists } from "../helper/localData";

export default function Therapists() {
  const { data: therapists = [] } = useQuery({
    queryKey: ["therapists_home"],
    queryFn: getTherapists,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return (
    <section className="relative overflow-hidden bg-brand-deep py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-0 size-96 rounded-full bg-brand/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-coral/20 blur-3xl" />

      <div className="wrap relative">
        <SectionHeading
          light
          eyebrow="Your people"
          title="Meet Our"
          accent="Therapists"
          sub="Our licensed professionals are here to support you on your mental health journey"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {therapists.map((t) => (
            <TherapistCard key={t.name} t={t} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/therapist" className="btn bg-white text-brand-deep hover:bg-brand-soft">
            See all therapists <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
