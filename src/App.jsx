import { useState } from "react";
import Home from "./pages/Home";
import ThemeButton from "./components/ThemeButton";
import Survey from "./pages/Survey";
import ThankYou from "./pages/ThankYou";
import Figure from "./components/Figure";
import Results from "./pages/Results";

import thankYouYellow from "./assets/thankyouFigureYellow.svg";
import thankYouViolet from "./assets/thankyouFigureViolet.svg";
import SurveyYellow from "./assets/surveyFigureYellow.svg";
import SurveyViolet from "./assets/surveyFigureViolet.svg";

import { fetchQuestion } from "./util/http";
import useFetch from "./hooks/useFetch";
import useDarkMode from "./hooks/useDarkMode";

// const choices = ["Not at all", "not much", ...];
// i can do it with words instead of numbers, although that will not
// be the same as the survey
function App() {
  const [showElement, setShowElement] = useState("Home");
  const [userResult, setUserResult] = useState({
    user: "unknown",
    score: 0,
  });

  const surveyData = useFetch(fetchQuestion);

  const backupArray = Array({
    questions: [],
    choices: [],
  });

  const { questions, choices } = surveyData || backupArray;
  const [prevTheme, setTheme, theme] = useDarkMode();

  return (
    <>
      <ThemeButton theme={theme} onSet={setTheme} />
      {showElement === "Home" && (
        <Home onSet={setShowElement}>
          <Figure
            figureLight={SurveyYellow}
            figureDark={SurveyViolet}
            prevTheme={prevTheme}
          />
        </Home>
      )}
      {showElement === "Survey" && (
        <Survey
          questions={questions}
          choices={choices}
          setScore={setUserResult}
          onSet={setShowElement}
        />
      )}
      {showElement === "ThankYou" && (
        <ThankYou setUser={setUserResult} onSet={setShowElement}>
          <Figure
            prevTheme={prevTheme}
            figureLight={thankYouYellow}
            figureDark={thankYouViolet}
          />
        </ThankYou>
      )}
      {showElement === "Results" && <Results userResult={userResult} />}
    </>
  );
}

export default App;
