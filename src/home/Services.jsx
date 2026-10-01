import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import card1 from "../assets/mob_card_1.svg";
import card2 from "../assets/mob_card_2.svg";
import card3 from "../assets/mob_card_3.svg";
import card4 from "../assets/mob_card_4.svg";

const services = [
  { title: "Individual Therapy", img: card1 },
  { title: "Couple Therapy", img: card2 },
  { title: "Elderly Support", img: card3 },
  { title: "Family Therapy", img: card4 },
];

export default function Services() {
  return (
    <section className="py-20 sm:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="What we offer"
          title="Our"
          accent="Services"
          sub="Choose from our range of therapy options designed to fit your comfort and needs"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/quiz"
              className="group relative block overflow-hidden rounded-[1.75rem] bg-brand-soft shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
              aria-label={`${s.title} - start the quiz`}
            >
              <img src={s.img} alt="" className="aspect-[528/750] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-white text-brand shadow-lg transition-transform group-hover:rotate-45">
                <ArrowUpRight className="size-5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
