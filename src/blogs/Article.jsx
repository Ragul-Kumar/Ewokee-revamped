import { Search } from "lucide-react";
import BlogHeader from "./BlogHeader";

const Article = () => {
  return (
    <>
      <BlogHeader />
      <section className="wrap py-12 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <label className="relative block">
            <span className="sr-only">Search articles</span>
            <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-brand" />
            <input type="search" placeholder="Search articles here" className="field !rounded-full !py-4 !pl-13" />
          </label>
        </div>

        <div className="mt-14 flex items-center gap-5">
          <h1 className="whitespace-nowrap font-display text-2xl font-extrabold text-ink sm:text-3xl">Featured this week</h1>
          <hr className="flex-1 border-t-2 border-line" />
        </div>
      </section>
    </>
  );
};

export default Article;
