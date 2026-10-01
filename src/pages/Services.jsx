import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Support from "../home/Support";
import solo from "../assets/solo.svg";
import couple from "../assets/couple.svg";
import family from "../assets/family.svg";
import elder from "../assets/elder.svg";

const stats = [
  { value: "25k+", label: "Total Therapy Hours" },
  { value: "192", label: "Therapist Available" },
  { value: "10k", label: "Queries Resolved" },
];

const services = [
  {
    n: "01",
    title: "Individual Therapy",
    img: solo,
    tone: "bg-brand-soft",
    accent: "text-brand",
    check: "bg-brand",
    intro:
      "You don’t have to face it alone. Whether you’re feeling anxious, overwhelmed, or emotionally stuck, individual therapy offers a safe space to talk, heal, and grow. Our one-on-one sessions help you understand what you’re going through and equip you with practical tools to feel better.",
    points: [
      ["Personalized Support", "Tailored sessions to meet your unique needs and goals."],
      ["Emotional Clarity", "Understand your emotions, patterns, and challenges more clearly."],
      ["Practical Tools for Growth", "Learn strategies that help you manage stress, anxiety, and low moods."],
    ],
  },
  {
    n: "02",
    title: "Couple Therapy",
    img: couple,
    tone: "bg-coral-soft",
    accent: "text-coral",
    check: "bg-coral",
    intro:
      "Reconnect and rebuild together. If you’re struggling to communicate or feel distant from your partner, you’re not alone. Couple therapy helps you both reconnect, resolve conflict, and strengthen your relationship — because every relationship deserves a chance to thrive.",
    points: [
      ["Better Communication", "Learn to express and listen without judgment."],
      ["Conflict Resolution", "Handle disagreements in a healthy, productive way."],
      ["Rekindle Connection", "Rebuild trust and emotional intimacy."],
    ],
  },
  {
    n: "03",
    title: "Family Therapy",
    img: family,
    tone: "bg-mint-soft",
    accent: "text-teal-700",
    check: "bg-mint",
    intro:
      "Heal as a family, grow as a unit. When families feel disconnected or constantly argue, therapy can help rebuild trust and understanding. We create a safe space where everyone feels heard and supported, helping families work better together.",
    points: [
      ["Stronger Bonds", "Build trust and understanding across generations."],
      ["Shared Communication", "Encourage open, respectful conversations among family members."],
      ["Problem-Solving Together", "Resolve family challenges as a team."],
    ],
  },
  {
    n: "04",
    title: "Elderly Support",
    img: elder,
    tone: "bg-sun-soft",
    accent: "text-amber-600",
    check: "bg-amber-500",
    intro:
      "You matter at every stage of life. Aging brings change — and sometimes, loneliness or emotional stress. We’re here to support older adults with compassionate care that honors their experiences, helps them find joy, and restores a sense of purpose.",
    points: [
      ["Compassionate Listening", "A safe space to share your thoughts and feelings."],
      ["Emotional Wellness", "Cope with grief, loss, or life transitions."],
      ["Renewed Purpose", "Find meaning and joy in daily living."],
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 to-white pb-14 pt-14 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="wrap relative text-center">
          <span className="eyebrow">Our services</span>
          <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
            Different Paths, One Purpose
            <br />
            <span className="text-brand">“Your Well-being”</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Choose from our range of therapy options designed to fit your comfort and needs
          </p>

          <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-3 sm:gap-5">
            {stats.map((s) => (
              <div key={s.label} className="card flex flex-col-reverse px-3 py-5 sm:py-7">
                <dt className="mt-1 text-xs font-medium text-muted sm:text-sm">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-ink sm:text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="wrap space-y-20 py-16 sm:space-y-28 sm:py-24">
        {services.map((s, i) => (
          <article key={s.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={`${i % 2 ? "lg:order-2" : ""} overflow-hidden rounded-[2.5rem] ${s.tone}`}>
              <img src={s.img} alt="" loading="lazy" className="aspect-[4/4.2] w-full object-cover" />
            </div>

            <div className={i % 2 ? "lg:order-1" : ""}>
              <span className={`font-display text-6xl font-extrabold ${s.accent} opacity-40`}>{s.n}</span>
              <h2 className="-mt-2 font-display text-3xl font-extrabold text-ink sm:text-5xl">{s.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">{s.intro}</p>

              <ul className="mt-8 space-y-5">
                {s.points.map(([t, d]) => (
                  <li key={t} className="flex items-start gap-4">
                    <span className={`mt-1 grid size-6 shrink-0 place-items-center rounded-full text-white ${s.check}`}>
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-extrabold text-ink">{t}</h3>
                      <p className="text-muted">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link to="/quiz" className="btn btn-primary mt-9 !px-7 !py-4 text-base">
                Book session <ArrowRight className="size-5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <Support />
    </>
  );
}
