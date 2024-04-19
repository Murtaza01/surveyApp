import { fetchResult } from "../util/http";
// import { scoreAverage } from "../util/scoreAverage";
import { scoreResult } from "../util/scoreResult.jsx";

import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import Figure from "../components/Figure";
import errorViolet from "../assets/svg/errorFigureViolet.svg";
import errorYellow from "../assets/svg/errorFigureYellow.svg";
import ResultsCard from "../components/ResultsCard";

export default function Results({ userResult, prevTheme }) {
  const [surveyResult, error, isFetching] = useFetch(fetchResult, userResult);

  if (isFetching) {
    return <Loading message="getting results" />;
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

  const { score, user } = userResult;
  // gender used to display the other user results, check the json file
  // inside the backend, get the gender and display the user accordingly

  const showResult = scoreResult(score, prevTheme);
  const { figure, message } = showResult;
  // helper function for returning the user score based on condition

  // const average = scoreAverage(surveyResult);

  return (
    <div className="text-heading pb-5">
      <div className=" mt-[15vh] text-center space-y-5">
        <h2 className="mb-8 text-xl">
          {user} Result: {score}/
          <span className="text-paragraph text-lg">60</span>
        </h2>
        {figure}

        <p className="px-5 ">{message}</p>
      </div>

      <h2 className="my-10 text-xl text-center">Other People Results</h2>

      <div className="mt-5  grid min-[520px]:grid-cols-2 px-2 gap-3">
        {surveyResult &&
          surveyResult.map(({ user, score, gender, age }, index) => {
            return (
              <ResultsCard key={index} gender={gender} theme={prevTheme}>
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
