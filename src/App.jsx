// hooks,states,utils
import { useState } from "react";
import { fetchQuestion } from "./util/http";
import useFetch from "./hooks/useFetch";
import useDarkMode from "./hooks/useDarkMode";

// components,pages
import Home from "./pages/Home";
import ThemeButton from "./layout/ThemeButton";
import Survey from "./pages/Survey";
import ThankYou from "./components/ThankYou";
import Figure from "./components/Figure";
import Results from "./pages/Results";
import Error from "./pages/Error";
import Loading from "./pages/Loading";
import Footer from "./layout/Footer";

// figures
import thankYouYellow from "./assets/svg/thankyouFigureYellow.svg";
import thankYouViolet from "./assets/svg/thankyouFigureViolet.svg";
import surveyYellow from "./assets/svg/surveyFigureYellow.svg";
import surveyViolet from "./assets/svg/surveyFigureViolet.svg";
import errorViolet from "./assets/svg/errorFigureViolet.svg";
import errorYellow from "./assets/svg/errorFigureYellow.svg";

function App() {
  const [showElement, setShowElement] = useState("Home");
  const [userResult, setUserResult] = useState({
    name: "",
    score: 0,
    gender: "",
    age: 0,
  });

  const [surveyData, error, isFetching] = useFetch(fetchQuestion);
  const [prevTheme, setTheme, theme] = useDarkMode();

  if (isFetching) {
    return <Loading message="getting data" />;
  } else if (error) {
    return (
      <Error title="An Error accord please try again" message={error.message}>
        <Figure
          theme={prevTheme}
          figureLight={errorYellow}
          figureDark={errorViolet}
        />
      </Error>
    );
  }

  const { questions, choices } = surveyData || [];
  return (
    <>
      <ThemeButton theme={theme} onSet={setTheme} />
      {showElement === "Home" && (
        <Home onSet={setShowElement}>
          <Figure
            figureLight={surveyYellow}
            figureDark={surveyViolet}
            theme={prevTheme}
          />
        </Home>
      )}
      {showElement === "Survey" && (
        <Survey
          questions={questions}
          choices={choices}
          setScore={setUserResult}
          onSet={setShowElement}
        >
          <ThankYou setUser={setUserResult} onSet={setShowElement}>
            <Figure
              theme={prevTheme}
              figureLight={thankYouYellow}
              figureDark={thankYouViolet}
            />
          </ThankYou>
        </Survey>
      )}
      {showElement === "Results" && (
        <Results userResult={userResult} prevTheme={prevTheme} />
      )}
      {showElement !== "Survey" && <Footer />}
    </>
  );
}

export default App;
