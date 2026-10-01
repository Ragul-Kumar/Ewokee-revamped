import { CalendarClock, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Confidential",
    body: "Your privacy is our priority with end-to-end encryption.",
    tone: "bg-brand-soft text-brand",
  },
  {
    icon: Users,
    title: "Choose Your Space",
    body: "Individual, couple, or family sessions designed for your unique journey.",
    tone: "bg-coral-soft text-coral",
  },
  {
    icon: HeartHandshake,
    title: "Matched Therapists",
    body: "Get paired with therapists who understand your unique needs.",
    tone: "bg-mint-soft text-teal-700",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    body: "Book sessions that fit your lifestyle and schedule.",
    tone: "bg-sun-soft text-amber-600",
  },
];

export default function WhyMend() {
  return (
    <section className="bg-canvas py-20 sm:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="Why us"
          title="Why Choose"
          accent="Mend"
          sub="Healing happens when you’re seen, heard, and held"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body, tone }) => (
            <div
              key={title}
              className="card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className={`grid size-14 place-items-center rounded-2xl ${tone}`}>
                <Icon className="size-7" />
              </span>
              <h3 className="mt-6 font-display text-xl font-extrabold text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
