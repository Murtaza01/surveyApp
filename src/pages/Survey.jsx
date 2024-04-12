import { useState } from "react";
import FormLabel from "../components/FormLabel";

export default function Survey({ children, setScore, questions, choices }) {
  const [userChoice, setUserChoice] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  function handleClick() {
    setQuestionIndex((prev) => prev + 1);
    setScore((prevResults) => ({
      ...prevResults,
      score: prevResults.score + userChoice,
    }));
    setUserChoice(null);
  }

  const showSurvey = questionIndex === questions.length;

  return (
    <div className=" mx-2 min-h-48 bg-background shadow-borderSh mt-[20vh]  text-heading rounded-lg   sm:container  sm:mx-auto">
      <main>
        {!showSurvey ? (
          <div className=" container mx-auto p-2 ">
            <h2>{questions[questionIndex].question}</h2>
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
              onClick={handleClick}
            >
              Next
            </button>
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
}
