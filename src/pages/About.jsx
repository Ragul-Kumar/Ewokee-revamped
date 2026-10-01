import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Support from "../home/Support";
import about1 from "../assets/about_desk_1.svg";
import about2 from "../assets/about_desk_2.svg";
import about3 from "../assets/about_desk_3.svg";

const sections = [
  {
    title: "To Bridge the Gap",
    img: about1,
    tone: "bg-brand-soft",
    date: "July 1, 2025",
    body: (
      <>
        To bridge the gap between the moment you think “I need to talk to someone” and actually finding
        that someone — with ease, warmth, and zero judgment. Whether you want to just talk, vent, or make
        sense of what you’re feeling — even when you don’t know how to put it into words — we’re here.
        Instantly accessible, deeply human, and gently affordable.{" "}
        <strong className="text-ink">No long waitlists. No pressure. No labels.</strong>
      </>
    ),
  },
  {
    title: "Connect With Us",
    img: about2,
    tone: "bg-coral-soft",
    date: "March 10, 2023",
    body: (
      <>
        You can connect through audio or video calls, wherever you are in the world. And if you’d like to
        meet in person, our <strong className="text-ink">offline spaces</strong> are designed to feel like
        warm havens — not clinics. Walk in, sip some chai or coffee, and stay as you are. We’re not here to
        change you. We’re here to{" "}
        <strong className="text-ink">sit beside you, listen and hold space</strong>.
      </>
    ),
  },
  {
    title: "Dive Deeper With Us",
    img: about3,
    tone: "bg-mint-soft",
    date: "July 1, 2025",
    body: (
      <>
        And when you’re ready for more — deeper guidance, tools, and clarity — we’re still here. Our team of
        licensed clinical psychologists, counselling psychologists, and psychiatrists brings both compassion
        and credibility. Whether it’s about relationships, anxiety, grief, or just feeling “not okay” —
        we’ll meet you with care. We believe therapy should feel less like an appointment, and more like a
        conversation that makes you feel lighter.
      </>
    ),
  },
];

const About = () => (
  <>
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 to-white pb-10 pt-14 sm:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-coral/10 blur-3xl" />
      <div className="wrap relative">
        <div className="text-center">
          <span className="eyebrow">About us</span>
        </div>

        <div className="relative mx-auto mt-6 max-w-4xl overflow-hidden rounded-[2.5rem] bg-brand-deep px-8 py-14 text-center text-white sm:px-16 sm:py-20">
          <div aria-hidden="true" className="absolute -right-16 -top-16 size-64 rounded-full bg-brand/50 blur-2xl" />
          <h1 className="relative font-display text-2xl font-extrabold leading-snug sm:text-4xl">
            Why does reaching out feel like the toughest step - right when we need support the most?
          </h1>
          <p className="relative mt-6 text-lg font-semibold text-coral">That question shaped everything we do.</p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">Born from a Personal Journey</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Mend was born from a deeply personal journey- from the struggle of seeking support and not knowing
            where to begin. That quiet moment when you don’t even have the words for what you’re feeling, but
            still wish someone would just listen- not fix, not advise, just hear you.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-24">
      <div className="wrap">
        <SectionHeading title="That’s why we" accent="exist" />

        <div className="mt-16 space-y-16 sm:space-y-24">
          {sections.map((s, i) => (
            <div key={s.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className={`${i % 2 ? "lg:order-2" : ""} overflow-hidden rounded-[2.5rem] ${s.tone}`}>
                <img src={s.img} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <span className="eyebrow">{s.date}</span>
                <h3 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">{s.title}</h3>
                <p className="mt-5 text-lg leading-relaxed text-muted">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Support />

    <section className="py-12">
      <div className="wrap">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2.5rem] bg-gradient-to-br from-brand to-brand-deep px-8 py-12 text-white sm:flex-row sm:items-center sm:px-14">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-2 text-white/75">Take the first step toward better mental health today</p>
          </div>
          <Link to="/quiz" className="btn btn-coral !px-7 !py-4 text-base">
            Start Your Journey <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default About;
