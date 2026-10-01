import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export const ErrorPage = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 to-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-coral/10 blur-3xl" />
      <div className="wrap relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-[8rem] font-extrabold leading-none text-brand sm:text-[12rem]">404</p>
        <h1 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-lg text-muted">
          Oops! It looks like you’ve ventured into uncharted digital territory. The page you’re looking for
          doesn’t exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary mt-9 !px-7 !py-4 text-base">
          <Home className="size-5" /> Go back home
        </Link>
      </div>
    </section>
  );
};
