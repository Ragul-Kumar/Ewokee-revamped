// src/Layout.jsx
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { GATracker } from "./GATracker";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <>
      <GATracker /> {/* inside router context */}
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet /> {/* renders current route */}
      </main>
      <Footer />
    </>
  );
}
