import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { v4 as uuidv4 } from "uuid";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Mic,
  Phone,
  Video,
  X,
} from "lucide-react";
import { useAnswersStore } from "./store";

const TOTAL_STEPS = 8;

// Reusable option row
const SelectableOption = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={selected}
    className={`flex w-full items-center justify-between gap-4 rounded-2xl border-2 px-5 py-4 text-left font-semibold transition-colors ${
      selected ? "border-brand bg-brand-soft text-brand" : "border-line bg-white text-ink hover:border-brand"
    }`}
  >
    <span className="text-base sm:text-lg">{label}</span>
    <span
      className={`grid size-6 shrink-0 place-items-center rounded-full border-2 ${
        selected ? "border-brand bg-brand text-white" : "border-neutral-300"
      }`}
    >
      {selected && <Check className="size-3.5" strokeWidth={3} />}
    </span>
  </button>
);

const slotGroups = [
  { title: "Morning", icon: "🌅", slots: ["9:00 AM", "10:00 AM", "11:00 AM"] },
  { title: "Afternoon", icon: "☀️", slots: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"] },
  { title: "Evening", icon: "🌇", slots: ["5:00 PM", "6:00 PM", "7:00 PM"] },
  { title: "Night", icon: "🌙", slots: ["8:00 PM", "9:00 PM", "10:00 PM"] },
];

export default function Question() {
  const handleWhatsAppClick = () => {
    window.fbq?.("track", "Lead", { method: "WhatsApp" });
    ReactGA.event({
      category: "User Interaction",
      action: "User Opted Whatsapp",
      label: "USer Opted Whatsapp",
    });
  };

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [date_, setDate_] = useState(new Date());
  const [duration, setDuration] = useState(60);
  const [step, setStep] = useState(1);
  const [uuid] = useState(uuidv4());
  const [disable, setDisable] = useState(true);

  const [user, setUser] = useState({
    id: uuid,
    name: "",
    email: "",
    phone_number: "",
  });

  const { answers, handleInput, toggleMulti } = useAnswersStore();

  const isPastSlot = (timeString, selectedDate = answers.preferredDate) => {
    const now = new Date();

    const [hourStr, minuteStrWithPeriod] = timeString.split(":");
    const [minuteStr, period] = minuteStrWithPeriod.split(" ");
    let hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);

    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    const slotDate = new Date(selectedDate);
    slotDate.setHours(hour, minute, 0, 0);

    const isSameDay = now.toDateString() === new Date(selectedDate).toDateString();
    return isSameDay && slotDate < now;
  };

  useEffect(() => {
    if (user.id && user.email && user.phone_number) {
      handleInput("uuid", user.id);
      handleInput("email", user.email);
      handleInput("phone_number", user.phone_number);
      handleInput("name", user.name);
    }
  }, [user.id, user.email, handleInput, user]);

  useEffect(() => {
    if (step === 2) {
      ReactGA.event({
        category: "User Interaction",
        action: "User Info Captured",
        label: "Submit User Info Form",
      });

      window.fbq?.("track", "CompleteRegistration", {
        method: "User Info Captured",
        email: user.email,
      });
    }
  }, [step]); // runs only when step changes

  useEffect(() => {
    if (user.email && user.name && user.phone_number) {
      setDisable(false);
    }
  }, [user.email, user.name, user.phone_number]);

  const navigate = useNavigate();

  function updateDate(date) {
    setDate_(date);
    handleInput("preferredDate", date.toISOString().split("T")[0]);
  }

  const title = {
    1: "What’s your name?",
    2: "How old are you?",
    3: "How do you identify?",
    4: "What’s been on your mind the most lately?",
    5: "Have you tried therapy before?",
    6: "How would you like to connect?",
    7: "What kind of therapist feels right for you?",
    8: "When would you prefer your therapy sessions?",
  }[step];

  return (
    <section className="bg-gradient-to-b from-brand-soft/60 to-white">
      <div className="wrap max-w-3xl py-8 sm:py-14">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => (step > 1 ? setStep(step - 1) : navigate("/quiz"))}
            className="inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-brand"
          >
            <ArrowLeft className="size-4" /> {step > 1 ? "Back" : "Assessment"}
          </button>
          <span className="rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-brand shadow-sm">
            {step} of {TOTAL_STEPS}
          </span>
        </div>

        <div
          className="mt-5 h-2 overflow-hidden rounded-full bg-brand-soft"
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand to-coral transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>

        <h1 className="mx-auto mt-10 max-w-xl text-center font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          {title}
        </h1>

        {/* Question content */}
        <div className="mx-auto mt-9 flex max-w-xl flex-col gap-3">
          {step === 1 && (
            <>
              <div className="card space-y-5 p-6 sm:p-8">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink">Your name*</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={user.name}
                    onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    className="field"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink">Email address*</span>
                  <span className="relative block">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-brand" />
                    <input
                      type="email"
                      required
                      inputMode="email"
                      autoComplete="email"
                      name="email"
                      placeholder="hello@example.com"
                      onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
                      className="field !pl-11"
                    />
                  </span>
                  <span className="mt-1.5 block text-xs text-muted">To receive the session link</span>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink">Phone number*</span>
                  <span className="relative block">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-brand" />
                    <span className="pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 text-sm font-semibold text-ink">+91</span>
                    <input
                      type="tel"
                      name="phone"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      placeholder="Phone number"
                      onChange={(e) => setUser((prev) => ({ ...prev, phone_number: e.target.value }))}
                      className="field !pl-[5.25rem]"
                    />
                  </span>
                </label>
              </div>

              <a
                href="https://wa.link/b18en4"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="btn btn-ghost mt-2 self-center !border-teal-300 !text-teal-700 hover:!bg-mint-soft"
              >
                <MessageCircle className="size-5" /> Continue with WhatsApp
              </a>
            </>
          )}

          {step === 2 &&
            ["18–24", "25–34", "35–44", "45–54", "55+"].map((opt) => (
              <SelectableOption key={opt} label={opt} selected={answers.age === opt} onClick={() => handleInput("age", opt)} />
            ))}

          {step === 3 && (
            <>
              {["Woman", "Man", "Non-binary", "Prefer not to say", "Prefer to self-describe"].map((opt) => (
                <SelectableOption key={opt} label={opt} selected={answers.gender === opt} onClick={() => handleInput("gender", opt)} />
              ))}
              {answers.gender === "Prefer to self-describe" && (
                <input
                  value={answers.selfDescribe}
                  onChange={(e) => handleInput("selfDescribe", e.target.value)}
                  placeholder="Type here..."
                  className="field"
                />
              )}
            </>
          )}

          {step === 4 &&
            [
              "Relationships",
              "Anxiety or overthinking",
              "Mood swings or sadness",
              "Work or burnout",
              "Family issues",
              "Low self-worth",
              "Identity or life confusion",
              "Something else",
            ].map((opt) => (
              <SelectableOption
                key={opt}
                label={opt}
                selected={answers.issues.includes(opt)}
                onClick={() => toggleMulti("issues", opt)}
              />
            ))}

          {step === 5 &&
            [
              { label: "Yes, I’ve tried it before", value: "Yes", Icon: Check },
              { label: "No, never tried", value: "No", Icon: X },
            ].map(({ label, value, Icon }) => {
              const selected = answers.triedTherapy === value;
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => handleInput("triedTherapy", value)}
                  className={`flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-colors ${
                    selected ? "border-brand bg-brand-soft" : "border-line bg-white hover:border-brand"
                  }`}
                >
                  <span className={`grid size-12 place-items-center rounded-full ${selected ? "bg-brand text-white" : "bg-canvas text-ink"}`}>
                    <Icon className="size-6" />
                  </span>
                  <span className={`text-lg font-bold ${selected ? "text-brand" : "text-ink"}`}>{label}</span>
                </button>
              );
            })}

          {step === 6 && (
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Video Call", Icon: Video },
                { label: "Audio Call", Icon: Mic },
                { label: "In-Person (if available)", Icon: MapPin },
                { label: "Not sure", Icon: HelpCircle },
              ].map(({ label, Icon }) => {
                const isSelected = answers.connection === label;
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => handleInput("connection", label)}
                    className={`flex aspect-square flex-col justify-between rounded-3xl border-2 p-5 text-left transition-colors ${
                      isSelected ? "border-brand bg-brand text-white shadow-[var(--shadow-lift)]" : "border-line bg-white text-ink hover:border-brand"
                    }`}
                  >
                    <Icon className={`size-7 ${isSelected ? "text-white" : "text-brand"}`} />
                    <span className="text-base font-bold">{label}</span>
                  </button>
                );
              })}
            </div>
          )}

          {step === 7 && (
            <div className="card mx-auto w-fit p-4 sm:p-6 [--rdp-accent-background-color:var(--color-brand-soft)] [--rdp-accent-color:var(--color-brand)]">
              <DayPicker
                mode="single"
                timeZone="UTC"
                selected={date_}
                onSelect={(d) => d && updateDate(d)}
                weekStartsOn={1}
                disabled={{ before: new Date() }}
                formatters={{
                  formatWeekdayName: (date) => date.toLocaleDateString("en-IN", { weekday: "short" }),
                }}
                footer={
                  <p className="mt-3 text-center text-sm font-semibold text-muted">
                    {date_ ? `Selected: ${date_.toLocaleDateString()}` : "Pick a day."}
                  </p>
                }
              />
            </div>
          )}

          {step === 8 && (
            <div className="space-y-8">
              <section>
                <h2 className="mb-3 text-center font-display text-lg font-extrabold text-ink">Session duration</h2>
                <div className="grid grid-cols-2 gap-3">
                  {[30, 60].map((d) => (
                    <button
                      key={d}
                      type="button"
                      aria-pressed={duration === d}
                      onClick={() => {
                        setDuration(d);
                        handleInput("duration", d);
                      }}
                      className={`rounded-2xl border-2 px-4 py-3 font-bold transition-colors ${
                        duration === d ? "border-brand bg-brand-soft text-brand" : "border-line bg-white text-ink hover:border-brand"
                      }`}
                    >
                      {d} mins
                    </button>
                  ))}
                </div>
              </section>

              <section className="card space-y-5 p-6">
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
                {selectedSlot && (
                  <p className="text-sm font-medium text-muted">
                    Selected: <span className="font-bold text-brand">{selectedSlot}</span>
                  </p>
                )}
              </section>

              <Link
                onClick={() => console.log("Submit answers:", answers)}
                to="/match"
                className="btn btn-coral w-full !py-4 text-base"
              >
                Submit <ArrowRight className="size-5" />
              </Link>
            </div>
          )}
        </div>

        {/* Continue */}
        {step < TOTAL_STEPS && (
          <div className="mx-auto mt-8 max-w-xl">
            {disable && <p className="mb-3 text-center text-sm font-semibold text-coral">Enter required details</p>}
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              disabled={disable}
              className="btn btn-primary w-full !py-4 text-base"
            >
              Continue <ArrowRight className="size-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
