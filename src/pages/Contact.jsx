import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { Social } from "../ui/Social";

const empty = { name: "", email: "", phone_number: "", message: "" };

const Contact = () => {
  const [message, setmessage] = useState("");
  const [contactData, setContactData] = useState(empty);

  const set = (key) => (e) => setContactData({ ...contactData, [key]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    console.log(contactData);
    setmessage("Message sent successfully!");
    setContactData(empty);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 to-white pb-8 pt-14 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-coral/10 blur-3xl" />
        <div className="wrap relative text-center">
          <span className="eyebrow">Contact us</span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
            Let’s <span className="text-brand">talk</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            At Mend, your feedback, questions, and concerns truly matter to us. Our dedicated support team is
            always ready to assist you and ensure you get the care and guidance you need on your mental wellness
            journey. Please feel free to reach out to us through any of the contact methods below.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="wrap grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={submit} className="card p-6 sm:p-10">
            <h2 className="font-display text-2xl font-extrabold text-ink">Send us a message</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-ink">Name</span>
                <input id="name" type="text" required placeholder="Enter your name" value={contactData.name} onChange={set("name")} className="field" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-ink">Email</span>
                <input id="email" type="email" required placeholder="Enter your email" value={contactData.email} onChange={set("email")} className="field" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-ink">Phone number</span>
                <input id="phone" type="tel" placeholder="Enter your number" value={contactData.phone_number} onChange={set("phone_number")} className="field" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-ink">Message</span>
                <textarea
                  rows={5}
                  maxLength={250}
                  required
                  placeholder="Enter your message"
                  value={contactData.message}
                  onChange={set("message")}
                  className="field resize-none"
                />
                <span className="mt-1.5 block text-right text-xs text-muted">{contactData.message.length}/250</span>
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-6 w-full !py-4 text-base"
              disabled={!contactData.name || !contactData.email || !contactData.message}
            >
              Send message <Send className="size-4" />
            </button>
            {message && (
              <p role="status" className="mt-4 text-center font-semibold text-teal-700">
                {message}
              </p>
            )}
          </form>

          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] bg-brand-deep p-8 text-white">
              <h2 className="font-display text-2xl font-extrabold">Reach us directly</h2>
              <ul className="mt-6 space-y-5 text-[15px]">
                <li className="flex items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10"><Mail className="size-5 text-coral" /></span>
                  hello@mend.example
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10"><Phone className="size-5 text-coral" /></span>
                  +91 92119 05688
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10"><MapPin className="size-5 text-coral" /></span>
                  Noida, Uttar Pradesh, India
                </li>
              </ul>
              <div className="mt-7 [&_a]:!border-white/20 [&_a]:!bg-white/10 [&_a]:!text-white [&_a:hover]:!bg-white [&_a:hover]:!text-brand-deep">
                <Social />
              </div>
            </div>

            <div className="card min-h-72 flex-1 overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=28.4940932,77.4405006&z=17&output=embed"
                className="size-full min-h-72"
                allowFullScreen
                loading="lazy"
                title="Mend Location"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="wrap mt-16">
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
};

export default Contact;
