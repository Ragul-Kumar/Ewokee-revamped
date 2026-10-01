import {
  AlertTriangle,
  Ban,
  CalendarCheck,
  ClipboardList,
  Clock10,
  DollarSign,
  IndianRupee,
  Info,
  Lock,
  Mail,
  RefreshCw,
  ShieldCheck,
  User,
  UserCheck,
} from "lucide-react";

const email = (
  <a href="mailto:hello@mend.example" className="font-semibold text-brand underline underline-offset-4">
    hello@mend.example
  </a>
);

const docs = [
  {
    id: "privacy",
    title: "Privacy Policy",
    intro: (
      <>
        At <strong className="text-ink">Mend</strong>, your privacy is important to us. We are committed to
        protecting your personal information and ensuring transparency in how we use it.
      </>
    ),
    items: [
      {
        icon: Info,
        title: "Information We Collect",
        body: "We may collect personal details such as your name, email address, phone number, and any information you choose to share with us during consultations or while using our services.",
      },
      {
        icon: ClipboardList,
        title: "How We Use Your Information",
        list: [
          "Provide and improve our mental health services",
          "Communicate with you about appointments and updates",
          "Ensure compliance with legal and regulatory requirements",
        ],
        body: "We never sell or rent your data to third parties.",
      },
      {
        icon: Lock,
        title: "Data Security",
        body: "We take appropriate measures to protect your information using secure technologies and limit access only to authorized personnel.",
      },
      {
        icon: UserCheck,
        title: "Your Rights",
        body: "You have the right to access, correct, or request deletion of your personal information. You can contact us at any time to exercise these rights.",
      },
      {
        icon: Mail,
        title: "Contact Us",
        body: "If you have any questions about this policy or our practices, please contact us at:",
        extra: (
          <address className="mt-2 not-italic font-semibold text-ink">
            Mend
            <br />
            Noida, Uttar Pradesh, India
          </address>
        ),
      },
    ],
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    items: [
      {
        icon: AlertTriangle,
        title: "Not a Substitute for Emergency Care",
        body: "Our services are for general mental health support and are not a replacement for emergency medical services. In case of a crisis, please contact emergency services immediately.",
      },
      {
        icon: ShieldCheck,
        title: "Confidentiality",
        body: "We respect your privacy. All sessions and data are kept confidential, except where disclosure is required by law (e.g., risk of harm to self or others).",
      },
      {
        icon: User,
        title: "User Responsibility",
        body: "You are responsible for the information you provide. Ensure it is truthful and accurate for effective support.",
      },
      {
        icon: ShieldCheck,
        title: "No Guarantees",
        body: "We strive to provide helpful guidance, but we do not guarantee outcomes or results.",
      },
      {
        icon: User,
        title: "Age Requirement",
        body: "You must be at least 18 years old to use our services unless permitted by a legal guardian.",
      },
      {
        icon: DollarSign,
        title: "Payment & Cancellation",
        body: "Payment terms are outlined at the time of booking. Cancellations made within 24 hours of a session may be subject to a fee.",
      },
      {
        icon: RefreshCw,
        title: "Changes to Terms",
        body: "We may update these Terms from time to time. Continued use implies acceptance of any updates.",
      },
      {
        icon: Mail,
        title: "Contact Us",
        body: "If you have any questions regarding these terms, please contact us at:",
        extra: <p className="mt-2">{email}</p>,
      },
    ],
  },
  {
    id: "refunds",
    title: "Refund & Cancellation Policy",
    intro: "We understand that plans can change. Please review our cancellation terms below:",
    items: [
      {
        icon: CalendarCheck,
        title: "Free Cancellation",
        body: "Appointments cancelled at least 24 hours in advance will receive a full refund.",
      },
      {
        icon: IndianRupee,
        title: "Estimated Refund Period",
        body: "Refunds will be credited to the original payment method within 7–10 working days.",
      },
      {
        icon: Clock10,
        title: "Late Cancellation",
        body: "If you cancel within 24 hours of your scheduled session, 50% of the session fee will be refunded.",
      },
      {
        icon: Ban,
        title: "No-Shows",
        body: "Missed sessions without prior notice are non-refundable.",
      },
    ],
    outro: <>To cancel or reschedule, please contact us at: {email}</>,
  },
];

const Privacy = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-soft/70 to-white pb-10 pt-14 text-center sm:pt-20">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold text-ink sm:text-6xl">
            Privacy, terms <span className="text-brand">& refunds</span>
          </h1>
        </div>
      </section>

      <div className="wrap grid gap-10 py-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="sticky top-28 space-y-1 border-l-2 border-line">
            {docs.map((d) => (
              <li key={d.id}>
                <a
                  href={`#${d.id}`}
                  className="-ml-0.5 block border-l-2 border-transparent py-2 pl-4 text-[15px] font-semibold text-muted transition-colors hover:border-brand hover:text-brand"
                >
                  {d.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-3xl space-y-20">
          {docs.map((d) => (
            <section key={d.id} id={d.id} className="scroll-mt-28">
              <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">{d.title}</h2>
              {d.intro && <p className="mt-4 text-lg leading-relaxed text-muted">{d.intro}</p>}

              <div className="mt-8 space-y-4">
                {d.items.map(({ icon: Icon, title, body, list, extra }) => (
                  <article key={title} className="card p-6">
                    <h3 className="flex items-center gap-3 font-display text-lg font-extrabold text-ink">
                      <span className="grid size-9 place-items-center rounded-xl bg-brand-soft text-brand">
                        <Icon className="size-[18px]" />
                      </span>
                      {title}
                    </h3>
                    {list && (
                      <ul className="mt-3 list-disc space-y-1 pl-6 text-muted marker:text-brand">
                        {list.map((l) => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                    )}
                    {body && <p className="mt-3 leading-relaxed text-muted">{body}</p>}
                    {extra}
                  </article>
                ))}
              </div>
              {d.outro && <p className="mt-6 text-muted">{d.outro}</p>}
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default Privacy;
