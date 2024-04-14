import { fetchResult } from "../util/http";
import { scoreAverage } from "../util/scoreAverage";

import useFetch from "../hooks/useFetch";
import Figure from "../components/Figure";
import Error from "../components/Error";
import errorViolet from "../assets/svg/errorFigureViolet.svg";
import errorYellow from "../assets/svg/errorFigureYellow.svg";
import survey from "../assets/svg/surveyFigureViolet.svg";

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

  const { score, user } = userResult;
  let res = "";

  if (score <= 19) {
    res = "poor health";
  } else if (score <= 39) {
    res = "not so bad health";
  } else {
    res = "good health";
  }
  const average = scoreAverage(surveyResult);

  return (
    <div className="text-heading">
      <div className=" mt-[15vh] text-center space-y-5">
        <h2 className="mb-8 text-xl ">Your Results</h2>
        <Figure theme={prevTheme} figureLight={survey} figureDark={survey} />

        <div className="">
          <p>your Results:{res}</p>
          <h4>{score}</h4>
          <h4>{user}</h4>
        </div>
      </div>

      {surveyResult &&
        surveyResult.map(({ user, score }, index) => {
          return (
            <ul key={index}>
              <li>{user}</li>
              <li>{score}</li>
            </ul>
          );
        })}
    </div>
  );
}
