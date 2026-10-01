import { ChevronLeft } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <div className="border-b border-line bg-white">
      <div className="wrap flex flex-wrap items-center justify-between gap-4 py-5">
        <Link to="/resource" className="inline-flex items-center gap-1.5 text-sm font-bold text-muted hover:text-brand">
          <ChevronLeft className="size-4" /> Back to resources
        </Link>

        <div className="inline-flex rounded-full bg-canvas p-1">
          {[
            ["/resource/blog", "Blogs"],
            ["/resource/article", "Articles"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                  isActive ? "bg-white text-brand shadow-sm" : "text-muted hover:text-ink"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
