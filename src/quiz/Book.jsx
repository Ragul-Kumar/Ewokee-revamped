import { useEffect, useState } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useAnswersStore } from "./store";
import DateCard from "./DateCard";

const slotGroups = [
  { title: "Morning", icon: "🌅", slots: ["9:00 AM", "10:00 AM", "11:00 AM"] },
  { title: "Afternoon", icon: "☀️", slots: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"] },
  { title: "Evening", icon: "🌇", slots: ["5:00 PM", "6:00 PM", "7:00 PM"] },
  { title: "Night", icon: "🌙", slots: ["8:00 PM", "9:00 PM", "10:00 PM"] },
];

const Book = ({ cost = [299, 799], name = "" }) => {
  const { answers, handleInput } = useAnswersStore();
  const [uuid] = useState(uuidv4());
  const [duration, setDuration] = useState(answers.duration);
  const [disable, setDisable] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState(answers.preferredTime);

  useEffect(() => {
    handleInput("uuid", uuid);
    if (
      answers.preferredDate &&
      answers.preferredTime &&
      answers.uuid &&
      answers.email &&
      answers.phone_number
    ) {
      setDisable(false);
    }
  }, [answers.preferredDate, answers.preferredTime, answers.email, answers.uuid, answers.phone_number]);

  const isPastSlot = (timeString, selectedDate = answers.preferredDate) => {
    const now = new Date();
    const [hourStr, minuteStrWithPeriod] = timeString.split(":");
    const [minuteStr, period] = minuteStrWithPeriod.split(" ");
    let hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);

    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    const slotDate = new Date(selectedDate);
    slotDate.setHours(hour - 1, minute, 0, 0); // disable next hour

    const isSameDay = now.toDateString() === new Date(selectedDate).toDateString();
    return isSameDay && slotDate < now;
  };

  const pickDuration = (d) => {
    setDuration(d);
    handleInput("duration", d);
  };

  return (
    <aside className="card overflow-hidden lg:sticky lg:top-24">
      <div className="bg-gradient-to-br from-brand to-brand-deep p-6 text-white">
        <p className="text-sm font-semibold text-white/70">Therapy session fee</p>
        <p className="mt-1 font-display text-2xl font-extrabold sm:text-3xl">
          ₹{cost[0]}
          <span className="text-base font-medium text-white/70"> / 30 mins</span>
          <span className="mx-2 text-white/40">·</span>₹{cost[1]}
          <span className="text-base font-medium text-white/70"> / 60 mins</span>
        </p>
      </div>

      <div className="space-y-7 p-6">
        <section>
          <h3 className="mb-3 font-display text-base font-extrabold text-ink">Pick a date</h3>
          <DateCard />
        </section>

        <section>
          <h3 className="mb-3 font-display text-base font-extrabold text-ink">Session duration</h3>
          <div className="grid grid-cols-2 gap-3">
            {[30, 60].map((d) => (
              <button
                key={d}
                type="button"
                aria-pressed={duration === d}
                onClick={() => pickDuration(d)}
                className={`rounded-2xl border-2 px-4 py-3 text-sm font-bold transition-colors ${
                  duration === d ? "border-brand bg-brand-soft text-brand" : "border-line bg-white text-ink hover:border-brand"
                }`}
              >
                {d} mins
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 font-display text-base font-extrabold text-ink">Pick a time</h3>
          <div className="space-y-5">
            {slotGroups.map((g) => (
              <div key={g.title}>
                <p className="mb-2 text-sm font-semibold text-muted">
                  <span aria-hidden="true">{g.icon}</span> {g.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.slots.map((time) => {
                    const past = isPastSlot(time);
                    const active = selectedSlot === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        disabled={past}
                        aria-pressed={active}
                        onClick={() => {
                          setSelectedSlot(time);
                          handleInput("preferredTime", time);
                        }}
                        className={`rounded-full border-2 px-3.5 py-2 text-sm font-semibold transition-colors ${
                          past
                            ? "cursor-not-allowed border-line bg-canvas text-neutral-400 line-through"
                            : active
                            ? "border-brand bg-brand text-white"
                            : "border-line bg-white text-ink hover:border-brand hover:text-brand"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          {selectedSlot && (
            <p className="mt-4 text-sm font-medium text-muted">
              Selected: <span className="font-bold text-brand">{selectedSlot}</span>
            </p>
          )}
        </section>

        <section className="space-y-4">
          <h3 className="font-display text-base font-extrabold text-ink">Your details</h3>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-ink">Your name*</span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              value={answers.name}
              onChange={(e) => handleInput("name", e.target.value)}
              placeholder="Enter your name"
              className="field"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-ink">Email address*</span>
            <span className="relative block">
              <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-brand" />
              <input
                type="email"
                required
                inputMode="email"
                autoComplete="email"
                name="email"
                value={answers.email}
                onChange={(e) => handleInput("email", e.target.value)}
                placeholder="hello@example.com"
                className="field !pl-11"
              />
            </span>
            <span className="mt-1 block text-xs text-muted">To receive the session link</span>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-ink">Phone number*</span>
            <span className="relative block">
              <Phone className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-brand" />
              <span className="pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 text-sm font-semibold text-ink">+91</span>
              <input
                type="tel"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                required
                value={answers.phone_number}
                onChange={(e) => handleInput("phone_number", e.target.value)}
                placeholder="Phone number"
                className="field !pl-[5.25rem]"
              />
            </span>
          </label>
        </section>

        <Link
          to={disable ? "#" : `/match?profile=${name}`}
          aria-disabled={disable}
          onClick={(e) => disable && e.preventDefault()}
          className={`btn w-full !py-4 text-base ${disable ? "btn-primary pointer-events-none opacity-45 shadow-none" : "btn-coral"}`}
        >
          Book session <ArrowRight className="size-5" />
        </Link>
      </div>
    </aside>
  );
};

export default Book;
