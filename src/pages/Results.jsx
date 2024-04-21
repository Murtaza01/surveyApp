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
import Heading from "../components/Heading";

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
    <div className="text-primary pb-5">
      <div className=" mt-[15vh] text-center space-y-5">
        <Heading>
          {user} Result: {score}/
          <span className="text-secondary text-lg">60</span>
        </Heading>

        {figure}

        <p className="px-5 font-paragraph">{message}</p>
      </div>
      <Heading style="text-center mt-10">Other People Results</Heading>

      <div className="mt-8  grid min-[520px]:grid-cols-2 px-2 gap-3">
        {surveyResult &&
          surveyResult.map(({ user, score, gender, age }, index) => {
            return (
              <ResultsCard key={index} gender={gender} theme={prevTheme}>
                <span>
                  <h3 className="font-paragraph capitalize">{user}</h3>
                  <h4>{age}</h4>
                </span>
                <span>
                  <h3 className="font-paragraph">Score</h3>
                  <h3 className="font-heading text-accent2">{score}</h3>
                </span>
              </ResultsCard>
            );
          })}
      </div>
    </div>
  );
}
