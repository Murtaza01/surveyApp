import { fetchResult } from "../util/http";
import { scoreAverage } from "../util/scoreAverage";

import useFetch from "../hooks/useFetch";
import Figure from "../components/Figure";
import Error from "../components/Error";
import errorViolet from "../assets/svg/errorFigureViolet.svg";
import errorYellow from "../assets/svg/errorFigureYellow.svg";
import ResultsCard from "../components/ResultsCard";

import { scoreResult } from "../util/scoreResult.jsx";

export default function Results({ userResult, prevTheme }) {
  const [surveyResult, error] = useFetch(fetchResult, userResult);

  if (error) {
    return (
      <Error
        title="An Error accord please try again"
        message={error.message}
        theme={prevTheme}
      >
        <Figure
          theme={prevTheme}
          figureLight={errorYellow}
          figureDark={errorViolet}
        />
      </Error>
    );
  }

  const { score, user, gender } = userResult;
  // gender used to display the other user results, check the json file
  // inside the backend, get the gender and display the user accordingly

  const showResult = scoreResult(score, prevTheme);
  // helper function for returning the user score based on condition
  const average = scoreAverage(surveyResult);
  // for the average of the scores
  const { figure, message } = showResult;

  return (
    <div className="text-heading">
      <div className=" mt-[15vh] text-center space-y-5">
        <h2 className="mb-8 text-xl ">Your Results</h2>
        {figure}
        <div className="">
          <p>your Results:</p>
          {message}
          <h4>{score}</h4>
          <h4>{user}</h4>
        </div>
      </div>
      <div className="grid min-[500px]:grid-cols-2 px-2 gap-2">
        {surveyResult &&
          surveyResult.map(({ user, score, gender, age }, index) => {
            return (
              <ResultsCard key={index}>
                <span>
                  <h3>{user}</h3>
                  <h3>{age}</h3>
                </span>
                <span>
                  <h3>Score</h3>
                  <h3>{score}</h3>
                </span>
              </ResultsCard>
            );
          })}
      </div>
    </div>
  );
}
