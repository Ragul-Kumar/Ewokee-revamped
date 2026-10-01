import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";

const stressQuestions = [
  { id: "stress_q1", text: "I feel overwhelmed by my daily responsibilities." },
  { id: "stress_q2", text: "I find it difficult to relax even when I have free time." },
  { id: "stress_q3", text: "I feel tired or drained most of the time." },
  { id: "stress_q4", text: "I find it hard to concentrate because of my thoughts." },
  { id: "stress_q5", text: "I feel tense or 'on edge' during the day." },
  { id: "stress_q6", text: "I feel like I don’t have enough time to get everything done." },
];

const options = [
  { value: 1, label: "Never" },
  { value: 2, label: "Rarely" },
  { value: 3, label: "Sometimes" },
  { value: 4, label: "Often" },
  { value: 5, label: "Always" },
];

const Stress = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);

  const currentQuestion = stressQuestions[currentIndex];
  const selected = responses[currentQuestion.id];
  const progress = ((currentIndex + (selected ? 1 : 0)) / stressQuestions.length) * 100;

  const handleNext = () => {
    if (currentIndex < stressQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const totalScore = Object.values(responses).reduce((sum, val) => sum + val, 0);
      const maxScore = stressQuestions.length * 5;
      setResult(Number(((totalScore / maxScore) * 100).toFixed(1)));
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setResponses({});
    setResult(null);
  };

  if (result !== null) {
    return (
      <div className="card mx-auto max-w-xl p-8 text-center sm:p-12">
        <p className="font-semibold text-muted">Your stress score</p>
        <p className="mt-2 font-display text-7xl font-extrabold text-brand">{result}%</p>
        <div className="mx-auto mt-6 h-3 max-w-sm overflow-hidden rounded-full bg-brand-soft">
          <div className="h-full rounded-full bg-gradient-to-r from-brand to-coral" style={{ width: `${result}%` }} />
        </div>
        <p className="mx-auto mt-6 max-w-sm text-muted">
          This is a quick snapshot, not a diagnosis. If your score feels high, talking to someone can help.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/quiz" className="btn btn-primary">
            Talk to a therapist <ArrowRight className="size-4" />
          </Link>
          <button type="button" onClick={restart} className="btn btn-ghost">
            <RotateCcw className="size-4" /> Retake
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card mx-auto max-w-xl p-6 sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => currentIndex > 0 && setCurrentIndex((prev) => prev - 1)}
          disabled={currentIndex === 0}
          aria-label="Previous question"
          className="grid size-10 place-items-center rounded-full border border-line text-ink hover:border-brand hover:text-brand disabled:opacity-30"
        >
          <ArrowLeft className="size-4" />
        </button>
        <h2 className="font-display text-lg font-extrabold text-ink sm:text-xl">Stress Questionnaire</h2>
        <span className="text-sm font-semibold text-muted">
          {currentIndex + 1} / {stressQuestions.length}
        </span>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-brand-soft" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-brand transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <p className="mt-9 text-center font-display text-xl font-extrabold leading-snug text-ink sm:text-2xl">
        {currentQuestion.text}
      </p>

      <fieldset className="mt-8 space-y-3">
        <legend className="sr-only">How often?</legend>
        {options.map((opt) => {
          const active = selected === opt.value;
          return (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center justify-between rounded-2xl border-2 px-5 py-4 font-semibold transition-colors ${
                active ? "border-brand bg-brand-soft text-brand" : "border-line text-ink hover:border-brand"
              }`}
            >
              <input
                type="radio"
                name={currentQuestion.id}
                value={opt.value}
                checked={active}
                onChange={() => setResponses((prev) => ({ ...prev, [currentQuestion.id]: opt.value }))}
                className="sr-only"
              />
              {opt.label}
              <span className={`grid size-6 place-items-center rounded-full border-2 ${active ? "border-brand bg-brand text-white" : "border-neutral-300"}`}>
                {active && <Check className="size-3.5" strokeWidth={3} />}
              </span>
            </label>
          );
        })}
      </fieldset>

      <button type="button" onClick={handleNext} disabled={!selected} className="btn btn-primary mt-8 w-full !py-4 text-base">
        {currentIndex === stressQuestions.length - 1 ? "Finish" : "Next"} <ArrowRight className="size-5" />
      </button>
    </div>
  );
};

export default Stress;
