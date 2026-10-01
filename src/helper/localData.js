// Local placeholder data. Replaces the former backend so the frontend runs standalone.
import disha from "../assets/disha.svg";
import ishaswini from "../assets/ishaswini.svg";
import monika from "../assets/monika.svg";

const therapists = [
  {
    name: "Disha Pandit",
    category: "Clinical Psychologist",
    photourl: disha,
    rating: 4.9,
    reviewcount: 120,
    cost: [299, 799],
    language: ["English", "Hindi"],
    profile: {
      objective:
        "Helping you build healthier patterns and feel more like yourself.",
      approach:
        "A warm, practical approach grounded in CBT and mindfulness-based techniques.",
      concern: ["Anxiety", "Stress", "Relationships"],
      help: ["Coping skills", "Emotional regulation", "Self-confidence"],
    },
  },
  {
    name: "Ishaswini",
    category: "Counselling Psychologist",
    photourl: ishaswini,
    rating: 4.8,
    reviewcount: 85,
    cost: [299, 799],
    language: ["English", "Tamil"],
    profile: {
      objective: "Supporting you through life transitions with compassion.",
      approach: "Person-centred counselling in a safe, non-judgemental space.",
      concern: ["Low mood", "Career stress", "Self-esteem"],
      help: ["Clarity", "Resilience", "Healthy boundaries"],
    },
  },
  {
    name: "Monika",
    category: "Psychotherapist",
    photourl: monika,
    rating: 4.7,
    reviewcount: 64,
    cost: [349, 899],
    language: ["English", "Hindi"],
    profile: {
      objective: "Making therapy approachable, one conversation at a time.",
      approach: "Integrative therapy tailored to your pace and goals.",
      concern: ["Grief", "Burnout", "Family conflict"],
      help: ["Healing", "Stress relief", "Better communication"],
    },
  },
];

export const getTherapists = async () => therapists;

export const getTherapist = async (name) =>
  therapists.find((t) => t.name === name) ?? null;
