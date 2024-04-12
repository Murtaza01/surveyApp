import { fetchResult } from "../util/http";
import useFetch from "../hooks/useFetch";
import Figure from "../components/Figure";
import Error from "../components/Error";
import errorViolet from "../assets/svg/errorFigureViolet.svg";
import errorYellow from "../assets/svg/errorFigureYellow.svg";

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

  return (
    <div>
      <h4>{userResult.score}</h4>
      <h4>{userResult.username}</h4>
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
