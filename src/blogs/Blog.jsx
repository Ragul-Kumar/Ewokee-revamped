import { ArrowRight, Search } from "lucide-react";
import BlogHeader from "./BlogHeader";
import cover1 from "../assets/resources_1.svg";
import cover2 from "../assets/resources_2.svg";
import cover3 from "../assets/resources_3.svg";

const tags = ["Anxiety", "Depression", "Self-Growth", "Growth", "Relationship", "Adult ADHA", "Addiction"];

const posts = [
  { tag: "Love Language", title: "How to use it to improve your Relationship", cover: cover1, big: true },
  { tag: "Depression", title: "The impact of Obsessive Personality", cover: cover2 },
  { tag: "Depression", title: "The impact of Obsessive Personality", cover: cover3 },
  { tag: "Depression", title: "The impact of Obsessive Personality", cover: cover2 },
];

function Post({ p, big }) {
  return (
    <article
      className={`group card flex overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${
        big ? "flex-col" : "flex-row"
      }`}
    >
      <img
        src={p.cover}
        alt=""
        loading="lazy"
        className={big ? "aspect-[16/10] w-full object-cover" : "w-32 shrink-0 object-cover sm:w-44"}
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">{p.tag}</span>
          <span className="text-xs text-muted">4 Mins Read</span>
        </div>
        <h2 className={`mt-3 font-display font-extrabold text-ink ${big ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"}`}>
          {p.title}
        </h2>
        <p className="mt-2 text-sm text-muted">subtitle sample here</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-coral">
          Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}

const Blog = () => {
  return (
    <>
      <BlogHeader />

      <section className="wrap py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
            Words that heal, <span className="text-brand">insights that guide.</span>
          </h1>
          <p className="mt-5 text-lg text-muted">
            Explore reflections, stories, and experts advice for your mental wellness journey.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <label className="relative block">
            <span className="sr-only">Search blogs</span>
            <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-brand" />
            <input type="search" placeholder="Search blogs here" className="field !rounded-full !py-4 !pl-13" />
          </label>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 flex items-center gap-5">
          <h2 className="whitespace-nowrap font-display text-2xl font-extrabold text-ink sm:text-3xl">Featured this week</h2>
          <hr className="flex-1 border-t-2 border-line" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Post p={posts[0]} big />
          <div className="flex flex-col gap-6">
            {posts.slice(1).map((p, i) => (
              <Post key={i} p={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
