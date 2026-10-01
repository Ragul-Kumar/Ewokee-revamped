// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

import App from "./App";
import FrontPage from "./quiz/FrontPage";
import Question from "./quiz/Question";
import Match from "./match/Match";
import Privacy from "./components/Privacy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TherapistList from "./pages/TherapistList";
import Payment from "./payment/Payment";
import About_Therapist from "./pages/About_Therapist";
import Resources from "./pages/Resources";
import { ComingSoon } from "./error/ComingSoon";
import Services from "./pages/Services";
import Blog from "./blogs/Blog";
import Article from "./blogs/Article";
import Assessment from "./assessment/Assessment";
import Stress from "./assessment/Stress";
import { ErrorPage } from "./error/ErrorPage";
import Training from "./training/Training";

export const router = createBrowserRouter([
  {
    element: <Layout />, // Wrap all routes in Layout
    children: [
      { path: "/", element: <App /> },
      { path: "/quiz", element: <FrontPage /> },
      { path: "/question", element: <Question /> },
      { path: "/match", element: <Match /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/therapist", element: <TherapistList /> },
      { path: "/payment-status", element: <Payment /> },
      { path: "/therapist/about-therapist", element: <About_Therapist /> },
      { path: "/resource", element: <Resources /> },
      { path: "/coming", element: <ComingSoon /> },
      { path: "/services", element: <Services /> },
      { path: "/resource/blog", element: <Blog /> },
      { path: "/resource/article", element: <Article /> },
      { path: "/resource/assessment", element: <Assessment /> },
      { path: "/stress", element: <Stress /> },
      { path: "/training", element: <Training /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
