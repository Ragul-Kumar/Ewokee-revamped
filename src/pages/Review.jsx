import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import Avatar from "../ui/Avatar";

const reviews = [
  {
    name: "Ananya R",
    tag: "Depression",
    stars: 5,
    text: "I had a great experience with Mend. Here I can discuss my things without any filter because of the trustworthy people here. There is no judgment and pure therapy. I feel light after my sessions!!",
  },
  {
    name: "Anju Tyagi",
    tag: "Work-Life Integration",
    stars: 4,
    text: "I had a wonderful experience, they provide an environment where I can share my deepest pains and gave me a way to come out of it. We really need more such organizations who can help humans at this level. They have the best psychologists in Noida.",
  },
  {
    name: "Anita Sharma",
    tag: "Personal Development",
    stars: 4,
    text: "Wonderful experience! If you are really looking for mental health support, give them a chance",
  },
];

const Review = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {reviews.map((r, i) => (
            <figure key={r.name} className="card min-w-[88%] p-6 sm:min-w-[70%]">
              <div className="flex items-center gap-3">
                <Avatar name={r.name} i={i} />
                <div>
                  <figcaption className="font-display font-extrabold text-ink">{r.name}</figcaption>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-[11px] font-bold text-brand">{r.tag}</span>
                    <span className="inline-flex" aria-label={`${r.stars} out of 5 stars`}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} className={`size-3.5 ${n <= r.stars ? "fill-sun text-sun" : "fill-line text-line"}`} />
                      ))}
                    </span>
                  </div>
                </div>
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-muted">{r.text}</blockquote>
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show review ${index + 1}`}
            className={`h-2 rounded-full transition-all ${index === selectedIndex ? "w-6 bg-brand" : "w-2 bg-line"}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
