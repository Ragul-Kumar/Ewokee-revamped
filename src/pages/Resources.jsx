import { Link } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import pic from "../assets/res_1.svg";
import audio from "../assets/audio_girl.svg";
import self from "../assets/self.svg";
import faqArt from "../assets/resource_4.svg";

const faqs = [
  {
    q: "How do I book a therapy session?",
    a: "You can book a therapy session through our website’s booking section or by calling us directly on our contact number.",
  },
  { q: "Are online sessions available?", a: "Yes, we also offer online sessions." },
  {
    q: "What’s the difference between therapy and coaching?",
    a: "Therapy helps you heal from past trauma, emotional challenges, or mental health concerns, while coaching focuses on achieving goals, improving performance, and fostering future growth.",
  },
  {
    q: "Can I switch therapists if I don’t feel the right connection?",
    a: "Yes, you can switch therapists at any time. Our priority is to provide you with the best support and comfort.",
  },
  {
    q: "Is my information and session history kept confidential?",
    a: "Yes, your information and session history are completely confidential. We follow strict privacy policies to ensure your details remain secure and only between you and your psychologist.",
  },
];

function FAQItem({ q, a }) {
  return (
    <Disclosure as="div" className="card overflow-hidden">
      {({ open }) => (
        <>
          <DisclosureButton className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6">
            <span className="font-display text-base font-extrabold text-ink sm:text-lg">{q}</span>
            <span
              className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors ${
                open ? "bg-brand text-white" : "bg-brand-soft text-brand"
              }`}
            >
              {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
            </span>
          </DisclosureButton>
          <DisclosurePanel className="px-5 pb-6 leading-relaxed text-muted sm:px-6">{a}</DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

const Resources = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 to-white pb-6 pt-14 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="wrap relative">
          <SectionHeading
            eyebrow="Resources"
            title="Tools for your"
            accent="wellbeing"
            sub="Explore expert insights, self-care guides, and tools to support your mental health."
          />
        </div>
      </section>

      <section className="py-10">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <div className="flex items-center gap-4 overflow-hidden rounded-[2rem] bg-coral-soft p-7 sm:p-10">
            <div className="flex-1">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                Blogs & <br />
                Articles
              </h2>
              <p className="mt-4 text-muted">
                Explore reflections, stories, and experts advice for your mental wellness journey.
              </p>
              <Link to="/resource/blog" className="btn btn-coral mt-7">
                Read now <ArrowRight className="size-4" />
              </Link>
            </div>
            <img src={pic} alt="" loading="lazy" className="hidden w-40 sm:block" />
          </div>

          <div className="flex items-center gap-4 overflow-hidden rounded-[2rem] bg-brand-soft p-7 sm:p-10">
            <div className="flex-1">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                Soothing <br />
                Audios
              </h2>
              <p className="mt-4 text-muted">Guided audio to help you slow down, breathe and reset.</p>
              <Link to="/coming" className="btn btn-primary mt-7">
                Listen now <ArrowRight className="size-4" />
              </Link>
            </div>
            <img src={audio} alt="" loading="lazy" className="hidden w-36 sm:block" />
          </div>
        </div>

        <div className="wrap mt-6">
          <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-brand-deep p-7 text-white sm:p-12 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-display text-3xl font-extrabold sm:text-5xl">Self Assessment</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
                Not sure how you’re feeling lately? Take a quick self-assessment to gain clarity. It’s safe,
                private, and made to support you. Your first step toward feeling better starts here.
              </p>
              <Link to="/resource/assessment" className="btn btn-coral mt-8 !px-7 !py-4 text-base">
                Take the assessment <ArrowRight className="size-5" />
              </Link>
            </div>
            <img src={self} alt="" loading="lazy" className="mx-auto w-full max-w-sm rounded-[1.5rem] bg-brand-soft" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Need help?</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              Frequently <br />
              <span className="text-brand">Asked Questions</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-muted">
              Find answers to common questions about our services, therapy, and mental well-being.
            </p>
            <img src={faqArt} alt="" loading="lazy" className="mt-8 hidden w-full max-w-sm rounded-[2rem] bg-coral-soft lg:block" />
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <FAQItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
