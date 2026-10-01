import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addDays, isToday, isTomorrow, startOfDay } from "date-fns";
import { useAnswersStore } from "./store";

const DateCard = () => {
  const { answers, handleInput } = useAnswersStore();
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, dragFree: true, containScroll: "trimSnaps" });
  const [selected, setSelected] = useState(answers.preferredDate);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const today = startOfDay(new Date());

  const slides = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(today, i);
    const label = isToday(date) ? "Today" : isTomorrow(date) ? "Tomorrow" : format(date, "EEE");
    return { label, sub: format(date, "d MMM"), date };
  });

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Earlier dates"
        className="grid size-10 shrink-0 place-items-center rounded-full border border-line bg-white text-ink hover:border-brand hover:text-brand"
      >
        <ChevronLeft className="size-5" />
      </button>

      <div className="min-w-0 flex-1 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2">
          {slides.map((slide) => {
            const iso = format(slide.date, "yyyy-MM-dd");
            const active = iso === selected;
            return (
              <button
                key={iso}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setSelected(iso);
                  handleInput("preferredDate", iso);
                }}
                className={`flex min-w-[5.25rem] flex-col items-center rounded-2xl border-2 px-3 py-3 transition-colors ${
                  active
                    ? "border-brand bg-brand text-white shadow-[0_8px_20px_rgba(75,60,245,0.28)]"
                    : "border-line bg-white text-ink hover:border-brand"
                }`}
              >
                <span className="text-sm font-bold">{slide.label}</span>
                <span className={`text-xs ${active ? "text-white/80" : "text-muted"}`}>{slide.sub}</span>
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Later dates"
        className="grid size-10 shrink-0 place-items-center rounded-full border border-line bg-white text-ink hover:border-brand hover:text-brand"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
};

export default DateCard;
