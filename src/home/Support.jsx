import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { Social } from "../ui/Social";

export default function Support() {
  const [support, setSupport] = useState({ email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    console.log(support);
    setSent(true);
    setSupport({ email: "", message: "" });
  };

  return (
    <section className="pb-8 pt-4 sm:pt-12">
      <div className="wrap">
        <SectionHeading
          eyebrow="Get in touch"
          title="We’re Here to"
          accent="Support You"
          sub="Whether you have questions, need help getting started, or want to learn more — reach out anytime."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-brand-deep p-8 text-white sm:p-10">
            <h3 className="font-display text-2xl font-extrabold">Contact details</h3>
            <ul className="mt-8 space-y-5 text-[15px]">
              <li className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10"><Mail className="size-5 text-coral" /></span>
                <span><span className="block text-xs uppercase tracking-wider text-white/50">Email</span>hello@mend.example</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10"><Phone className="size-5 text-coral" /></span>
                <span><span className="block text-xs uppercase tracking-wider text-white/50">Phone</span>+91 92119 05688</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10"><MapPin className="size-5 text-coral" /></span>
                <span><span className="block text-xs uppercase tracking-wider text-white/50">Address</span>Noida, Uttar Pradesh, India</span>
              </li>
            </ul>
            <p className="mt-8 text-sm text-white/65">We typically respond within 12 hours.</p>
            <div className="mt-6 [&_a]:!border-white/20 [&_a]:!bg-white/10 [&_a]:!text-white [&_a:hover]:!bg-white [&_a:hover]:!text-brand-deep">
              <Social />
            </div>
          </div>

          <form onSubmit={submit} className="card p-8 sm:p-10">
            <h3 className="font-display text-2xl font-extrabold text-ink">Send us a message</h3>
            <div className="mt-6 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-ink">Email</span>
                <input
                  type="email"
                  required
                  value={support.email}
                  onChange={(e) => setSupport({ ...support, email: e.target.value })}
                  placeholder="example@abc.com"
                  className="field"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-ink">Message</span>
                <textarea
                  required
                  rows={4}
                  value={support.message}
                  onChange={(e) => setSupport({ ...support, message: e.target.value })}
                  placeholder="Write your message here"
                  className="field resize-none"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-7 w-full sm:w-auto" disabled={!support.email || !support.message}>
              Send message <Send className="size-4" />
            </button>
            {sent && (
              <p role="status" className="mt-4 text-sm font-semibold text-teal-700">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
