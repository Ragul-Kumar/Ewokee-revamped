import {
  ArrowRight,
  Briefcase,
  BrainCircuit,
  Check,
  ClipboardCheck,
  FolderKanban,
  Globe2Icon,
  GraduationCap,
  MapPin,
  Network,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Video,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";

const tones = [
  "bg-brand-soft text-brand",
  "bg-coral-soft text-coral",
  "bg-mint-soft text-teal-700",
  "bg-sun-soft text-amber-600",
];

const features = [
  { icon: Globe2Icon, title: "Real-World Experience", description: "Unlike purely theoretical courses, you get hands-on practice from day one." },
  { icon: GraduationCap, title: "Expert Supervision", description: "Learn and receive guidance from experienced practitioners in the field." },
  { icon: Users, title: "Peer Learning", description: "Collaborate and grow with a cohort of like-minded aspiring professionals." },
  { icon: Zap, title: "Career-Focused", description: "Gain the practical skills and confidence that employers are actively looking for." },
];

const journeyData = [
  { number: "01", title: "Exploration Module", description: "Build your awareness and find your direction.", steps: ["Discovery", "Ethics", "Skills", "Career Clarity"] },
  { number: "02", title: "Foundation Module", description: "Develop core competencies through guided application.", steps: ["Observation", "Practice", "Assessment", "Portfolio"] },
  { number: "03", title: "Professional Development", description: "Refine your expertise and prepare for the industry.", steps: ["Advanced Observation", "Supervised Practice", "Networking", "Mastery"] },
];

const featuresData = [
  { icon: Video, title: "Interactive Live Sessions", description: "Engage in dynamic, tailored learning experiences with instructors and peers in real-time." },
  { icon: Users, title: "Find Your Community", description: "Connect and collaborate with a dedicated cohort of like-minded, aspiring professionals." },
  { icon: ClipboardCheck, title: "Practice-Based Learning", description: "Apply your knowledge through real-world case studies, practical assignments, and hands-on tasks." },
  { icon: TrendingUp, title: "Achieve Tangible Growth", description: "Track your progress with structured assessments and build a portfolio that showcases measurable skill development." },
  { icon: BrainCircuit, title: "Mentor Insights", description: "Gain invaluable wisdom and practical guidance directly from highly experienced practitioners in the field." },
  { icon: Network, title: "Professional Network", description: "Receive lifetime access to our thriving alumni community for continuous support and opportunities." },
];

const stepsData = [
  { step: 1, title: "Online Application", description: "Complete our detailed application form including your educational background, career goals, and availability." },
  { step: 2, title: "Interview", description: "A brief conversation to assess your readiness and ensure a mutual fit for the intensive practical training." },
  { step: 3, title: "Module Selection & Enrollment", description: "Choose your preferred module and secure your spot with an advance payment." },
  { step: 4, title: "Begin Your Journey", description: "Receive your schedule, materials, and prepare for your first observation session." },
];

const modulesData = [
  {
    title: "Exploration Module",
    price: 2500,
    description: "Discover the world of mental health and explore career possibilities.",
    features: [
      "Mental Health Fundamentals",
      "Ethics in Mental Health",
      "Basic Counselling Skills",
      "Career Pathways Workshop",
      "Scope & Specializations Overview",
      "Interactive Case Studies",
      "Resource Library Access",
      "Certificate of Completion",
    ],
    duration: "3 weeks",
    format: "Online & In-person (Noida)",
    idealFor: "12th grade students, undergraduates, career explorers.",
    recommended: false,
  },
  {
    title: "Foundation Module",
    price: 3000,
    description: "Perfect for beginners taking their first step into practical mental health work.",
    features: [
      "1 Live Observation Session",
      "1 Supervised Practice Session",
      "Mental Status Examination (MSE) Training",
      "Basic Counselling Skills Workshop",
      "Blog Writing Assignment",
      "Practical Exposure at Our Noida Center",
    ],
    duration: "4 weeks",
    format: "Hybrid (Online theory + In-person practical)",
    idealFor: "Recent graduates, career changers, final year students.",
    recommended: false,
  },
  {
    title: "Professional Development Module",
    price: 5000,
    description: "Comprehensive training for serious mental health career aspirants.",
    features: [
      "3 Live Observation Sessions",
      "1 Supervised Practice Session",
      "Weekly In-Person Sessions (Delhi NCR)",
      "Exclusive Networking Get-Together",
      "Advanced Counselling Techniques",
      "Case Study Development",
      "Content Creation Portfolio Building",
      "Mental Health Space Immersion",
    ],
    duration: "4 weeks",
    format: "Hybrid with intensive in-person components",
    idealFor: "Committed professionals seeking comprehensive skills.",
    recommended: true,
  },
];

const chooseData = [
  { icon: Briefcase, title: "Real-World Experience", description: "Unlike purely theoretical courses, our modules place you in actual mental health practice settings from day one." },
  { icon: UserCheck, title: "Expert Supervision", description: "Learn from experienced practitioners who understand both the challenges and rewards of mental health work." },
  { icon: Network, title: "Professional Network", description: "Build connections with peers and mentors in the Delhi NCR area who will support your career journey." },
  { icon: FolderKanban, title: "Portfolio Development", description: "Create tangible work samples through blog writing and case studies that showcase your skills to future employers." },
  { icon: MapPin, title: "Local Focus", description: "Our Noida-based program provides strong connections to the Delhi NCR mental health community and opportunities." },
  { icon: Target, title: "Practical Skills First", description: "Every session is designed to build skills you will use immediately in professional settings, not just theory." },
];

const rightFitData = [
  "For Exploration Module: You're curious about mental health or considering career options (no prerequisites).",
  "For Foundation/Professional Modules: You hold a degree in Psychology, Social Work, or a related field.",
  "You are genuinely committed to building a career in the mental health sector.",
  "You can dedicate consistent time for both theoretical learning and practical application.",
  "You're ready to engage with real scenarios and step out of your comfort zone.",
  "You are specifically seeking hands-on experience that goes beyond textbook learning.",
];

const notForYouData = [
  "For Foundation/Professional Modules: You're still in your early undergraduate years.",
  "You are unable to commit to regular attendance for the required sessions.",
  "You're looking for a purely online or theoretical training program without practical components.",
  "You do not feel ready for direct, supervised practice involving client interaction.",
];

const Training = () => {
  return (
    <>
      {/* Hero + problem */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 to-white pb-16 pt-14 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="wrap relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">Mental health training</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
              Bridge the Gap: <span className="text-brand">From Theory to Practice</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-muted">
              Transform Your Mental Health Knowledge into Real-World Skills
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Are you a psychology graduate struggling to find that crucial first opportunity? Do you have
              theoretical knowledge but lack the practical experience employers demand?
            </p>
            <p>
              You’re not alone. The mental health field faces a critical gap - fresh graduates equipped with
              academic knowledge but unprepared for real-world client interactions.
            </p>
            <p className="rounded-2xl border-l-4 border-sun bg-sun-soft p-5 text-ink">
              <strong>This is why we created our Mental Health Training Modules:</strong> A comprehensive bridge
              between academic learning and professional practice, designed specifically for aspiring mental
              health professionals in Delhi NCR.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading title="Why Choose" accent="Us" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className={`grid size-12 place-items-center rounded-2xl ${tones[i % 4]}`}>
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-canvas py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading
            title="Your Journey to"
            accent="Mastery"
            sub="A structured, three-phase program designed to take you from a knowledgeable graduate to a confident professional."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {journeyData.map((m, i) => (
              <div key={m.title} className="card relative flex flex-col p-7">
                <span className="font-display text-6xl font-extrabold text-brand/20">{m.number}</span>
                <h3 className="-mt-2 font-display text-xl font-extrabold text-ink">{m.title}</h3>
                <p className="mt-2 text-muted">{m.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.steps.map((s) => (
                    <span key={s} className="rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand">
                      {s}
                    </span>
                  ))}
                </div>
                {i < journeyData.length - 1 && (
                  <span className="absolute -right-5 top-1/2 hidden size-9 -translate-y-1/2 place-items-center rounded-full bg-brand text-white shadow-lg lg:grid">
                    <ArrowRight className="size-4" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section className="py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading
            title="What You’ll"
            accent="Get"
            sub="A comprehensive program designed to provide you with the skills, community, and confidence to succeed."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className={`grid size-12 place-items-center rounded-full ${tones[i % 4]}`}>
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment steps */}
      <section className="bg-canvas py-16 sm:py-24">
        <div className="wrap max-w-4xl">
          <SectionHeading
            title="Your Path to"
            accent="Enrollment"
            sub="A simple, four-step process to begin your professional journey with us."
          />
          <ol className="mt-12 space-y-4">
            {stepsData.map((s) => (
              <li key={s.step} className="card flex items-start gap-5 p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand font-display text-lg font-extrabold text-white">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-1 text-muted">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Modules */}
      <section className="relative overflow-hidden bg-brand-deep py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-0 size-96 rounded-full bg-brand/40 blur-3xl" />
        <div className="wrap relative">
          <SectionHeading
            light
            title="Our Training"
            accent="Modules"
            sub="Choose the path that’s right for you, from foundational knowledge to professional mastery."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {modulesData.map((m) => (
              <div
                key={m.title}
                className={`relative flex flex-col rounded-[2rem] p-8 ${
                  m.recommended ? "bg-white text-ink shadow-[var(--shadow-lift)] lg:-my-4" : "border border-white/15 bg-white/5 text-white"
                }`}
              >
                {m.recommended && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-extrabold">{m.title}</h3>
                <p className={`mt-2 ${m.recommended ? "text-muted" : "text-white/70"}`}>{m.description}</p>
                <p className="mt-6 font-display text-5xl font-extrabold">
                  ₹{m.price.toLocaleString("en-IN")}
                  <span className={`text-base font-medium ${m.recommended ? "text-muted" : "text-white/60"}`}> / module</span>
                </p>

                <dl className={`mt-6 space-y-1 border-t pt-5 text-sm ${m.recommended ? "border-line text-muted" : "border-white/15 text-white/70"}`}>
                  <div><dt className="inline font-bold">Duration: </dt><dd className="inline">{m.duration}</dd></div>
                  <div><dt className="inline font-bold">Format: </dt><dd className="inline">{m.format}</dd></div>
                  <div><dt className="inline font-bold">Ideal for: </dt><dd className="inline">{m.idealFor}</dd></div>
                </dl>

                <ul className="mt-6 flex-1 space-y-3">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${m.recommended ? "bg-brand text-white" : "bg-mint text-white"}`}>
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className={m.recommended ? "text-ink" : "text-white/85"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`btn mt-8 w-full ${m.recommended ? "btn-coral" : "border border-white/30 text-white hover:bg-white/10"}`}
                >
                  Enroll now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose modules */}
      <section className="py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading
            title="Why Choose Our"
            accent="Training Modules?"
            sub="We bridge the gap between academic theory and professional practice."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {chooseData.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className={`grid size-12 place-items-center rounded-2xl ${tones[i % 4]}`}>
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is it for you */}
      <section className="bg-canvas py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading
            title="Is This Program"
            accent="For You?"
            sub="Our modules are designed for a specific type of learner. See where you fit."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="card border-t-4 !border-t-mint p-8">
              <h3 className="font-display text-2xl font-extrabold text-ink">You’re the Right Fit If...</h3>
              <ul className="mt-6 space-y-4">
                {rightFitData.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint-soft text-teal-700">
                      <Check className="size-4" strokeWidth={3} />
                    </span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card border-t-4 !border-t-sun p-8">
              <h3 className="font-display text-2xl font-extrabold text-ink">This Might Not Be For You If...</h3>
              <ul className="mt-6 space-y-4">
                {notForYouData.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sun-soft text-amber-600">
                      <X className="size-4" strokeWidth={3} />
                    </span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24">
        <div className="wrap">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-brand to-brand-deep px-8 py-14 text-center text-white sm:px-16 sm:py-20">
            <h2 className="font-display text-3xl font-extrabold sm:text-5xl">Ready to Bridge the Gap?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Your journey from theory to practice starts here. Limited seats are available to ensure quality
              mentorship and personalized attention.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-coral !px-8 !py-4 text-base">
                Apply now
              </Link>
              <Link to="/contact" className="btn border border-white/30 !px-8 !py-4 text-base text-white hover:bg-white/10">
                Contact for questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;
