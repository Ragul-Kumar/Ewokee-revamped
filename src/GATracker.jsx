// src/GATracker.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-WPXHCQELCQ";

export const GATracker = () => {
  const location = useLocation();

  // Initialize GA once
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  // Automatically send pageview on every route change
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null; // Nothing to render
};
