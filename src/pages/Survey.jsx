import { useState } from "react";
import FormLabel from "../components/FormLabel";

export default function Survey({ setScore, onSet, questions, choices }) {
  const [userChoice, setUserChoice] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const newScore = parseInt(e.target[userChoice].value);

    setScore((prevResult) => ({
      ...prevResult,
      score: prevResult.score + newScore,
    }));
    setUserChoice(null);
    e.target.reset();
  }
  const showSurvey = questionIndex !== questions.length - 1;

  return (
    <div className=" mx-2 min-h-48 bg-altBg shadow-2xl shadow-shColor mt-[20vh]  text-heading rounded-lg   sm:container  sm:mx-auto">
      <div className=" container mx-auto p-2  ">
        <h2>{questions[questionIndex].question}</h2>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
          {choices.map((choice, index) => {
            return (
              <FormLabel
                key={choice}
                choice={choice}
                index={index}
                userChoice={userChoice}
                onSet={setUserChoice}
              />
            );
          })}
          <button
            className="bg-accent rounded-md"
            disabled={userChoice === null}
            onClick={() => {
              showSurvey
                ? setQuestionIndex((prev) => prev + 1)
                : onSet("ThankYou");
            }}
          >
            {showSurvey ? "Next Button" : "Show Result"}
          </button>
        </form>
      </div>
    </div>
  );
}
