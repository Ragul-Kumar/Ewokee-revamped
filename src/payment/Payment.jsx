import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BadgeCheck, CalendarCheck, Clock4, PartyPopper } from "lucide-react";
import { getTherapist } from "../helper/localData";
import { useAnswersStore } from "../quiz/store";

function appointmentDate(date) {
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));
}

function formatTimeRange(startTime, duration) {
  const [hourStr, minutePart] = startTime.split(":");
  const minuteStr = minutePart.slice(0, 2);
  const meridiem = minutePart.slice(3).toUpperCase();

  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;

  const startDate = new Date(2000, 0, 1, hour, minute);
  const endDate = new Date(startDate.getTime() + duration * 60 * 1000);

  const format = (d) => {
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, "0");
    const suffix = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${String(h).padStart(2, "0")}:${m} ${suffix}`;
  };

  return `${format(startDate)} to ${format(endDate)}`;
}

const Payment = () => {
  const [searchParams] = useSearchParams();
  const { answers } = useAnswersStore();
  const name = searchParams.get("profile") || "Disha Pandit";

  const { data: profile } = useQuery({
    queryKey: ["therapist", name],
    queryFn: () => getTherapist(name),
  });

  const hasTime = answers.preferredDate && answers.preferredTime?.includes(":");

  return (
    <section className="bg-gradient-to-b from-brand-soft/60 to-white">
      <div className="wrap max-w-2xl py-12 sm:py-20">
        <div className="card overflow-hidden">
          <div className="relative bg-gradient-to-br from-brand to-brand-deep px-8 py-10 text-center text-white">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-white/15">
              <PartyPopper className="size-8" />
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold">Thanks!</h1>
            <p className="mt-2 text-white/80">We are looking forward to meet you.</p>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            <div>
              <h2 className="font-display text-xl font-extrabold text-ink">Session details</h2>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-2xl bg-canvas p-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">
                    <CalendarCheck className="size-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold text-muted">Appointment date</dt>
                    <dd className="font-display font-extrabold text-ink">
                      {answers.preferredDate ? appointmentDate(answers.preferredDate) : "18 Aug 2025"}
                    </dd>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-canvas p-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-coral-soft text-coral">
                    <Clock4 className="size-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold text-muted">Appointment time</dt>
                    <dd className="font-display font-extrabold text-ink">
                      {hasTime ? formatTimeRange(answers.preferredTime, answers.duration) : "09:00 AM to 10:00 AM"}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl border border-line p-4">
              <div className="flex items-center gap-4">
                <img src={profile?.photourl} alt="" className="size-16 rounded-2xl bg-brand-soft object-cover" />
                <div>
                  <p className="font-display text-lg font-extrabold text-ink">{profile?.name || "Disha Pandit"}</p>
                  <p className="text-sm text-muted">{profile?.category || "Clinical Psychologist"}</p>
                </div>
              </div>
              <BadgeCheck className="size-7 shrink-0 fill-brand text-white" aria-label="Verified therapist" />
            </div>

            <Link to="/" className="btn btn-primary w-full !py-4 text-base">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
