import { useState } from "react";
import Button from "../components/Button";
import RadioInput from "../components/RadioInput";

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
    <div className="mx-3  min-h-48 bg-background shadow-borderSh mt-[18vh] min-[400px]:mt-[16vh]   text-heading rounded-lg   sm:container  sm:mx-auto">
      <main>
        {!showSurvey ? (
          <div className="px-3 py-5">
            <h2 className=" text-lg">
              {questionIndex + 1}. {questions[questionIndex].question}
            </h2>
            <div className="flex flex-col gap-2 my-3">
              {choices.map((choice, index) => {
                return (
                  <RadioInput
                    key={choice}
                    choice={choice}
                    index={index}
                    userChoice={userChoice}
                    onSet={setUserChoice}
                  />
                );
              })}
            </div>
            <div className="text-end">
              <Button
                onDisable={userChoice}
                handleClick={handleClick}
                style="px-5 rounded-sm"
              >
                Next
              </Button>
            </div>
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
}
