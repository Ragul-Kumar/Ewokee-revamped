import SectionHeading from "../ui/SectionHeading";
import how1 from "../assets/how_1.svg";
import how2 from "../assets/how_2.svg";
import how3 from "../assets/how_3.svg";

const steps = [
  {
    title: "Safe & Confidential",
    body: "Your privacy is our priority with end-to-end encryption.",
    img: how1,
    tone: "bg-brand-soft",
  },
  {
    title: "Get Matched",
    body: "We’ll connect you with a therapist who specializes in your areas of concern.",
    img: how2,
    tone: "bg-coral-soft",
  },
  {
    title: "Start Your Journey",
    body: "Pick a time that suits you and meet your therapist over a private video session.",
    img: how3,
    tone: "bg-mint-soft",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="Three simple steps"
          title="How it"
          accent="Works"
          sub="Walk with us - one step, one breath, one breakthrough at a time"
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="card flex flex-col overflow-hidden">
              <div className={`${s.tone} relative`}>
                <img src={s.img} alt="" loading="lazy" className="aspect-[1215/1000] w-full object-cover" />
                <span className="absolute left-5 top-5 grid size-11 place-items-center rounded-full bg-ink font-display text-lg font-extrabold text-white">
                  {i + 1}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-extrabold text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
